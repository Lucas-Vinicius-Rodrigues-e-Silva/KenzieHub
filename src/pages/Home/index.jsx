import mainImage from "../../img/MainImg.gif";
import { StyledSection } from "./style";
import { motion } from "framer-motion";

const HomePage = () => {
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
