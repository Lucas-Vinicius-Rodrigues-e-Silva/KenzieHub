import mainImage from "../../img/MainImg.gif";
import { StyledSection } from "./style";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const HomePage = () => {
  const { setUser } = useContext(AuthContext);
  const token:string | null = localStorage.getItem("kenzieHubToken")
  if(token) {
    localStorage.removeItem("kenzieHubToken")
    setUser(null)
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}>
      <StyledSection>
        <img className="main-img" src={mainImage} alt="Productivity img" />
      </StyledSection>
    </motion.div>
  );
};

export default HomePage;
