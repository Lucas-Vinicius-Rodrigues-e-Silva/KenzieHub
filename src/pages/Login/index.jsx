import { useForm } from "react-hook-form";
import { formSchemaLogin } from "../../validations/loginUser";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledDivLogin } from "./style";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { motion } from "framer-motion";

const LoginPage = ({ setUser }) => {
  const [loading, setLoading] = useState(false);
  const [seePassword, setSeePassword] = useState("password");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemaLogin),
  });

  const navigate = useNavigate();

  const handleSubmitFunction = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("sessions", data);
      setUser(response.data.user);
      localStorage.clear();
      localStorage.setItem("kenzieHubToken", response.data.token);
      toast.success("Login efetuado com sucesso!", {
        style: {
          border: "1px solid var(--color-sucess)",
          padding: "16px",
          color: "var(--color-sucess)",
          background: "var(--color-grey-2)",
        },
        iconTheme: {
          primary: "var(--color-sucess)",
          secondary: "var(--color-grey-2)",
        },
      });
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error(
        "Não foi possível efetuar o login. Verifique os dados e tente novamente",
        {
          style: {
            border: "1px solid var(--color-error)",
            padding: "16px",
            color: "var(--color-error)",
            background: "var(--color-grey-2)",
          },
          iconTheme: {
            primary: "var(--color-error)",
            secondary: "var(--color-grey-2)",
          },
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:2}}
  >
    <StyledDivLogin>
      <form onSubmit={handleSubmit(handleSubmitFunction)}>
        <p>Login</p>
        <input
          type="text"
          id="email"
          placeholder="Insira seu email cadastrado"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>
        <div className="reveal-input">
          <input
            type={seePassword}
            id="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <span
            className="eye"
            onClick={() =>
              seePassword === "password"
                ? setSeePassword("text")
                : setSeePassword("password")
            }
          >
            {seePassword === "password" ? (
              <AiFillEyeInvisible />
            ) : (
              <AiFillEye />
            )}
          </span>
        </div>
        <p>{errors.password?.message}</p>
        <button disabled={loading} type="submit">
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </StyledDivLogin>
    </motion.div>
  );
};

export default LoginPage;
