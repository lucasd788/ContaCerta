-- DropIndex
DROP INDEX "Categoria_nome_key";

-- AlterTable
ALTER TABLE "Fatura" ALTER COLUMN "total" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Gasto" ADD COLUMN     "numParcelas" INTEGER NOT NULL DEFAULT 1;
