import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../validations/registerUser";
import { useState } from "react";
import { StyledDiv } from "./style";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AuthContext, IRegisterUser } from "../../contexts/AuthContext";
import { LoadingPage } from "../../components/Loading";

const RegisterPage = () => {
  const { handleRegisterUser, loading } = useContext(AuthContext);
  const [seePassword, setSeePassword] = useState("password");
  const [seeConfirmPassword, setSeeConfirmPassword] = useState("password");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUser>({
    resolver: yupResolver(formSchema),
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      {loading ? (
        <LoadingPage />
      ) : (
        <StyledDiv>
          <form onSubmit={handleSubmit(handleRegisterUser)}>
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
            <div className="reveal-input">
              <input
                type={seeConfirmPassword}
                id="confirmPassword"
                placeholder="Digite novamente sua senha"
                {...register("confirmPassword")}
              />
              <span
                className="eye"
                onClick={() =>
                  seeConfirmPassword === "password"
                    ? setSeeConfirmPassword("text")
                    : setSeeConfirmPassword("password")
                }
              >
                {seeConfirmPassword === "password" ? (
                  <AiFillEyeInvisible />
                ) : (
                  <AiFillEye />
                )}
              </span>
            </div>
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
              placeholder="Contato (Linkedin)"
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
              {loading ? "Cadastrando..." : "Cadastrar"}
            </button>
          </form>
        </StyledDiv>
      )}
    </motion.div>
  );
};

export default RegisterPage;
