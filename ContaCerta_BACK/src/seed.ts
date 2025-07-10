import { PrismaClient } from "../generated/prisma";
import { MeioDePagamento, TipoRelatorio } from "../generated/prisma";
import argon2 from 'argon2';

const prisma = new PrismaClient();

async function calcularDadosRelatorio(usuarioId: number, tipo: TipoRelatorio) {
  const usuario = await prisma.usuario.findUnique({
    where: { id: usuarioId },
    include: {
      gastos: {
        include: {
          categoria: true,
          parcelas: true,
        },
      },
      cartoes: true,
    },
  });

  if (!usuario) throw new Error("Usuário não encontrado");

  // Período do relatório
  const hoje = new Date();
  let inicioPeriodo = new Date(hoje);
  inicioPeriodo.setDate(1);
  inicioPeriodo.setHours(0, 0, 0, 0);

  let fimPeriodo = new Date(inicioPeriodo);

  switch (tipo) {
    case TipoRelatorio.MENSAL:
      fimPeriodo.setMonth(fimPeriodo.getMonth() + 1);
      break;
    case TipoRelatorio.ANUAL:
      fimPeriodo.setFullYear(fimPeriodo.getFullYear() + 1);
      break;
    default:
      throw new Error("Tipo não suportado");
  }

  fimPeriodo.setMilliseconds(-1);

  // Filtrar gastos no periodo
  const gastosFiltrados = usuario.gastos.filter((gasto) => {
    return gasto.data >= inicioPeriodo && gasto.data <= fimPeriodo;
  });

  // Total
  const totalGastos = gastosFiltrados.reduce(
    (total, gasto) => total + gasto.valor,
    0
  );

  // Agrupar por categoria
  const gastosPorCategoria = gastosFiltrados.reduce((categorias, gasto) => {
    const nomeCategoria = gasto.categoria?.nome || "Sem Categoria";
    categorias[nomeCategoria] = (categorias[nomeCategoria] || 0) + gasto.valor;
    return categorias;
  }, {} as Record<string, number>);

  // Agrupar por meio de pagamento
  const gastosPorMeioPagamento = gastosFiltrados.reduce(
    (MeioPagamentos, gasto) => {
      MeioPagamentos[gasto.meioPagamento] =
        (MeioPagamentos[gasto.meioPagamento] || 0) + gasto.valor;
      return MeioPagamentos;
    },
    {} as Record<string, number>
  );

  // Saldos dos cartões
  const saldoPorCartao = usuario.cartoes.reduce((cartoes, cartao) => {
    const nomeCartao = `${cartao.banco} (${cartao.ultimosQuatroDigitos || "****"
      })`;
    cartoes[nomeCartao] = cartao.limiteRestante;
    return cartoes;
  }, {} as Record<string, number>);

  return {
    totalGastos,
    gastosPorCategoria,
    gastosPorMeioPagamento,
    quantidadeGastos: gastosFiltrados.length,
    saldoPorCartao,
    inicioPeriodo,
    fimPeriodo,
  };
}

