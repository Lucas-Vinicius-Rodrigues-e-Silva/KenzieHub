import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import tittle from "../../img/Logo.svg";
import { StyledDivDashboard } from "./style";
import { motion } from "framer-motion";

export const Dashboard = ({ user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    user === null ? navigate("/login") : console.log("mah oiiie");
  }, []);

  const exit = () => {
    localStorage.clear()
    navigate("/")
  }

  console.log(user);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}>
    <StyledDivDashboard>
      <header>
        <nav>
          <img src={tittle} alt="Kenzie Hub" />
          <button onClick={exit}>Sair</button>
        </nav>
      </header>
      <section>
        <div>
          <span>
            <h2>Olá,{user.name}</h2>
            <p>Módulo: {user.course_module}</p>
          </span>
        </div>
        <main>
          <div>
            <h2>Que pena! Estamos em desenvolvimento :(</h2>
            <p>
              Nossa aplicação está em desenvolvimento. Em breve teremos
              novidades!
            </p>
          </div>
        </main>
      </section>
    </StyledDivDashboard>
    </motion.div>
  );
};
