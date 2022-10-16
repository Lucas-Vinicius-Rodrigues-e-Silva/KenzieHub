import { StyledUpdateAndDeleteModal } from "./style";
import { MdClose } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { TechsContext } from "../../contexts/TechsContext";
import { formSchemaUpdateAndDelete } from "../../validations/updateAndDeleteTechs";
import { LoadingAnimation } from "../LoadingAnimation";

export const UpdateAndDeleteModal = () => {
  const { setIsUpdateAndDeleteModalActive, techName, loadingUpdate, loadingDelete, handleUpdateTechs, handleAndDeleteTechs } =
    useContext(TechsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchemaUpdateAndDelete) });

  return (
    <StyledUpdateAndDeleteModal>
      <div className="update-and-delete-layer">
        <div className="update-and-delete-main">
          <section className="update-and-delete-description">
            <h2>Atualizar e excluir tecnologias</h2>
            <button onClick={() => setIsUpdateAndDeleteModalActive(false)}>
              <MdClose size={24} />
            </button>
          </section>
          <form onSubmit={handleSubmit(handleUpdateTechs)}>
            <div className="tech-name">
              <h3>{techName}</h3>
            </div>
            <label>Selecionar status</label>
            <select name="status" id="status" {...register("status")}>
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </select>
            <p>{errors.status?.message}</p>
            <div className="buttons">
              <button disabled={loadingUpdate} type="submit">{ loadingUpdate ? <LoadingAnimation/> : "Salvar alterações"}</button>
              <span disabled={loadingDelete} onClick={() => handleAndDeleteTechs()}>{ loadingDelete ? <LoadingAnimation/> : "Excluir"}</span>
            </div>
          </form>
        </div>
      </div>
    </StyledUpdateAndDeleteModal>
  );
};