async function main() {
  // Limpar o banco de dados
  await prisma.notificacao.deleteMany();
  await prisma.parcela.deleteMany();
  await prisma.fatura.deleteMany();
  await prisma.gasto.deleteMany();
  await prisma.divisaoDeGasto.deleteMany();
  await prisma.relatorio.deleteMany();
  await prisma.cartao.deleteMany();
  await prisma.categoria.deleteMany();
  await prisma.usuario.deleteMany();

  const senhaHashLucas = await argon2.hash('senha123');
  const senhaHashMaria = await argon2.hash('senha456');
  // Categorias
  const categoriaAlimentacao = await prisma.categoria.create({
    data: {
      nome: "Alimentação",
      descricao: "Gastos com alimentação",
    },
  });

  const categoriaLazer = await prisma.categoria.create({
    data: {
      nome: "Lazer",
      descricao: "Gastos com entretenimento",
    },
  });

  const categoriaTransporte = await prisma.categoria.create({
    data: {
      nome: "Transporte",
      descricao: "Gastos com transporte",
    },
  });

  const categoriaMoradia = await prisma.categoria.create({
    data: {
      nome: "Moradia",
      descricao: "Gastos com casa",
    },
  });

  // Usuários
  const usuario1 = await prisma.usuario.create({
    data: {
      nome: "Lucas Dias",
      email: "lucasdias@email.com",
      senha: senhaHashLucas,
    },
  });

  const usuario2 = await prisma.usuario.create({
    data: {
      nome: "Maria",
      email: "maria@email.com",
      senha: senhaHashMaria,
    },
  });

  // Cartões
  const cartaoLucas = await prisma.cartao.create({
    data: {
      banco: "Banco do Brasil",
      limiteTotal: 5000,
      limiteRestante: 5000,
      ultimosQuatroDigitos: "1234",
      usuarioId: usuario1.id,
    },
  });

  const cartaoMaria = await prisma.cartao.create({
    data: {
      banco: "Itaú",
      limiteTotal: 3000,
      limiteRestante: 3000,
      ultimosQuatroDigitos: "5678",
      usuarioId: usuario2.id,
    },
  });

  const cartaoLucas2 = await prisma.cartao.create({
    data: {
      banco: "Nubank",
      limiteTotal: 4000,
      limiteRestante: 4000,
      ultimosQuatroDigitos: "4321",
      usuarioId: usuario1.id,
    },
  });

  // Gastos variados (débito, crédito, pix, dinheiro)
  const hoje = new Date();
  const ontem = new Date(hoje);
  ontem.setDate(hoje.getDate() - 1);
  const semanaPassada = new Date(hoje);
  semanaPassada.setDate(hoje.getDate() - 7);

  // Crédito com parcelamento 3x
  const valorCelular = 900;
  const gastoCreditoCelular = await prisma.gasto.create({
    data: {
      valor: valorCelular,
      descricao: "Celular novo",
      data: hoje,
      meioPagamento: MeioDePagamento.CREDITO,
      usuarioId: usuario1.id,
      numParcelas: 3,
      categoriaId: categoriaLazer.id,
      cartaoId: cartaoLucas.id,
      parcelas: {
        create: [
          {
            valor: 300,
            dataVencimento: new Date(
              hoje.getFullYear(),
              hoje.getMonth() + 1,
              6
            ),
            paga: false,
            numeroParcela: 1,
            totalParcelas: 3,
          },
          {
            valor: 300,
            dataVencimento: new Date(
              hoje.getFullYear(),
              hoje.getMonth() + 2,
              6
            ),
            paga: false,
            numeroParcela: 2,
            totalParcelas: 3,
          },
          {
            valor: 300,
            dataVencimento: new Date(
              hoje.getFullYear(),
              hoje.getMonth() + 3,
              6
            ),
            paga: false,
            numeroParcela: 3,
            totalParcelas: 3,
          },
        ],
      },
    },
    include: {
      parcelas: true,
    },
  });

  // Atualiza limite do cartão (busca o valor atualizado do banco)
  let cartaoLucasAtual = await prisma.cartao.findUnique({ where: { id: cartaoLucas.id } });
  await prisma.cartao.update({
    where: { id: cartaoLucas.id },
    data: { limiteRestante: (cartaoLucasAtual?.limiteRestante ?? 0) - valorCelular },
  });

  // Faturas para as parcelas
  for (const parcela of gastoCreditoCelular.parcelas) {
    const mesReferente = new Date(parcela.dataVencimento);
    mesReferente.setMonth(mesReferente.getMonth() - 1);

    // Verifica se já existe fatura para o cartão e mês
    const faturaExistente = await prisma.fatura.findFirst({
      where: {
        cartaoId: cartaoLucas.id,
        mesReferente: mesReferente,
      },
    });
    if (faturaExistente) {
      // Atualiza valorTotal e conecta a nova parcela
      await prisma.fatura.update({
        where: { id: faturaExistente.id },
        data: {
          valorTotal: faturaExistente.valorTotal + parcela.valor,
          parcelas: {
            connect: { id: parcela.id },
          },
        },
      });
    } else {
      await prisma.fatura.create({
        data: {
          cartaoId: cartaoLucas.id,
          mesReferente: mesReferente,
          vencimento: parcela.dataVencimento,
          valorTotal: parcela.valor,
          parcelas: {
            connect: { id: parcela.id },
          },
        },
      });
    }
  }

  // Crédito em 1x (Supermercado)
  const valorSupermercado = 150;
  const gastoCreditoSupermercado = await prisma.gasto.create({
    data: {
      valor: valorSupermercado,
      descricao: "Supermercado",
      data: ontem,
      meioPagamento: MeioDePagamento.CREDITO,
      usuarioId: usuario1.id,
      numParcelas: 1,
      categoriaId: categoriaAlimentacao.id,
      cartaoId: cartaoLucas.id,
      parcelas: {
        create: {
          valor: valorSupermercado,
          dataVencimento: new Date(ontem.getFullYear(), ontem.getMonth() + 1, 6),
          paga: false,
          numeroParcela: 1,
          totalParcelas: 1,
        },
      },
    },
    include: {
      parcelas: true,
    },
  });

  // Atualiza limite do cartão (busca o valor atualizado do banco)
  cartaoLucasAtual = await prisma.cartao.findUnique({ where: { id: cartaoLucas.id } });
  await prisma.cartao.update({
    where: { id: cartaoLucas.id },
    data: { limiteRestante: (cartaoLucasAtual?.limiteRestante ?? 0) - valorSupermercado },
  });

  // Fatura para a parcela do supermercado
  for (const parcela of gastoCreditoSupermercado.parcelas) {
    const mesReferente = new Date(parcela.dataVencimento);
    mesReferente.setMonth(mesReferente.getMonth() - 1);

    const faturaExistente = await prisma.fatura.findFirst({
      where: {
        cartaoId: cartaoLucas.id,
        mesReferente: mesReferente,
      },
    });
    if (faturaExistente) {
      await prisma.fatura.update({
        where: { id: faturaExistente.id },
        data: {
          valorTotal: faturaExistente.valorTotal + parcela.valor,
          parcelas: {
            connect: { id: parcela.id },
          },
        },
      });
    } else {
      await prisma.fatura.create({
        data: {
          cartaoId: cartaoLucas.id,
          mesReferente: mesReferente,
          vencimento: parcela.dataVencimento,
          valorTotal: parcela.valor,
          parcelas: {
            connect: { id: parcela.id },
          },
        },
      });
    }
  }

  // Dinheiro
  const valorCinema = 20;
  await prisma.gasto.create({
    data: {
      valor: valorCinema,
      descricao: "Cinema",
      data: hoje,
      meioPagamento: MeioDePagamento.DINHEIRO,
      usuarioId: usuario2.id,
      numParcelas: 1,
      categoriaId: categoriaLazer.id,
      parcelas: {
        create: {
          valor: 20,
          dataVencimento: hoje,
          paga: true,
          numeroParcela: 1,
          totalParcelas: 1,
        },
      },
    },
  });

  // PIX
  const valorUber = 16;
  await prisma.gasto.create({
    data: {
      valor: valorUber,
      descricao: "Uber",
      data: hoje,
      meioPagamento: MeioDePagamento.PIX,
      usuarioId: usuario2.id,
      numParcelas: 1,
      categoriaId: categoriaTransporte.id,
      parcelas: {
        create: {
          valor: 16,
          dataVencimento: hoje,
          paga: true,
          numeroParcela: 1,
          totalParcelas: 1,
        },
      },
    },
  });

  // Crédito sem parcelamento
  const valorViagem = 160;
  const gastoCreditoViagem = await prisma.gasto.create({
    data: {
      valor: valorViagem,
      descricao: "Viagem",
      data: semanaPassada,
      meioPagamento: MeioDePagamento.CREDITO,
      usuarioId: usuario1.id,
      numParcelas: 1,
      categoriaId: categoriaTransporte.id,
      cartaoId: cartaoLucas2.id,
      parcelas: {
        create: {
          valor: 160,
          dataVencimento: new Date(
            semanaPassada.getFullYear(),
            semanaPassada.getMonth() + 1,
            6
          ),
          paga: false,
          numeroParcela: 1,
          totalParcelas: 1,
        },
      },
    },
    include: {
      parcelas: true,
    },
  });

  // Atualiza limite do cartão (busca o valor atualizado do banco)
  let cartaoLucas2Atual = await prisma.cartao.findUnique({ where: { id: cartaoLucas2.id } });
  await prisma.cartao.update({
    where: { id: cartaoLucas2.id },
    data: { limiteRestante: (cartaoLucas2Atual?.limiteRestante ?? 0) - valorViagem },
  });

   // Faturas para as parcelas
  for (const parcela of gastoCreditoViagem.parcelas) {
    const mesReferente = new Date(parcela.dataVencimento);
    mesReferente.setMonth(mesReferente.getMonth() - 1);

    const faturaExistente = await prisma.fatura.findFirst({
      where: {
        cartaoId: cartaoLucas2.id,
        mesReferente: mesReferente,
      },
    });
    if (faturaExistente) {
      await prisma.fatura.update({
        where: { id: faturaExistente.id },
        data: {
          valorTotal: faturaExistente.valorTotal + parcela.valor,
          parcelas: {
            connect: { id: parcela.id },
          },
        },
      });
    } else {
      await prisma.fatura.create({
        data: {
          cartaoId: cartaoLucas2.id,
          mesReferente: mesReferente,
          vencimento: parcela.dataVencimento,
          valorTotal: parcela.valor,
          parcelas: {
            connect: { id: parcela.id },
          },
        },
      });
    }
  }

  // Crédito com parcelamento 2x
  const valorMoveis = 600;
  const gastoCreditoMoveis = await prisma.gasto.create({
    data: {
      valor: valorMoveis,
      descricao: "Móveis para casa",
      data: semanaPassada,
      meioPagamento: MeioDePagamento.CREDITO,
      usuarioId: usuario1.id,
      numParcelas: 2,
      categoriaId: categoriaMoradia.id,
      cartaoId: cartaoLucas2.id,
      parcelas: {
        create: [
          {
            valor: 300,
            dataVencimento: new Date(
              semanaPassada.getFullYear(),
              semanaPassada.getMonth() + 1,
              6
            ),
            paga: false,
            numeroParcela: 1,
            totalParcelas: 2,
          },
          {
            valor: 300,
            dataVencimento: new Date(
              semanaPassada.getFullYear(),
              semanaPassada.getMonth() + 2,
              6
            ),
            paga: false,
            numeroParcela: 2,
            totalParcelas: 2,
          },
        ],
      },
    },
    include: {
      parcelas: true,
    },
  });

  // Atualiza limite do cartão (busca o valor atualizado do banco)
  cartaoLucas2Atual = await prisma.cartao.findUnique({ where: { id: cartaoLucas2.id } });
  await prisma.cartao.update({
    where: { id: cartaoLucas2.id },
    data: { limiteRestante: (cartaoLucas2Atual?.limiteRestante ?? 0) - valorMoveis },
  });

  // Faturas para as parcelas
  for (const parcela of gastoCreditoMoveis.parcelas) {
    const mesReferente = new Date(parcela.dataVencimento);
    mesReferente.setMonth(mesReferente.getMonth() - 1);

    const faturaExistente = await prisma.fatura.findFirst({
      where: {
        cartaoId: cartaoLucas2.id,
        mesReferente: mesReferente,
      },
    });
    if (faturaExistente) {
      await prisma.fatura.update({
        where: { id: faturaExistente.id },
        data: {
          valorTotal: faturaExistente.valorTotal + parcela.valor,
          parcelas: {
            connect: { id: parcela.id },
          },
        },
      });
    } else {
      await prisma.fatura.create({
        data: {
          cartaoId: cartaoLucas2.id,
          mesReferente: mesReferente,
          vencimento: parcela.dataVencimento,
          valorTotal: parcela.valor,
          parcelas: {
            connect: { id: parcela.id },
          },
        },
      });
    }
  }

  // Divisão de gasto
  const valorjantar = 600;
  const divisaoGasto = await prisma.divisaoDeGasto.create({
    data: {
      valorTotal: valorjantar,
      descricao: "Jantar",
      data: hoje,
      meioPagamento: MeioDePagamento.CREDITO,
      numParcelas: 2,
      categoriaId: categoriaAlimentacao.id,
      cartaoId: cartaoMaria.id,
      usuarios: {
        connect: [{ id: usuario1.id }, { id: usuario2.id }],
      },
      gastos: {
        create: [
          {
            valor: 300,
            descricao: "Jantar - parte Lucas",
            data: hoje,
            meioPagamento: MeioDePagamento.DINHEIRO,
            usuarioId: usuario1.id,
            numParcelas: 1,
            categoriaId: categoriaAlimentacao.id,
            parcelas: {
              create: {
                valor: 300,
                dataVencimento: hoje,
                paga: true,
                numeroParcela: 1,
                totalParcelas: 1,
              },
            },
          },
          {
            valor: 300,
            descricao: "Jantar - parte Maria",
            data: hoje,
            meioPagamento: MeioDePagamento.CREDITO,
            usuarioId: usuario2.id,
            numParcelas: 2,
            categoriaId: categoriaAlimentacao.id,
            cartaoId: cartaoMaria.id,
            parcelas: {
              create: [
                {
                  valor: 150,
                  dataVencimento: new Date(
                    hoje.getFullYear(),
                    hoje.getMonth() + 1,
                    6
                  ),
                  paga: false,
                  numeroParcela: 1,
                  totalParcelas: 2,
                },
                {
                  valor: 150,
                  dataVencimento: new Date(
                    hoje.getFullYear(),
                    hoje.getMonth() + 2,
                    6
                  ),
                  paga: false,
                  numeroParcela: 2,
                  totalParcelas: 2,
                },
              ],
            },
          },
        ],
      },
    },
    include: {
      gastos: {
        include: {
          parcelas: true,
        },
      },
    },
  });

  // Atualiza limite do cartão
  await prisma.cartao.update({
    where: { id: cartaoMaria.id },
    data: { limiteRestante: cartaoMaria.limiteRestante - 300 },
  });

  for (const gasto of divisaoGasto.gastos) {
    if (gasto.meioPagamento === "CREDITO") {
      for (const parcela of gasto.parcelas) {
        const mesReferente = new Date(parcela.dataVencimento);
        mesReferente.setMonth(mesReferente.getMonth() - 1);

        const faturaExistente = await prisma.fatura.findFirst({
          where: {
            cartaoId: cartaoMaria.id,
            mesReferente: mesReferente,
          },
        });
        if (faturaExistente) {
          await prisma.fatura.update({
            where: { id: faturaExistente.id },
            data: {
              valorTotal: faturaExistente.valorTotal + parcela.valor,
              parcelas: {
                connect: { id: parcela.id },
              },
            },
          });
        } else {
          await prisma.fatura.create({
            data: {
              cartaoId: cartaoMaria.id,
              mesReferente: mesReferente,
              vencimento: parcela.dataVencimento,
              valorTotal: parcela.valor,
              parcelas: {
                connect: { id: parcela.id },
              },
            },
          });
        }
      }
    }
  }

  // Relatórios
  const dadosRelatorioLucas = await calcularDadosRelatorio(
    usuario1.id,
    TipoRelatorio.MENSAL
  );
  await prisma.relatorio.create({
    data: {
      usuarioId: usuario1.id,
      dataGeracao: new Date(),
      tipo: TipoRelatorio.MENSAL,
      dados: dadosRelatorioLucas,
      inicioPeriodo: dadosRelatorioLucas.inicioPeriodo,
      fimPeriodo: dadosRelatorioLucas.fimPeriodo,
    },
  });

  const dadosRelatorioMaria = await calcularDadosRelatorio(
    usuario2.id,
    TipoRelatorio.MENSAL
  );
  await prisma.relatorio.create({
    data: {
      usuarioId: usuario2.id,
      dataGeracao: new Date(),
      tipo: TipoRelatorio.MENSAL,
      dados: dadosRelatorioMaria,
      inicioPeriodo: dadosRelatorioMaria.inicioPeriodo,
      fimPeriodo: dadosRelatorioMaria.fimPeriodo,
    },
  });

  // Notificações
  await prisma.notificacao.create({
    data: {
      mensagem: "Você tem uma fatura vencendo em 5 dias",
      usuarioId: usuario1.id,
      visualizado: false,
    },
  });

  await prisma.notificacao.create({
    data: {
      mensagem: "Seu gasto no restaurante foi dividido com Maria",
      usuarioId: usuario1.id,
      visualizado: true,
    },
  });

  await prisma.notificacao.create({
    data: {
      mensagem: "Seu limite no cartão Itaú foi atualizado",
      usuarioId: usuario2.id,
      visualizado: false,
    },
  });

  // Buscar limites atualizados do banco antes de imprimir
  const cartaoAtualizadoLucas = await prisma.cartao.findUnique({ where: { id: cartaoLucas.id } });
  const cartaoAtualizadoLucas2 = await prisma.cartao.findUnique({ where: { id: cartaoLucas2.id } });
  const cartaoAtualizadoMaria = await prisma.cartao.findUnique({ where: { id: cartaoMaria.id } });

  await prisma.$disconnect(); // Garante flush do Prisma antes do print

  console.log("Seed concluído com sucesso!");
  console.log("Limites atualizados:");
  console.log(`- Cartão Lucas (BB): R$ ${cartaoAtualizadoLucas?.limiteRestante} de R$ 5000`);
  console.log(`- Cartão Lucas (Nubank): R$ ${cartaoAtualizadoLucas2?.limiteRestante} de R$ 4000`);
  console.log(`- Cartão Maria (Itaú): R$ ${cartaoAtualizadoMaria?.limiteRestante} de R$ 3000`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
