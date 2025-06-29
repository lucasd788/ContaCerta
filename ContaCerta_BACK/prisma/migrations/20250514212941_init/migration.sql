-- CreateEnum
CREATE TYPE "MeioDePagamento" AS ENUM ('DINHEIRO', 'PIX', 'DEBITO', 'CREDITO');

-- CreateEnum
CREATE TYPE "TipoRelatorio" AS ENUM ('MENSAL', 'ANUAL', 'PERSONALIZADO');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cartao" (
    "id" SERIAL NOT NULL,
    "banco" TEXT NOT NULL,
    "limiteTotal" DOUBLE PRECISION NOT NULL,
    "limiteRestante" DOUBLE PRECISION NOT NULL,
    "ultimosQuatroDigitos" TEXT,
    "usuarioId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cartao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gasto" (
    "id" SERIAL NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "descricao" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "meioPagamento" "MeioDePagamento" NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "numParcelas" INTEGER NOT NULL DEFAULT 1,
    "categoriaId" INTEGER,
    "cartaoId" INTEGER,
    "divisaoDeGastoId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Gasto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parcela" (
    "id" SERIAL NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "dataVencimento" TIMESTAMP(3) NOT NULL,
    "paga" BOOLEAN NOT NULL DEFAULT false,
    "numeroParcela" INTEGER NOT NULL,
    "totalParcelas" INTEGER NOT NULL,
    "gastoId" INTEGER,
    "faturaId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Parcela_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fatura" (
    "id" SERIAL NOT NULL,
    "cartaoId" INTEGER NOT NULL,
    "mesReferente" TIMESTAMP(3) NOT NULL,
    "vencimento" TIMESTAMP(3) NOT NULL,
    "paga" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Fatura_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Relatorio" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "dataGeracao" TIMESTAMP(3) NOT NULL,
    "tipo" "TipoRelatorio" NOT NULL,
    "dados" JSONB NOT NULL,
    "inicioPeriodo" TIMESTAMP(3),
    "fimPeriodo" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Relatorio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DivisaoDeGasto" (
    "id" SERIAL NOT NULL,
    "valorTotal" DOUBLE PRECISION NOT NULL,
    "descricao" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "meioPagamento" "MeioDePagamento" NOT NULL,
    "numParcelas" INTEGER NOT NULL DEFAULT 1,
    "categoriaId" INTEGER,
    "cartaoId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DivisaoDeGasto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notificacao" (
    "id" SERIAL NOT NULL,
    "mensagem" TEXT NOT NULL,
    "dataEnvio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usuarioId" INTEGER NOT NULL,
    "visualizado" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notificacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DivisaoDeGastoParaUsuario" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_DivisaoDeGastoParaUsuario_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE INDEX "_DivisaoDeGastoParaUsuario_B_index" ON "_DivisaoDeGastoParaUsuario"("B");

-- AddForeignKey
ALTER TABLE "Cartao" ADD CONSTRAINT "Cartao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gasto" ADD CONSTRAINT "Gasto_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gasto" ADD CONSTRAINT "Gasto_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gasto" ADD CONSTRAINT "Gasto_cartaoId_fkey" FOREIGN KEY ("cartaoId") REFERENCES "Cartao"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gasto" ADD CONSTRAINT "Gasto_divisaoDeGastoId_fkey" FOREIGN KEY ("divisaoDeGastoId") REFERENCES "DivisaoDeGasto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parcela" ADD CONSTRAINT "Parcela_gastoId_fkey" FOREIGN KEY ("gastoId") REFERENCES "Gasto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Parcela" ADD CONSTRAINT "Parcela_faturaId_fkey" FOREIGN KEY ("faturaId") REFERENCES "Fatura"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Fatura" ADD CONSTRAINT "Fatura_cartaoId_fkey" FOREIGN KEY ("cartaoId") REFERENCES "Cartao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Relatorio" ADD CONSTRAINT "Relatorio_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DivisaoDeGasto" ADD CONSTRAINT "DivisaoDeGasto_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DivisaoDeGasto" ADD CONSTRAINT "DivisaoDeGasto_cartaoId_fkey" FOREIGN KEY ("cartaoId") REFERENCES "Cartao"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notificacao" ADD CONSTRAINT "Notificacao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DivisaoDeGastoParaUsuario" ADD CONSTRAINT "_DivisaoDeGastoParaUsuario_A_fkey" FOREIGN KEY ("A") REFERENCES "DivisaoDeGasto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DivisaoDeGastoParaUsuario" ADD CONSTRAINT "_DivisaoDeGastoParaUsuario_B_fkey" FOREIGN KEY ("B") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
