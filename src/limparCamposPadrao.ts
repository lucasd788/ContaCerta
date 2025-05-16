export function limparCamposPadrao(obj: any, padroes: Record<string, any>) {
    const resultado: any = {};
    for (const chave in obj) {
        if (
            obj[chave] !== undefined &&
            obj[chave] !== padroes[chave]
        ) {
            resultado[chave] = obj[chave];
        }
    }
    return resultado;
}