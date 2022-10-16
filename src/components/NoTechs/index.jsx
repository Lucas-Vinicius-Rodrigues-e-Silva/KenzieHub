import { StyledDivNoTechs } from "./style";
import NoTechsAnimation from "../../img/Not-Found.gif";

export const NoTechs = () => {
  return (
    <StyledDivNoTechs>
        <h2>Você não possui nenhuma tecnologia no momento</h2>
      <img src={NoTechsAnimation} alt="Nada encontrado" />
    </StyledDivNoTechs>
  );
};
