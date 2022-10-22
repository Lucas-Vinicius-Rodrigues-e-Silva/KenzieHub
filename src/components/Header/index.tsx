import { Link, Outlet } from "react-router-dom";
import { StyledHeader } from "./style";
import tittle from "../../img/Logo.svg"
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:2}}
  >
      <StyledHeader>
        <div>
          <img src={tittle} alt="Kenzie Hub" />
          <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/register"}>Cadastro</Link>
          </nav>
        </div>
      </StyledHeader>

      <Outlet />
    </motion.div>
  );
};

export default Header;
