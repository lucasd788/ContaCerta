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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useAuth } from "../auth/AuthContext";

// ... (definições de tipo permanecem as mesmas) ...
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
  numParcelas?: number;
  categoriaId?: string;
  cartaoId?: string;
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
    return JSON.parse(atob(token.split(".")[1]));
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
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  // State for new expense
  const [novoGasto, setNovoGasto] = useState({
    descricao: "",
    valor: "",
    data: new Date().toISOString().slice(0, 10),
    meioPagamento: "DEBITO",
    categoriaId: "",
    cartaoId: "",
    numParcelas: 1,
  });

  // State for editing expense
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingGasto, setEditingGasto] = useState<Gasto | null>(null);

  const api = axios.create({
    baseURL: "http://localhost:3000",
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });

  async function fetchData() {
    setLoading(true);
    try {
      const [gastosRes, categoriasRes, cartoesRes, faturasRes] =
        await Promise.all([
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
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (token && userId) fetchData();
  }, [token, userId]);

  const handleOpenEditDialog = (gasto: Gasto) => {
    setEditingGasto({
      ...gasto,
      data: new Date(gasto.data).toISOString().slice(0, 10),
      valor: gasto.valor,
      categoriaId: gasto.categoria?.id.toString() || "",
      cartaoId: gasto.cartao?.id.toString() || "",
      numParcelas: gasto.parcelas[0]?.totalParcelas || 1,
    });
    setIsEditDialogOpen(true);
  };

  const handleCloseEditDialog = () => {
    setIsEditDialogOpen(false);
    setEditingGasto(null);
  };

  const handleEditGastoChange = (e: any) => {
    const { name, value } = e.target;
    setEditingGasto((prev) => (prev ? { ...prev, [name]: value } : null));
  };

  const handleUpdateGasto = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingGasto) return;

    try {
      const body = {
        ...editingGasto,
        valor: Number(editingGasto.valor),
        categoriaId: editingGasto.categoriaId
          ? Number(editingGasto.categoriaId)
          : undefined,
        cartaoId: editingGasto.cartaoId
          ? Number(editingGasto.cartaoId)
          : undefined,
        numParcelas: Number(editingGasto.numParcelas) || 1,
      };
      await api.put(`/gastos/${editingGasto.id}`, body);
      setSnackbarMsg("Gasto atualizado com sucesso!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      handleCloseEditDialog();
      fetchData(); // Refresh data
    } catch (error) {
      setSnackbarMsg("Erro ao atualizar gasto");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      console.error("Erro ao atualizar gasto:", error);
    }
  };

  const handleNovoGastoChange = (e: any) => {
    const { name, value } = e.target;
    setNovoGasto((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddGasto = async (e: any) => {
    e.preventDefault();
    try {
      const body = {
        descricao: novoGasto.descricao,
        valor: parseFloat(novoGasto.valor),
        data: novoGasto.data,
        meioPagamento: novoGasto.meioPagamento,
        categoriaId: novoGasto.categoriaId
          ? parseInt(novoGasto.categoriaId)
          : undefined,
        cartaoId: novoGasto.cartaoId ? parseInt(novoGasto.cartaoId) : undefined,
        numParcelas: parseInt(novoGasto.numParcelas as any) || 1,
        usuarioId: userId,
      };
      await api.post("/gastos", body);
      setSnackbarMsg("Gasto adicionado com sucesso!");
      setSnackbarSeverity("success");
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
      fetchData();
    } catch (e: any) {
      console.error(
        "Erro ao adicionar gasto:",
        e.response ? e.response.data : e
      );
      setSnackbarMsg("Erro ao adicionar gasto");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  const handleRemoveGasto = async (id: number) => {
    try {
      await api.delete(`/gastos/${id}`);
      setSnackbarMsg("Gasto removido com sucesso!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      fetchData();
    } catch (e) {
      setSnackbarMsg("Erro ao remover gasto");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  // ... (cálculos de resumo) ...
  const meusGastos = gastos;
  const meusCartoes = userId
    ? cartoes.filter((c) => c.usuarioId === userId)
    : [];
  const totalGastos = meusGastos.reduce((sum, g) => sum + g.valor, 0);
  const gastosPorCategoria = categorias.map((cat) => ({
    nome: cat.nome,
    total: meusGastos
      .filter((g) => g.categoria?.id === cat.id)
      .reduce((sum, g) => sum + g.valor, 0),
  }));
  const saldoPorCartao = meusCartoes.map((c) => ({
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
        bgcolor="#2E7D32"
      >
        <CircularProgress sx={{ color: "#fff" }} />
      </Box>
    );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(90deg, #2E7D32 0%, #43A047 100%)",
        padding: 0,
        margin: 0,
        width: "100vw",
      }}
    >
      {/* ... (Header) ... */}
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
        <Typography
          variant="h3"
          sx={{ color: "#fff", fontWeight: 700, fontFamily: "Inter" }}
        >
          {" "}
          ContaCerta{" "}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 4,
          mt: 4,
          p: 2,
        }}
      >
        {/* ... (Cards de Resumo e Adicionar Gasto) ... */}
        <Paper
          sx={{
            width: 400,
            p: 3,
            borderRadius: 3,
            background: "#fff",
            boxShadow: 3,
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: "#2E7D32", fontWeight: 600 }}
            gutterBottom
          >
            {" "}
            Resumo{" "}
          </Typography>
          <Typography>
            {" "}
            <strong>Total de Gastos:</strong> R$ {totalGastos.toFixed(2)}{" "}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="subtitle1">Gastos por Categoria:</Typography>
          <List dense>
            {" "}
            {gastosPorCategoria.map((cat) => (
              <ListItem key={cat.nome} sx={{ pl: 0 }}>
                {" "}
                {cat.nome}: R$ {cat.total.toFixed(2)}{" "}
              </ListItem>
            ))}{" "}
          </List>
          <Divider sx={{ my: 2 }} />
          <Typography variant="subtitle1">Saldo dos Cartões:</Typography>
          <List dense>
            {" "}
            {saldoPorCartao.map((c) => (
              <ListItem key={c.nome} sx={{ pl: 0 }}>
                {" "}
                {c.nome}: R$ {c.limiteRestante.toFixed(2)} / R${" "}
                {c.limiteTotal.toFixed(2)}{" "}
              </ListItem>
            ))}{" "}
          </List>
        </Paper>

        <Paper
          sx={{
            width: 400,
            p: 3,
            borderRadius: 3,
            background: "#fff",
            boxShadow: 3,
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: "#2E7D32", fontWeight: 600 }}
            gutterBottom
          >
            {" "}
            Adicionar Gasto{" "}
          </Typography>
          <form
            onSubmit={handleAddGasto}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
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
                  <MenuItem key={m.value} value={m.value}>
                    {m.label}
                  </MenuItem>
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
                  <MenuItem key={cat.id} value={cat.id}>
                    {cat.nome}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {(novoGasto.meioPagamento === "CREDITO" ||
              novoGasto.meioPagamento === "DEBITO") && (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Cartão</InputLabel>
                <Select
                  name="cartaoId"
                  value={novoGasto.cartaoId}
                  label="Cartão"
                  onChange={handleNovoGastoChange}
                  required={
                    novoGasto.meioPagamento === "CREDITO" ||
                    novoGasto.meioPagamento === "DEBITO"
                  }
                >
                  {cartoes.map((cartao) => (
                    <MenuItem key={cartao.id} value={cartao.id}>
                      {" "}
                      {cartao.banco} ({cartao.ultimosQuatroDigitos}){" "}
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
            <Button
              type="submit"
              variant="contained"
              sx={{
                background: "#2E7D32",
                color: "#fff",
                fontWeight: 600,
                borderRadius: 2,
                mt: 1,
              }}
            >
              {" "}
              Adicionar{" "}
            </Button>
          </form>
        </Paper>

        {/* Card Gastos Recentes */}
        <Paper
          sx={{
            flex: 1,
            p: 3,
            borderRadius: 3,
            background: "#fff",
            boxShadow: 3,
            minWidth: 400,
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: "#2E7D32", fontWeight: 600 }}
            gutterBottom
          >
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
                    <TableCell>{/* ... (Lógica de parcelas) ... */}</TableCell>
                    <TableCell>
                      <IconButton
                        color="primary"
                        onClick={() => handleOpenEditDialog(gasto)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => handleRemoveGasto(gasto.id)}
                      >
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

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onClose={handleCloseEditDialog}>
        <form onSubmit={handleUpdateGasto}>
          <DialogTitle>Editar Gasto</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Modifique as informações do seu gasto abaixo. A alteração de
              valores ou parcelas irá recalcular as faturas correspondentes.
            </DialogContentText>
            <TextField
              margin="dense"
              name="descricao"
              label="Descrição"
              type="text"
              fullWidth
              variant="standard"
              value={editingGasto?.descricao || ""}
              onChange={handleEditGastoChange}
              required
            />
            <TextField
              margin="dense"
              name="valor"
              label="Valor"
              type="number"
              fullWidth
              variant="standard"
              value={editingGasto?.valor || ""}
              onChange={handleEditGastoChange}
              required
              inputProps={{ min: 0, step: 0.01 }}
            />
            <TextField
              margin="dense"
              name="data"
              label="Data"
              type="date"
              fullWidth
              variant="standard"
              value={editingGasto?.data || ""}
              onChange={handleEditGastoChange}
              required
              InputLabelProps={{ shrink: true }}
            />
            <FormControl fullWidth margin="dense">
              <InputLabel>Meio de Pagamento</InputLabel>
              <Select
                name="meioPagamento"
                label="Meio de Pagamento"
                value={editingGasto?.meioPagamento || ""}
                onChange={handleEditGastoChange}
              >
                {MEIOS_PAGAMENTO.map((m) => (
                  <MenuItem key={m.value} value={m.value}>
                    {m.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="dense">
              <InputLabel>Categoria</InputLabel>
              <Select
                name="categoriaId"
                label="Categoria"
                value={editingGasto?.categoriaId || ""}
                onChange={handleEditGastoChange}
                required
              >
                {categorias.map((cat) => (
                  <MenuItem key={cat.id} value={cat.id.toString()}>
                    {cat.nome}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {(editingGasto?.meioPagamento === "CREDITO" ||
              editingGasto?.meioPagamento === "DEBITO") && (
              <FormControl fullWidth margin="dense">
                <InputLabel>Cartão</InputLabel>
                <Select
                  name="cartaoId"
                  label="Cartão"
                  value={editingGasto?.cartaoId || ""}
                  onChange={handleEditGastoChange}
                  required
                >
                  {cartoes.map((cartao) => (
                    <MenuItem key={cartao.id} value={cartao.id.toString()}>
                      {" "}
                      {cartao.banco} ({cartao.ultimosQuatroDigitos}){" "}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
            {editingGasto?.meioPagamento === "CREDITO" && (
              <TextField
                margin="dense"
                name="numParcelas"
                label="Número de Parcelas"
                type="number"
                fullWidth
                variant="standard"
                value={editingGasto?.numParcelas || 1}
                onChange={handleEditGastoChange}
                required
                inputProps={{ min: 1, max: 24 }}
              />
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseEditDialog}>Cancelar</Button>
            <Button type="submit">Salvar</Button>
          </DialogActions>
        </form>
      </Dialog>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          severity={snackbarSeverity}
          onClose={() => setOpenSnackbar(false)}
        >
          {snackbarMsg}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Dashboard;
