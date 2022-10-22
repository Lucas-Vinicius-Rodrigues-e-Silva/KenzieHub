import { UpdateAndDeleteModal } from "../UpdateAndDeleteModal";
import { useContext } from "react";
import { TechsContext } from "../../contexts/TechsContext";
import { StyledLi } from "./style";

export interface IAllTechsProps {
  status: string;
  title: string;
  id: string;
}

export const AllTechs = ({ status, title, id }: IAllTechsProps) => {
  const { isUpdateAndDeleteModalActive, setIsUpdateAndDeleteModalActive, setTechId, setTechName, setTechStatus } = useContext(TechsContext);

    function defineStates() : void {
      setIsUpdateAndDeleteModalActive(true) 
      setTechId(id)
      setTechName(title)
      setTechStatus(status)
    }

  return (
    <>
      <StyledLi onClick={defineStates}>
        <h4>{title}</h4>
        <span>{status}</span>
      </StyledLi>
      {isUpdateAndDeleteModalActive && <UpdateAndDeleteModal/>}
    </>
  );
};
