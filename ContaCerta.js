var MeioDePagamento;
(function (MeioDePagamento) {
  MeioDePagamento["DINHEIRO"] = "DINHEIRO";
  MeioDePagamento["PIX"] = "PIX";
  MeioDePagamento["DEBITO"] = "DEBITO";
  MeioDePagamento["CREDITO"] = "CREDITO";
})(MeioDePagamento || (MeioDePagamento = {}));

var TipoRelatorio;
(function (TipoRelatorio) {
  TipoRelatorio["MENSAL"] = "MENSAL";
  TipoRelatorio["ANUAL"] = "ANUAL";
  TipoRelatorio["PERSONALIZADO"] = "PERSONALIZADO";
})(TipoRelatorio || (TipoRelatorio = {}));

var Categoria = /** @class */ (function () {
  function Categoria(nome, descricao) {
    this.nome = nome;
    this.descricao = descricao;
  }
  return Categoria;
})();

var Parcela = /** @class */ (function () {
  function Parcela(valor, data_vencimento, paga, numeroParcela, totalParcelas) {
    this.valor = valor;
    this.data_vencimento = data_vencimento;
    this.paga = paga;
    this.numeroParcela = numeroParcela;
    this.totalParcelas = totalParcelas;
  }
  return Parcela;
})();

var Gasto = /** @class */ (function () {
  function Gasto(
    valor,
    descricao,
    data,
    meioPagamento,
    usuarioResponsavel,
    parcelas,
    categoria,
    cartao
  ) {
    if (parcelas === void 0) {
      parcelas = [];
    }
    this.valor = valor;
    this.descricao = descricao;
    this.data = data;
    this.meioPagamento = meioPagamento;
    this.usuarioResponsavel = usuarioResponsavel;
    this.parcelas = parcelas;
    this.categoria = categoria;
    this.cartao = cartao;
  }
  Gasto.prototype.calcularTotalParcelas = function () {
    return this.parcelas.reduce(function (total, p) {
      return total + p.valor;
    }, 0);
  };
  return Gasto;
})();

var Cartao = /** @class */ (function () {
  function Cartao(
    banco,
    limite_total,
    limite_restante,
    ultimos_quatro_digitos
  ) {
    this.banco = banco;
    this.limite_total = limite_total;
    this.limite_restante = limite_restante;
    this.ultimos_quatro_digitos = ultimos_quatro_digitos;
  }
  return Cartao;
})();

var Fatura = /** @class */ (function () {
  function Fatura(cartao, mes_referente, vencimento, total, gastos) {
    if (gastos === void 0) {
      gastos = [];
    }
    this.cartao = cartao;
    this.mes_referente = mes_referente;
    this.vencimento = vencimento;
    this.gastos = gastos;
    this.total = total;
  }
  Fatura.prototype.adicionarGasto = function (gasto) {
    this.gastos.push(gasto);
    this.total += gasto.valor;
  };
  return Fatura;
})();

var Usuario = /** @class */ (function () {
  function Usuario(nome, email, senha) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.gastos = [];
    this.cartoes = [];
  }
  Usuario.prototype.adicionarGasto = function (gasto) {
    this.gastos.push(gasto);
  };
  Usuario.prototype.adicionarCartao = function (cartao) {
    this.cartoes.push(cartao);
  };
  Usuario.prototype.gerarRelatorio = function () {
    var dados = "Relat\u00F3rio de "
      .concat(this.nome, " com ")
      .concat(this.gastos.length, " gastos");
    return new Relatorio(this, new Date(), TipoRelatorio.MENSAL, dados);
  };
  return Usuario;
})();

var Relatorio = /** @class */ (function () {
  function Relatorio(usuario, data_geracao, tipo, dados) {
    this.usuario = usuario;
    this.data_geracao = data_geracao;
    this.tipo = tipo;
    this.dados = dados;
  }
  Relatorio.prototype.gerar = function () {
    return "Relat\u00F3rio "
      .concat(this.tipo, " - ")
      .concat(this.data_geracao.toLocaleDateString(), ":\n")
      .concat(this.dados);
  };
  return Relatorio;
})();

var FiltroGastos = /** @class */ (function () {
  function FiltroGastos(gastos) {
    this.gastos = gastos;
  }
  FiltroGastos.prototype.filtrarPorCartao = function (cartao) {
    return this.gastos.filter(function (g) {
      return g.cartao === cartao;
    });
  };
  FiltroGastos.prototype.filtrarPorPessoa = function (usuario) {
    return this.gastos.filter(function (g) {
      return g.usuarioResponsavel === usuario;
    });
  };
  FiltroGastos.prototype.filtrarPorPeriodo = function (inicio, fim) {
    return this.gastos.filter(function (g) {
      return g.data >= inicio && g.data <= fim;
    });
  };
  return FiltroGastos;
})();

var Exportador = /** @class */ (function () {
  function Exportador() {}
  Exportador.prototype.gerarRelatorio = function (relatorio) {
    return relatorio.gerar();
  };
  Exportador.prototype.exportarTXT = function (relatorio) {
    return "TXT:\n".concat(relatorio.gerar());
  };
  Exportador.prototype.exportarCSV = function (relatorio) {
    return "CSV:\nusuario,data,tipo,dados\n"
      .concat(relatorio.usuario.nome, ",")
      .concat(relatorio.data_geracao.toISOString(), ",")
      .concat(relatorio.tipo, ',"')
      .concat(relatorio.dados, '"');
  };
  return Exportador;
})();

var DivisaoDeConta = /** @class */ (function () {
  function DivisaoDeConta(participantes) {
    this.participantes = participantes;
  }
  DivisaoDeConta.prototype.dividirConta = function (gasto) {
    var resultado = new Map();
    var valorPorPessoa = gasto.valor / this.participantes.length;
    this.participantes.forEach(function (usuario) {
      resultado.set(usuario, valorPorPessoa);
    });
    return resultado;
  };
  return DivisaoDeConta;
})();
