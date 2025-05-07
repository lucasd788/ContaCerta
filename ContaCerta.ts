enum MeioDePagamento {
  DINHEIRO = "DINHEIRO",
  PIX = "PIX",
  DEBITO = "DEBITO",
  CREDITO = "CREDITO",
}

enum TipoRelatorio {
  MENSAL = "MENSAL",
  ANUAL = "ANUAL",
  PERSONALIZADO = "PERSONALIZADO",
}

const _faturas: Fatura[] = [];

class Categoria {
  nome: string;
  descricao?: string;

  constructor(nome: string, descricao?: string) {
    this.nome = nome;
    this.descricao = descricao;
  }
}

class Parcela {
  valor: number;
  data_vencimento: Date;
  paga: boolean;
  numeroParcela: number;
  totalParcelas: number;

  constructor(
    valor: number,
    data_vencimento: Date,
    paga: boolean = false,
    numeroParcela: number,
    totalParcelas: number
  ) {
    this.valor = valor;
    this.data_vencimento = data_vencimento;
    this.paga = paga;
    this.numeroParcela = numeroParcela;
    this.totalParcelas = totalParcelas;
  }
}

class Gasto {
  valor: number;
  descricao: string;
  data: Date;
  meioPagamento: MeioDePagamento;
  categoria?: Categoria;
  numParcelas: number;
  usuarioResponsavel: Usuario;
  cartao?: Cartao;
  parcelas: Parcela[];

  constructor(
    valor: number,
    descricao: string,
    data: Date,
    meioPagamento: MeioDePagamento,
    usuarioResponsavel: Usuario,
    numParcelas: number = 1,
    categoria?: Categoria,
    cartao?: Cartao
  ) {
    if (numParcelas < 1) numParcelas = 1;
    if (valor <= 0) throw new Error("Valor deve ser positivo");
    if (
      (meioPagamento === MeioDePagamento.CREDITO ||
        meioPagamento === MeioDePagamento.DEBITO) &&
      !cartao
    )
      throw new Error(
        "Cartão é obrigatório para pagamento no crédito OU débito"
      );

    if (numParcelas > 1 && meioPagamento !== MeioDePagamento.CREDITO)
      throw new Error("Parcelamento só é permitido no crédito");

    this.valor = valor;
    this.descricao = descricao;
    this.data = data;
    this.meioPagamento = meioPagamento;
    this.usuarioResponsavel = usuarioResponsavel;
    this.numParcelas = numParcelas;
    this.categoria = categoria;
    this.cartao = cartao;
    this.parcelas = [];

    this.criarParcelas();
    this.adicionarNasFaturas();
  }

  private criarParcelas(): void {
    const valorParcela = this.valor / this.numParcelas;

    for (let i = 1; i <= this.numParcelas; i++) {
      const dataVencimento = this.calcularDataVencimentoParcela(i);
      this.parcelas.push(
        new Parcela(valorParcela, dataVencimento, false, i, this.numParcelas)
      );
    }
  }

  private calcularDataVencimentoParcela(numeroParcela: number): Date {
    const data = new Date(this.data);
    data.setMonth(data.getMonth() + numeroParcela - 1);
    return data;
  }

  private adicionarNasFaturas(): void {
    for (const parcela of this.parcelas) {
      const mesReferente = new Date(parcela.data_vencimento);
      mesReferente.setDate(1); // Primeiro dia do mês

      const vencimento = new Date(mesReferente);
      vencimento.setMonth(vencimento.getMonth() + 1); // Vencimento no mês seguinte
      vencimento.setDate(10); // Dia 10 do mês seguinte (exemplo)

      let faturaExistente = _faturas.find(
        (f) =>
          f.cartao === this.cartao &&
          f.mes_referente.getTime() === mesReferente.getTime()
      );

      if (!faturaExistente) {
        faturaExistente = new Fatura(this.cartao!, mesReferente, vencimento, 0);
        _faturas.push(faturaExistente);
      }

      const gastoParcela = new Gasto(
        parcela.valor,
        `${this.descricao} (${parcela.numeroParcela}/${parcela.totalParcelas})`,
        this.data,
        this.meioPagamento,
        this.usuarioResponsavel,
        1,
        this.categoria,
        this.cartao
      );

      gastoParcela.parcelas = [];

      faturaExistente.adicionarGasto(gastoParcela);
    }
  }
}

