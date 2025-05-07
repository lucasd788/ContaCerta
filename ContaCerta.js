"use strict";
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
const _faturas = [];
class Categoria {
    constructor(nome, descricao) {
        this.nome = nome;
        this.descricao = descricao;
    }
}
class Parcela {
    constructor(valor, data_vencimento, paga = false, numeroParcela, totalParcelas) {
        this.valor = valor;
        this.data_vencimento = data_vencimento;
        this.paga = paga;
        this.numeroParcela = numeroParcela;
        this.totalParcelas = totalParcelas;
    }
}
class Gasto {
    constructor(valor, descricao, data, meioPagamento, usuarioResponsavel, numParcelas = 1, categoria, cartao) {
        if (numParcelas < 1)
            numParcelas = 1;
        if (valor <= 0)
            throw new Error("Valor deve ser positivo");
        if ((meioPagamento === MeioDePagamento.CREDITO ||
            meioPagamento === MeioDePagamento.DEBITO) &&
            !cartao)
            throw new Error("Cartão é obrigatório para pagamento no crédito OU débito");
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
    criarParcelas() {
        const valorParcela = this.valor / this.numParcelas;
        for (let i = 1; i <= this.numParcelas; i++) {
            const dataVencimento = this.calcularDataVencimentoParcela(i);
            this.parcelas.push(new Parcela(valorParcela, dataVencimento, false, i, this.numParcelas));
        }
    }
    calcularDataVencimentoParcela(numeroParcela) {
        const data = new Date(this.data);
        data.setMonth(data.getMonth() + numeroParcela - 1);
        return data;
    }
    adicionarNasFaturas() {
        for (const parcela of this.parcelas) {
            const mesReferente = new Date(parcela.data_vencimento);
            mesReferente.setDate(1); // Primeiro dia do mês
            const vencimento = new Date(mesReferente);
            vencimento.setMonth(vencimento.getMonth() + 1); // Vencimento no mês seguinte
            vencimento.setDate(10); // Dia 10 do mês seguinte (exemplo)
            let faturaExistente = _faturas.find((f) => f.cartao === this.cartao &&
                f.mes_referente.getTime() === mesReferente.getTime());
            if (!faturaExistente) {
                faturaExistente = new Fatura(this.cartao, mesReferente, vencimento, 0);
                _faturas.push(faturaExistente);
            }
            const gastoParcela = new Gasto(parcela.valor, `${this.descricao} (${parcela.numeroParcela}/${parcela.totalParcelas})`, this.data, this.meioPagamento, this.usuarioResponsavel, 1, this.categoria, this.cartao);
            gastoParcela.parcelas = [];
            faturaExistente.adicionarGasto(gastoParcela);
        }
    }
}
class Cartao {
    constructor(banco, limite_total, limite_restante, ultimos_quatro_digitos) {
        if (limite_total <= 0)
            throw new Error("Limite total deve ser positivo");
        if (limite_restante > limite_total)
            throw new Error("Limite restante inválido");
        this.banco = banco;
        this.limite_total = limite_total;
        this.limite_restante = limite_restante;
        this.ultimos_quatro_digitos = ultimos_quatro_digitos;
    }
}
class Fatura {
    constructor(cartao, mes_referente, vencimento, total, gastos = []) {
        this.cartao = cartao;
        this.mes_referente = mes_referente;
        this.vencimento = vencimento;
        this.gastos = gastos;
        this.total = total;
    }
    adicionarGasto(gasto) {
        this.gastos.push(gasto);
        this.total += gasto.valor;
    }
}
class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.gastos = [];
        this.cartoes = [];
    }
    adicionarGasto(gasto) {
        this.gastos.push(gasto);
    }
    adicionarCartao(cartao) {
        this.cartoes.push(cartao);
    }
    gerarRelatorio() {
        const dados = `Relatório de ${this.nome} com ${this.gastos.length} gastos`;
        return new Relatorio(this, new Date(), TipoRelatorio.MENSAL, dados);
    }
}
class Relatorio {
    constructor(usuario, data_geracao, tipo, dados) {
        this.usuario = usuario;
        this.data_geracao = data_geracao;
        this.tipo = tipo;
        this.dados = dados;
    }
    gerar() {
        return `Relatório ${this.tipo} - ${this.data_geracao.toLocaleDateString()}:\n${this.dados}`;
    }
}
class FiltroGastos {
    constructor(gastos) {
        this.gastos = gastos;
    }
    filtrarPorCartao(cartao) {
        return this.gastos.filter((g) => g.cartao === cartao);
    }
    filtrarPorPessoa(usuario) {
        return this.gastos.filter((g) => g.usuarioResponsavel === usuario);
    }
    filtrarPorPeriodo(inicio, fim) {
        return this.gastos.filter((g) => g.data >= inicio && g.data <= fim);
    }
}
class Exportador {
    gerarRelatorio(relatorio) {
        return relatorio.gerar();
    }
    exportarTXT(relatorio) {
        return `TXT:\n${relatorio.gerar()}`;
    }
    exportarCSV(relatorio) {
        return `CSV:\nusuario,data,tipo,dados\n${relatorio.usuario.nome},${relatorio.data_geracao.toISOString()},${relatorio.tipo},"${relatorio.dados}"`;
    }
}
class DivisaoDeConta {
    constructor(participantes) {
        this.participantes = participantes;
    }
    dividirConta(gasto) {
        const resultado = new Map();
        const valorPorPessoa = gasto.valor / this.participantes.length;
        this.participantes.forEach((usuario) => {
            resultado.set(usuario, valorPorPessoa);
        });
        return resultado;
    }
}
