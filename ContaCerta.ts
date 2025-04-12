enum MeioDePagamento {
  DINHEIRO = 'DINHEIRO',
  PIX = 'PIX',
  DEBITO = 'DEBITO',
  CREDITO = 'CREDITO',
}

enum TipoRelatorio {
  MENSAL = 'MENSAL',
  ANUAL = 'ANUAL',
  PERSONALIZADO = 'PERSONALIZADO',
}

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
    paga: boolean,
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
  parcelas: Parcela[];
  usuarioResponsavel: Usuario;
  cartao?: Cartao;

  constructor(
    valor: number,
    descricao: string,
    data: Date,
    meioPagamento: MeioDePagamento,
    usuarioResponsavel: Usuario,
    parcelas: Parcela[] = [],
    categoria?: Categoria,
    cartao?: Cartao
  ) {
    this.valor = valor;
    this.descricao = descricao;
    this.data = data;
    this.meioPagamento = meioPagamento;
    this.usuarioResponsavel = usuarioResponsavel;
    this.parcelas = parcelas;
    this.categoria = categoria;
    this.cartao = cartao;
  }

  calcularTotalParcelas(): number {
    // implementação futura
    return 0;
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
    // implementação futura
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
    // implementação futura
  }

  adicionarCartao(cartao: Cartao): void {
    // implementação futura
  }

  gerarRelatorio(): Relatorio {
    // implementação futura
    return new Relatorio(this, new Date(), TipoRelatorio.MENSAL, '');
  }
}

class Relatorio {
  usuario: Usuario;
  data_geracao: Date;
  tipo: TipoRelatorio;
  dados: string;

  constructor(usuario: Usuario, data_geracao: Date, tipo: TipoRelatorio, dados: string) {
    this.usuario = usuario;
    this.data_geracao = data_geracao;
    this.tipo = tipo;
    this.dados = dados;
  }

  gerar(): string {
    // implementação futura
    return '';
  }
}

class FiltroGastos {
  gastos: Gasto[];

  constructor(gastos: Gasto[]) {
    this.gastos = gastos;
  }

  filtrarPorCartao(cartao: Cartao): Gasto[] {
    // implementação futura
    return [];
  }

  filtrarPorPessoa(usuario: Usuario): Gasto[] {
    // implementação futura
    return [];
  }

  filtrarPorPeriodo(inicio: Date, fim: Date): Gasto[] {
    // implementação futura
    return [];
  }
}

class Exportador {
  gerarRelatorio(relatorio: Relatorio): string {
    // implementação futura
    return '';
  }

  exportarTXT(relatorio: Relatorio): string {
    // implementação futura
    return '';
  }

  exportarCSV(relatorio: Relatorio): string {
    // implementação futura
    return '';
  }
}

class DivisaoDeConta {
  participantes: Usuario[];

  constructor(participantes: Usuario[]) {
    this.participantes = participantes;
  }

  dividirConta(gasto: Gasto): Map<Usuario, number> {
    // implementação futura
    return new Map<Usuario, number>();
  }
}
