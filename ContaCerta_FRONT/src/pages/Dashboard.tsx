import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
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
  Divider,
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuth } from "../auth/AuthContext";

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
  usuarioId: number;
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
  usuarioId: number;
};

type Fatura = {
  id: number;
  cartaoId: number;
  mesReferente: string;
  vencimento: string;
  valorTotal: number;
};

const MEIOS_PAGAMENTO = [
  { value: "DEBITO", label: "Débito" },
  { value: "CREDITO", label: "Crédito" },
  { value: "DINHEIRO", label: "Dinheiro" },
  { value: "PIX", label: "Pix" },
];

function parseJwt(token: string) {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch {
    return null;
  }
}

function Dashboard() {
  const { token } = useAuth();
  const userId = token ? parseJwt(token)?.id : null;
  const [gastos, setGastos] = useState<Gasto[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [cartoes, setCartoes] = useState<Cartao[]>([]);
  const [, setFaturas] = useState<Fatura[]>([]);
  const [loading, setLoading] = useState(true);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  // novo gasto
  const [novoGasto, setNovoGasto] = useState({
    descricao: "",
    valor: "",
    data: new Date().toISOString().slice(0, 10),
    meioPagamento: "DEBITO",
    categoriaId: "",
    cartaoId: "",
    numParcelas: 1,
  });

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const api = axios.create({
        baseURL: "http://localhost:3000",
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      try {
        const [gastosRes, categoriasRes, cartoesRes, faturasRes] = await Promise.all([
          api.get(`/gastos/usuario/${userId}`),
          api.get("/categorias"),
          api.get(`/cartoes/usuario/${userId}`),
          api.get("/faturas"),
        ]);
        setGastos(gastosRes.data);
        setCategorias(categoriasRes.data);
        setCartoes(cartoesRes.data);
        setFaturas(faturasRes.data);
      } catch (e) {
        setSnackbarMsg("Erro ao carregar dados");
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
      }
      setLoading(false);
    }
    if (token && userId) fetchData();
  }, [token, userId]);

  const meusGastos = gastos;
  const meusCartoes = userId ? cartoes.filter((c) => c.usuarioId === userId) : [];

  const totalGastos = meusGastos.reduce((sum, g) => sum + g.valor, 0);
  const gastosPorCategoria = categorias.map((cat) => ({
    nome: cat.nome,
    total: meusGastos.filter((g) => g.categoria?.id === cat.id).reduce((sum, g) => sum + g.valor, 0),
  }));
  const saldoPorCartao = meusCartoes.map((c) => ({
    nome: `${c.banco} (${c.ultimosQuatroDigitos})`,
    limiteRestante: c.limiteRestante,
    limiteTotal: c.limiteTotal,
  }));

  const handleNovoGastoChange = (e: any) => {
    const { name, value } = e.target;
    setNovoGasto((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddGasto = async (e: any) => {
    e.preventDefault();
    const api = axios.create({
      baseURL: "http://localhost:3000",
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    try {
      const body = {
        descricao: novoGasto.descricao,
        valor: parseFloat(novoGasto.valor),
        data: novoGasto.data,
        meioPagamento: novoGasto.meioPagamento,
        categoriaId: novoGasto.categoriaId ? parseInt(novoGasto.categoriaId) : undefined,
        cartaoId: novoGasto.cartaoId ? parseInt(novoGasto.cartaoId) : undefined,
        numParcelas: parseInt(novoGasto.numParcelas as any) || 1,
        usuarioId: userId,
      };
      console.log('Enviando gasto:', body);
      await api.post("/gastos", body);
      setSnackbarMsg("Gasto adicionado com sucesso!");
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      setNovoGasto({
        descricao: "",
        valor: "",
        data: new Date().toISOString().slice(0, 10),
        meioPagamento: "DEBITO",
        categoriaId: "",
        cartaoId: "",
        numParcelas: 1,
      });
      // Atualiza listas
      const [gastosRes, cartoesRes] = await Promise.all([
        api.get(`/gastos/usuario/${userId}`),
        api.get(`/cartoes/usuario/${userId}`),
      ]);
      setGastos(gastosRes.data);
      setCartoes(cartoesRes.data);
    } catch (e: any) {
      if (e.response) {
        console.error('Erro ao adicionar gasto:', e.response.data, e.response.status, e.response.statusText);
      } else {
        console.error('Erro ao adicionar gasto:', e);
      }
      setSnackbarMsg("Erro ao adicionar gasto");
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  const handleRemoveGasto = async (id: number) => {
    const api = axios.create({
      baseURL: "http://localhost:3000",
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    try {
      await api.delete(`/gastos/${id}`);
      setSnackbarMsg("Gasto removido com sucesso!");
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      // Atualiza listas
      const [gastosRes, cartoesRes] = await Promise.all([
        api.get(`/gastos/usuario/${userId}`),
        api.get("/cartoes"),
      ]);
      setGastos(gastosRes.data);
      setCartoes(cartoesRes.data);
    } catch (e) {
      setSnackbarMsg("Erro ao remover gasto");
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
  };

  if (loading)
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh" bgcolor="#2E7D32">
        <CircularProgress sx={{ color: '#fff' }} />
      </Box>
    );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(90deg, #2E7D32 0%, #43A047 100%)",
        padding: 0,
        margin: 0,
      }}
    >
      <Box
        sx={{
          width: "100vw",
          height: "120px",
          background: "#2E7D32",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 4px 16px rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="h3" sx={{ color: "#fff", fontWeight: 700, fontFamily: 'Inter' }}>
          ContaCerta - Dashboard
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 4,
          mt: 4,
        }}
      >
        {/* Card Resumo */}
        <Paper sx={{ width: 400, p: 3, borderRadius: 3, background: '#fff', boxShadow: 3 }}>
          <Typography variant="h5" sx={{ color: '#2E7D32', fontWeight: 600 }} gutterBottom>
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
                {c.nome}: R$ {c.limiteRestante.toFixed(2)} / R$ {c.limiteTotal.toFixed(2)}
              </ListItem>
            ))}
          </List>
        </Paper>

        {/* Card Adicionar Gasto */}
        <Paper sx={{ width: 400, p: 3, borderRadius: 3, background: '#fff', boxShadow: 3 }}>
          <Typography variant="h5" sx={{ color: '#2E7D32', fontWeight: 600 }} gutterBottom>
            Adicionar Gasto
          </Typography>
          <form onSubmit={handleAddGasto} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <TextField
              label="Descrição"
              name="descricao"
              value={novoGasto.descricao}
              onChange={handleNovoGastoChange}
              required
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Valor"
              name="valor"
              type="number"
              value={novoGasto.valor}
              onChange={handleNovoGastoChange}
              required
              fullWidth
              sx={{ mb: 2 }}
              inputProps={{ min: 0, step: 0.01 }}
            />
            <TextField
              label="Data"
              name="data"
              type="date"
              value={novoGasto.data}
              onChange={handleNovoGastoChange}
              required
              fullWidth
              sx={{ mb: 2 }}
              InputLabelProps={{ shrink: true }}
            />
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Meio de Pagamento</InputLabel>
              <Select
                name="meioPagamento"
                value={novoGasto.meioPagamento}
                label="Meio de Pagamento"
                onChange={handleNovoGastoChange}
              >
                {MEIOS_PAGAMENTO.map((m) => (
                  <MenuItem key={m.value} value={m.value}>{m.label}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Categoria</InputLabel>
              <Select
                name="categoriaId"
                value={novoGasto.categoriaId}
                label="Categoria"
                onChange={handleNovoGastoChange}
                required
              >
                {categorias.map((cat) => (
                  <MenuItem key={cat.id} value={cat.id}>{cat.nome}</MenuItem>
                ))}
              </Select>
            </FormControl>
            {(novoGasto.meioPagamento === "CREDITO" || novoGasto.meioPagamento === "DEBITO") && (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Cartão</InputLabel>
                <Select
                  name="cartaoId"
                  value={novoGasto.cartaoId}
                  label="Cartão"
                  onChange={handleNovoGastoChange}
                  required={novoGasto.meioPagamento === "CREDITO" || novoGasto.meioPagamento === "DEBITO"}
                >
                  {cartoes.map((cartao) => (
                    <MenuItem key={cartao.id} value={cartao.id}>
                      {cartao.banco} ({cartao.ultimosQuatroDigitos})
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
            {novoGasto.meioPagamento === "CREDITO" && (
              <TextField
                label="Número de Parcelas"
                name="numParcelas"
                type="number"
                value={novoGasto.numParcelas}
                onChange={handleNovoGastoChange}
                required
                fullWidth
                sx={{ mb: 2 }}
                inputProps={{ min: 1, max: 24 }}
              />
            )}
            <Button type="submit" variant="contained" sx={{ background: '#2E7D32', color: '#fff', fontWeight: 600, borderRadius: 2, mt: 1 }}>
              Adicionar
            </Button>
          </form>
        </Paper>

        {/* Card Gastos Recentes */}
        <Paper sx={{ flex: 1, p: 3, borderRadius: 3, background: '#fff', boxShadow: 3, minWidth: 400 }}>
          <Typography variant="h5" sx={{ color: '#2E7D32', fontWeight: 600 }} gutterBottom>
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
                  <TableCell>Meio</TableCell>
                  <TableCell>Cartão</TableCell>
                  <TableCell>Parcelas</TableCell>
                  <TableCell>Ações</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {meusGastos.map((gasto) => (
                  <TableRow key={gasto.id}>
                    <TableCell>{gasto.descricao}</TableCell>
                    <TableCell>R$ {gasto.valor.toFixed(2)}</TableCell>
                    <TableCell>{new Date(gasto.data).toLocaleDateString()}</TableCell>
                    <TableCell>{gasto.categoria?.nome || '-'}</TableCell>
                    <TableCell>{gasto.meioPagamento}</TableCell>
                    <TableCell>
                      {gasto.cartao ? `${gasto.cartao.banco} (${gasto.cartao.ultimosQuatroDigitos})` : '-'}
                    </TableCell>
                    <TableCell>
                      {gasto.parcelas && gasto.parcelas.length > 1 ? (
                        <List dense>
                          {gasto.parcelas.map((p) => (
                            <ListItem key={p.id} sx={{ pl: 0 }}>
                              {p.numeroParcela}/{p.totalParcelas} - R$ {p.valor.toFixed(2)} - {p.paga ? 'Paga' : 'Em aberto'} - {new Date(p.dataVencimento).toLocaleDateString()}
                            </ListItem>
                          ))}
                        </List>
                      ) : gasto.parcelas && gasto.parcelas.length === 1 ? (
                        <span>
                          Única - R$ {gasto.parcelas[0].valor.toFixed(2)} - {gasto.parcelas[0].paga ? 'Paga' : 'Em aberto'} - {new Date(gasto.parcelas[0].dataVencimento).toLocaleDateString()}
                        </span>
                      ) : (
                        '-'
                      )}
                    </TableCell>
                    <TableCell>
                      <IconButton color="error" onClick={() => handleRemoveGasto(gasto.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
      <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={() => setOpenSnackbar(false)}>
        <Alert severity={snackbarSeverity} onClose={() => setOpenSnackbar(false)}>
          {snackbarMsg}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Dashboard;
