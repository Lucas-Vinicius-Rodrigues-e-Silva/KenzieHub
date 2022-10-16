import { StyledUpdateAndDeleteModal } from "./style";
import { MdClose } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { TechsContext } from "../../contexts/TechsContext";
import { formSchemaUpdateAndDelete } from "../../validations/updateAndDeleteTechs";
import { api } from "../../services";

export const UpdateAndDeleteModal = () => {
  const { setIsUpdateAndDeleteModalActive, techName, techId } =
    useContext(TechsContext);

  const handleUpdateTechs = async (data) => {
    try {
      const updateTechs = await api.put(`users/techs/${techId}`, data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsUpdateAndDeleteModalActive(false);
    }
  };

  const handleAndDeleteTechs = async () => {
    try {
      const deleteTechs = await api.delete(`users/techs/${techId}`);
    } catch (error) {
      console.log(error);
    } finally {
      setIsUpdateAndDeleteModalActive(false);
    }
  };

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
              <button type="submit">Salvar alterações</button>
              <span onClick={() => handleAndDeleteTechs()}>Excluir</span>
            </div>
          </form>
        </div>
      </div>
    </StyledUpdateAndDeleteModal>
  );
};
