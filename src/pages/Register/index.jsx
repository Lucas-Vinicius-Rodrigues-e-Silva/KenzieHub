import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../validations/registerUser";
import { api } from "../../services";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledDiv } from "./style";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { motion } from "framer-motion";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const navigate = useNavigate();
  const [seePassword, setSeePassword] = useState("password");
  const [loading, setLoading] = useState(false);
  const handleSubmitFunction = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("users", data);
      toast.success("Cadastro realizado com sucesso!", {
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
        navigate("/login");
      }, 2000);
    } catch (error) {
      toast.error(
        "Não foi possível realizar o cadastro. Verifique os dados e tente novamente.",
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
    <StyledDiv>
      <form onSubmit={handleSubmit(handleSubmitFunction)}>
        <div>
          <h2>Crie sua conta</h2>
          <p>Rápido e grátis. Vamos nessa!</p>
        </div>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          placeholder="Digite seu nome"
          {...register("name")}
        />
        <p>{errors.name?.message}</p>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="Digite seu email"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>
        <label htmlFor="password">Senha</label>
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
        <label htmlFor="confirmPassword">Confirmar senha</label>
        <input
          type={seePassword}
          id="confirmPassword"
          placeholder="Digite novamente sua senha"
          {...register("confirmPassword")}
        />
        <p>{errors.confirmPassword?.message}</p>
        <label htmlFor="bio">Bio</label>
        <input
          type="text"
          id="bio"
          placeholder="Fale sobre você"
          {...register("bio")}
        />
        <p>{errors.bio?.message}</p>
        <label htmlFor="contact">Contato</label>
        <input
          type="text"
          id="contact"
          placeholder="Opção de contato"
          {...register("contact")}
        />
        <p>{errors.contact?.message}</p>
        <label htmlFor="course_module">Selecionar módulo</label>
        <select id="course_module" {...register("course_module")}>
          <option>M1</option>
          <option>M2</option>
          <option>M3</option>
          <option>M4</option>
          <option>M5</option>
          <option>M6</option>
        </select>
        <p>{errors.course_module?.message}</p>
        <button type="submit" disabled={loading}>
          {" "}
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>
    </StyledDiv>
    </motion.div>
  );
};

export default RegisterPage;
