import { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  List,
  ListItem,
  CircularProgress,
  Box,
  Divider,
} from "@mui/material";

type Parcela = {
  id: number;
  valor: number;
  dataVencimento: string;
  paga: boolean;
  numeroParcela: number;
  totalParcelas: number;
};

type Categoria = {
  id: number;
  nome: string;
};

type Cartao = {
  id: number;
  banco: string;
  limiteTotal: number;
  limiteRestante: number;
  ultimosQuatroDigitos: string;
};

type Gasto = {
  id: number;
  valor: number;
  descricao: string;
  data: string;
  meioPagamento: string;
  categoria?: Categoria;
  cartao?: Cartao;
  parcelas: Parcela[];
};

type Fatura = {
  id: number;
  cartaoId: number;
  mesReferente: string;
  vencimento: string;
  valorTotal: number;
};

export default function Dashboard() {
  const [gastos, setGastos] = useState<Gasto[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [cartoes, setCartoes] = useState<Cartao[]>([]);
  const [faturas, setFaturas] = useState<Fatura[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const api = axios.create({ baseURL: "http://localhost:3000" });

      const [gastosRes, categoriasRes, cartoesRes, faturasRes] =
        await Promise.all([
          api.get("/gastos"),
          api.get("/categorias"),
          api.get("/cartoes"),
          api.get("/faturas"),
        ]);
      setGastos(gastosRes.data);
      setCategorias(categoriasRes.data);
      setCartoes(cartoesRes.data);
      setFaturas(faturasRes.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const totalGastos = gastos.reduce((sum, g) => sum + g.valor, 0);
  const gastosPorCategoria = categorias.map((cat) => ({
    nome: cat.nome,
    total: gastos
      .filter((g) => g.categoria?.id === cat.id)
      .reduce((sum, g) => sum + g.valor, 0),
  }));
  const saldoPorCartao = cartoes.map((c) => ({
    nome: `${c.banco} (${c.ultimosQuatroDigitos})`,
    limiteRestante: c.limiteRestante,
    limiteTotal: c.limiteTotal,
  }));

  if (loading)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
      >
        <CircularProgress />
      </Box>
    );

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard Financeiro
      </Typography>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Resumo
        </Typography>
        <Typography>
          <strong>Total de Gastos:</strong> R$ {totalGastos.toFixed(2)}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="subtitle1">Gastos por Categoria:</Typography>
        <List dense>
          {gastosPorCategoria.map((cat) => (
            <ListItem key={cat.nome} sx={{ pl: 0 }}>
              {cat.nome}: R$ {cat.total.toFixed(2)}
            </ListItem>
          ))}
        </List>
        <Divider sx={{ my: 2 }} />
        <Typography variant="subtitle1">Saldo dos Cartões:</Typography>
        <List dense>
          {saldoPorCartao.map((c) => (
            <ListItem key={c.nome} sx={{ pl: 0 }}>
              {c.nome}: R$ {c.limiteRestante.toFixed(2)} / R${" "}
              {c.limiteTotal.toFixed(2)}
            </ListItem>
          ))}
        </List>
      </Paper>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Gastos Recentes
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Descrição</TableCell>
                <TableCell>Valor</TableCell>
                <TableCell>Data</TableCell>
                <TableCell>Categoria</TableCell>
                <TableCell>Meio de Pagamento</TableCell>
                <TableCell>Cartão</TableCell>
                <TableCell>Parcelas</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {gastos.map((gasto) => (
                <TableRow key={gasto.id}>
                  <TableCell>{gasto.descricao}</TableCell>
                  <TableCell>R$ {gasto.valor.toFixed(2)}</TableCell>
                  <TableCell>
                    {new Date(gasto.data).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{gasto.categoria?.nome || "-"}</TableCell>
                  <TableCell>{gasto.meioPagamento}</TableCell>
                  <TableCell>
                    {gasto.cartao
                      ? `${gasto.cartao.banco} (${gasto.cartao.ultimosQuatroDigitos})`
                      : "-"}
                  </TableCell>
                  <TableCell>
                    {gasto.parcelas && gasto.parcelas.length > 1 ? (
                      <List dense>
                        {gasto.parcelas.map((p) => (
                          <ListItem key={p.id} sx={{ pl: 0 }}>
                            {p.numeroParcela}/{p.totalParcelas} - R${" "}
                            {p.valor.toFixed(2)} -{" "}
                            {p.paga ? "Paga" : "Em aberto"} -{" "}
                            {new Date(p.dataVencimento).toLocaleDateString()}
                          </ListItem>
                        ))}
                      </List>
                    ) : gasto.parcelas && gasto.parcelas.length === 1 ? (
                      <span>
                        Única - R$ {gasto.parcelas[0].valor.toFixed(2)} -{" "}
                        {gasto.parcelas[0].paga ? "Paga" : "Em aberto"} -{" "}
                        {new Date(
                          gasto.parcelas[0].dataVencimento
                        ).toLocaleDateString()}
                      </span>
                    ) : (
                      "-"
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Faturas
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Cartão</TableCell>
                <TableCell>Mês Referente</TableCell>
                <TableCell>Vencimento</TableCell>
                <TableCell>Valor Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {faturas.map((fatura) => {
                const cartao = cartoes.find((c) => c.id === fatura.cartaoId);
                return (
                  <TableRow key={fatura.id}>
                    <TableCell>
                      {cartao
                        ? `${cartao.banco} (${cartao.ultimosQuatroDigitos})`
                        : fatura.cartaoId}
                    </TableCell>
                    <TableCell>
                      {new Date(fatura.mesReferente).toLocaleDateString(
                        "pt-BR",
                        {
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </TableCell>
                    <TableCell>
                      {new Date(fatura.vencimento).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      R$ {fatura.valorTotal?.toFixed(2) ?? "0,00"}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
}
