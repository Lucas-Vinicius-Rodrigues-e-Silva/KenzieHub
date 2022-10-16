import { UpdateAndDeleteModal } from "../UpdateAndDeleteModal";
import { useContext } from "react";
import { TechsContext } from "../../contexts/TechsContext";
import { StyledLi } from "./style";

export const AllTechs = ({ status, title, id }) => {
  const { isUpdateAndDeleteModalActive, setIsUpdateAndDeleteModalActive, setTechId, setTechName } =
    useContext(TechsContext);

    function defineStates() {
      setIsUpdateAndDeleteModalActive(true) 
      setTechId(id)
      setTechName(title)
    }

  return (
    <>
      <StyledLi onClick={ defineStates}>
        <h4>{title}</h4>
        <span>{status}</span>
      </StyledLi>
      {isUpdateAndDeleteModalActive && <UpdateAndDeleteModal/>}
    </>
  );
};
