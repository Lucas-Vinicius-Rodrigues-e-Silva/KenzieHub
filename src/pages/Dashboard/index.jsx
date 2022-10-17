import tittle from "../../img/Logo.svg";
import { StyledDivDashboard } from "./style";
import { motion } from "framer-motion";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";
import { TechModal } from "../../components/NewTechModal";
import { TechsContext } from "../../contexts/TechsContext";
import { AllTechs } from "../../components/Techs";
import { NoTechs } from "../../components/NoTechs";
import { AuthContext } from "../../contexts/AuthContext";

export const Dashboard = () => {
  const {
    user,
    exit,
    setIsNewTechModalActive,
    isNewTechModalActive,
  } = useContext(TechsContext);
  const {techs} = useContext(AuthContext)
  return (
    <>
      {user ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
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
                  <h2>Tecnologias</h2>
                  <button onClick={() => setIsNewTechModalActive(true)}>
                    <AiFillPlusCircle size={24} />
                  </button>
                </div>
                {isNewTechModalActive && <TechModal />}
                { techs.length === 0 ? <NoTechs/> :  <ul>
                  {techs.map(({ id, status, title }) => (
                    <AllTechs key={id} id={id} status={status} title={title} />
                  ))}
                </ul>}
              </main>
            </section>
          </StyledDivDashboard>
        </motion.div>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
};