class Cartao {
  banco: string;
  ultimos_quatro_digitos?: string;
  limite_total: number;
  limite_restante: number;

  constructor(
    banco: string,
    limite_total: number,
    limite_restante: number,
    ultimos_quatro_digitos?: string
  ) {
    if (limite_total <= 0) throw new Error("Limite total deve ser positivo");
    if (limite_restante > limite_total)
      throw new Error("Limite restante inválido");
    this.banco = banco;
    this.limite_total = limite_total;
    this.limite_restante = limite_restante;
    this.ultimos_quatro_digitos = ultimos_quatro_digitos;
  }
}

class Fatura {
  cartao: Cartao;
  mes_referente: Date;
  vencimento: Date;
  gastos: Gasto[];
  total: number;

  constructor(
    cartao: Cartao,
    mes_referente: Date,
    vencimento: Date,
    total: number,
    gastos: Gasto[] = []
  ) {
    this.cartao = cartao;
    this.mes_referente = mes_referente;
    this.vencimento = vencimento;
    this.gastos = gastos;
    this.total = total;
  }

  adicionarGasto(gasto: Gasto): void {
    this.gastos.push(gasto);
    this.total += gasto.valor;
  }
}

class Usuario {
  nome: string;
  email: string;
  senha: string;
  gastos: Gasto[];
  cartoes: Cartao[];

  constructor(nome: string, email: string, senha: string) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.gastos = [];
    this.cartoes = [];
  }

  adicionarGasto(gasto: Gasto): void {
    this.gastos.push(gasto);
  }

  adicionarCartao(cartao: Cartao): void {
    this.cartoes.push(cartao);
  }

  gerarRelatorio(): Relatorio {
    const dados = `Relatório de ${this.nome} com ${this.gastos.length} gastos`;
    return new Relatorio(this, new Date(), TipoRelatorio.MENSAL, dados);
  }
}

class Relatorio {
  usuario: Usuario;
  data_geracao: Date;
  tipo: TipoRelatorio;
  dados: string;

  constructor(
    usuario: Usuario,
    data_geracao: Date,
    tipo: TipoRelatorio,
    dados: string
  ) {
    this.usuario = usuario;
    this.data_geracao = data_geracao;
    this.tipo = tipo;
    this.dados = dados;
  }

  gerar(): string {
    return `Relatório ${
      this.tipo
    } - ${this.data_geracao.toLocaleDateString()}:\n${this.dados}`;
  }
}

class FiltroGastos {
  gastos: Gasto[];

  constructor(gastos: Gasto[]) {
    this.gastos = gastos;
  }

  filtrarPorCartao(cartao: Cartao): Gasto[] {
    return this.gastos.filter((g) => g.cartao === cartao);
  }

  filtrarPorPessoa(usuario: Usuario): Gasto[] {
    return this.gastos.filter((g) => g.usuarioResponsavel === usuario);
  }

  filtrarPorPeriodo(inicio: Date, fim: Date): Gasto[] {
    return this.gastos.filter((g) => g.data >= inicio && g.data <= fim);
  }
}

class Exportador {
  gerarRelatorio(relatorio: Relatorio): string {
    return relatorio.gerar();
  }

  exportarTXT(relatorio: Relatorio): string {
    return `TXT:\n${relatorio.gerar()}`;
  }

  exportarCSV(relatorio: Relatorio): string {
    return `CSV:\nusuario,data,tipo,dados\n${
      relatorio.usuario.nome
    },${relatorio.data_geracao.toISOString()},${relatorio.tipo},"${
      relatorio.dados
    }"`;
  }
}

class DivisaoDeConta {
  participantes: Usuario[];

  constructor(participantes: Usuario[]) {
    this.participantes = participantes;
  }

  dividirConta(gasto: Gasto): Map<Usuario, number> {
    const resultado = new Map<Usuario, number>();
    const valorPorPessoa = gasto.valor / this.participantes.length;

    this.participantes.forEach((usuario) => {
      resultado.set(usuario, valorPorPessoa);
    });

    return resultado;
  }
}
