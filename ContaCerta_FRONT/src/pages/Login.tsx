import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import axios from "../api/axios";

export default function Login() {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("/auth/login", {
        nome,
        senha,
      });

      const { token } = response.data;

      setToken(token);

      navigate("/");
    } catch (err: any) {
      setErro(err.response?.data?.message || "Erro ao fazer login");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      px={2}
      gap={2}
    >
      <Typography variant="h4">Login ContaCerta</Typography>
      <TextField
        label="Nome de Usuário"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        fullWidth
      />
      <TextField
        label="Senha"
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        fullWidth
      />
      <Button variant="contained" fullWidth onClick={handleLogin}>
        Entrar
      </Button>
      <Snackbar
        open={!!erro}
        autoHideDuration={4000}
        onClose={() => setErro("")}
      >
        <Alert severity="error">{erro}</Alert>
      </Snackbar>
    </Box>
  );
}
