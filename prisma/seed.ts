import {
  PrismaClient,
  MeioDePagamento,
  TipoRelatorio,
} from "../generated/prisma";
const prisma = new PrismaClient();

async function processarGastoCompleto(gastoData: {
  valor: number;
  descricao: string;
  data: Date;
  meioPagamento: MeioDePagamento;
  numParcelas: number;
  usuarioId: number;
  cartaoId?: number;
  categoriaId?: number;
}) {
  try {
    const gasto = await prisma.gasto.create({
      data: {
        ...gastoData,
        numParcelas:
          gastoData.meioPagamento === "CREDITO" ? gastoData.numParcelas : 1,
      },
    });

    if (gastoData.cartaoId && gastoData.meioPagamento === "CREDITO") {
      const valorParcela = gastoData.valor / gastoData.numParcelas;

      for (let i = 0; i < gastoData.numParcelas; i++) {
        const dataReferente = new Date(gastoData.data);
        const dataVencimento = new Date(gastoData.data);
        dataReferente.setMonth(gastoData.data.getMonth() + i);
        dataVencimento.setMonth(gastoData.data.getMonth() + i + 1);

        await prisma.parcela.create({
          data: {
            valor: valorParcela,
            data_vencimento: dataVencimento,
            paga: false,
            numeroParcela: i + 1,
            totalParcelas: gastoData.numParcelas,
            gastoId: gasto.id,
          },
        });
        await atualizarFaturaIndividual(
          gastoData.cartaoId,
          gasto.id,
          valorParcela,
          dataReferente
        );
      }
    } else if (gastoData.cartaoId) {
      await atualizarFaturaIndividual(
        gastoData.cartaoId,
        gasto.id,
        gastoData.valor,
        gastoData.data
      );
    }

    return gasto;
  } catch (error) {
    console.error("Erro ao processar gasto:", error);
    throw error;
  }
}

async function atualizarFaturaIndividual(
  cartaoId: number,
  gastoId: number,
  valor: number,
  dataGasto: Date
) {
  const mesReferente = new Date(dataGasto);
  mesReferente.setDate(1);
  mesReferente.setHours(0, 0, 0, 0);

  const vencimento = new Date(mesReferente);
  vencimento.setMonth(mesReferente.getMonth() + 1);
  vencimento.setDate(6);

  try {
    const faturaExistente = await prisma.fatura.findFirst({
      where: { cartaoId, mes_referente: mesReferente },
    });

    if (faturaExistente) {
      await prisma.fatura.update({
        where: { id: faturaExistente.id },
        data: {
          total: { increment: valor },
          gastos: { connect: { id: gastoId } },
        },
      });
    } else {
      await prisma.fatura.create({
        data: {
          cartaoId,
          mes_referente: mesReferente,
          vencimento,
          total: valor,
          gastos: { connect: { id: gastoId } },
        },
      });
    }
  } catch (error) {
    console.error("Erro ao atualizar fatura:", error);
    throw error;
  }
}

async function main() {
  await prisma.$executeRaw`TRUNCATE TABLE "Relatorio", "Fatura", "Parcela", "Gasto", "Cartao", "Usuario", "Categoria" CASCADE`;
  const usuario1 = await prisma.usuario.create({
    data: {
      nome: "Lucas Dias",
      email: "emaillucas@email.com",
      senha: "senha123",
      cartoes: {
        create: [
          {
            banco: "BancoConta",
            ultimos_quatro_digitos: "1234",
            limite_total: 5000,
            limite_restante: 5000,
          },
          {
            banco: "BancoCerto",
            ultimos_quatro_digitos: "5678",
            limite_total: 3000,
            limite_restante: 3000,
          },
        ],
      },
    },
    include: {
      cartoes: true,
    },
  });

  const usuario2 = await prisma.usuario.create({
    data: {
      nome: "Maria",
      email: "emailmaria@email.com",
      senha: "senha456",
    },
  });

  const alimentacao = await prisma.categoria.create({
    data: {
      nome: "Alimentação",
      descricao: "Gastos com comida",
    },
  });

  const transporte = await prisma.categoria.create({
    data: {
      nome: "Transporte",
      descricao: "Gastos com locomoção",
    },
  });

  const eletronicos = await prisma.categoria.create({
    data: {
      nome: "Eletronicos",
      descricao: "Eletrodomésticos e dispositivos",
    },
  });

  const gasto1 = await processarGastoCompleto({
    valor: 150.75,
    descricao: "Supermercado",
    data: new Date(),
    meioPagamento: MeioDePagamento.DEBITO,
    numParcelas: 1,
    usuarioId: usuario1.id,
    cartaoId: usuario1.cartoes[0].id,
    categoriaId: alimentacao.id,
  });

  const gasto2 = await processarGastoCompleto({
    valor: 1800.0,
    descricao: "Computador",
    data: new Date(),
    meioPagamento: MeioDePagamento.CREDITO,
    numParcelas: 12,
    usuarioId: usuario1.id,
    cartaoId: usuario1.cartoes[1].id,
    categoriaId: eletronicos.id,
  });

  const gasto3 = await processarGastoCompleto({
    valor: 500,
    descricao: "Geladeira",
    data: new Date(),
    meioPagamento: MeioDePagamento.CREDITO,
    numParcelas: 5,
    usuarioId: usuario1.id,
    cartaoId: usuario1.cartoes[0].id,
    categoriaId: eletronicos.id,
  });

  const gasto4 = await processarGastoCompleto({
    valor: 600.0,
    descricao: "Celular",
    data: new Date(),
    meioPagamento: MeioDePagamento.PIX,
    numParcelas: 1,
    usuarioId: usuario2.id,
    categoriaId: eletronicos.id,
  });

  const gasto5 = await processarGastoCompleto({
    valor: 1200.0,
    descricao: "Móveis para casa",
    data: new Date(),
    meioPagamento: MeioDePagamento.DINHEIRO,
    numParcelas: 1,
    usuarioId: usuario2.id,
  });

  const gasto6 = await processarGastoCompleto({
    valor: 250.5,
    descricao: "Curso online",
    data: new Date(),
    meioPagamento: MeioDePagamento.PIX,
    numParcelas: 1,
    usuarioId: usuario2.id,
  });

  const gasto7 = await processarGastoCompleto({
    valor: 20,
    descricao: "Lanche",
    data: new Date(),
    meioPagamento: MeioDePagamento.DEBITO,
    numParcelas: 1,
    usuarioId: usuario1.id,
    cartaoId: usuario1.cartoes[1].id,
    categoriaId: alimentacao.id,
  });

  await prisma.relatorio.create({
    data: {
      usuarioId: usuario1.id,
      data_geracao: new Date(),
      tipo: TipoRelatorio.MENSAL,
      dados: JSON.stringify({
        totalGastos: 1350.75,
        categorias: [
          { nome: "Alimentação", total: 150.75 },
          { nome: "Tecnologia", total: 1200.0 },
        ],
      }),
    },
  });

  console.log("Seed realizado com sucesso!");
}

main()
  .catch((e) => {
    console.error("Erro no seed:", e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
    console.log("Seed concluído!");
  });
