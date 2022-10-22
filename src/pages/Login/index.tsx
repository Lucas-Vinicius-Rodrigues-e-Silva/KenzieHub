import { useForm } from "react-hook-form";
import { formSchemaLogin } from "../../validations/loginUser";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { StyledDivLogin } from "./style";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AuthContext, ILoginUser } from "../../contexts/AuthContext";
import { LoadingPage } from "../../components/Loading";
const LoginPage = () => {
  const {handleLoginUser, loading} = useContext(AuthContext)
  const [seePassword, setSeePassword] = useState("password");

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginUser>({resolver: yupResolver(formSchemaLogin)});

  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:2}}
  >
    { loading ? <LoadingPage/> :
    <StyledDivLogin>
      <form onSubmit={handleSubmit(handleLoginUser)}>
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
    }
    </motion.div>
  );
};

export default LoginPage;
