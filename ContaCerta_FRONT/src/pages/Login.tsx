import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import axios from "../api/axios";

interface ILogin {
  email: string;
  senha: string;
}

const loginSchema = yup.object({
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  senha: yup
    .string()
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .required("Senha é obrigatória"),
});

function Login() {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const [erro, setErro] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: ILogin) => {
    try {
      const response = await axios.post("/auth/login", data);
      const { token } = response.data;
      setToken(token);
      navigate("/dashboard");
    } catch (err: any) {
      setErro(err.response?.data?.message || "Erro ao fazer login");
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: "1440px",
        height: "1024px",
        background: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "864px",
          height: "1024px",
          left: "0px",
          top: "0px",
          background: "#2E7D32",
        }}
      ></div>
      <h1
        style={{
          position: "absolute",
          width: "351px",
          height: "77px",
          left: `calc(50% - ${351 / 2}px - 288.5px)`,
          top: `calc(50% - ${77 / 2}px - 0.5px)`,
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "64px",
          lineHeight: "77px",
          color: "#FFFFFF",
          textAlign: "center",
        }}
      >
        ContaCerta
      </h1>
      <div
        style={{
          position: "absolute",
          width: "450px",
          height: "400px",
          left: `calc(50% - ${450 / 2}px + 432px)`,
          top: `calc(50% - ${400 / 2}px)`,
          background: "#FFFFFF",
          boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            position: "absolute",
            width: "100%",
            textAlign: "center",
            top: "30px",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "24px",
            lineHeight: "29px",
            color: "#333333",
          }}
        >
          Acesse sua conta
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            position: "relative",
            top: "120px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "25px",
            width: "100%",
          }}
        >
          <div style={{ width: "390px" }}>
            <label
              htmlFor="email"
              style={{
                display: "block",
                marginBottom: "5px",
                fontWeight: "bold",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontSize: "16px",
                lineHeight: "19px",
                color: "#757575",
              }}
            >
              Email:
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              style={{
                width: "100%",
                height: "50px",
                padding: "8px 13px",
                background: "#F5F5F5",
                borderRadius: "8px",
                border: "none",
                boxSizing: "border-box",
                fontFamily: "Inter",
                fontSize: "16px",
                color: "#333333",
              }}
            />
            {errors.email && (
              <div
                style={{ color: "red", fontSize: "0.9em", marginTop: "5px" }}
              >
                {errors.email.message}
              </div>
            )}
          </div>
          <div style={{ width: "390px" }}>
            <label
              htmlFor="senha"
              style={{
                display: "block",
                marginBottom: "5px",
                fontWeight: "bold",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontSize: "16px",
                lineHeight: "19px",
                color: "#757575",
              }}
            >
              Senha:
            </label>
            <input
              id="senha"
              type="password"
              {...register("senha")}
              style={{
                width: "100%",
                height: "50px",
                padding: "8px 13px",
                background: "#F5F5F5",
                borderRadius: "8px",
                border: "none",
                boxSizing: "border-box",
                fontFamily: "Inter",
                fontSize: "16px",
                color: "#333333",
              }}
            />
            {errors.senha && (
              <div
                style={{ color: "red", fontSize: "0.9em", marginTop: "5px" }}
              >
                {errors.senha.message}
              </div>
            )}
          </div>
          <button
            type="submit"
            style={{
              width: "390px",
              height: "50px",
              background: "#2E7D32",
              borderRadius: "8px",
              border: "none",
              color: "#FFFFFF",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "19px",
              cursor: "pointer",
              transition: "background-color 0.2s",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            ENTRAR
          </button>
          {erro && (
            <div style={{ color: "red", marginTop: "10px", textAlign: "center" }}>{erro}</div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
