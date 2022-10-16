import loadingAnimation from "../../img/loading-animation.gif";
import { StyledAnimation } from "./style";

export const LoadingAnimation = () => {
  return (
    <StyledAnimation>
      <img
        src={loadingAnimation}
        alt="animação de carregamento ilusão de ótica"
      />
    </StyledAnimation>
  );
};
