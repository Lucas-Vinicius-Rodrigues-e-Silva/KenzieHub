import { Modal } from "./style";
import { MdClose } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchemaNewTech } from "../../validations/newTech";
import { api } from "../../services";
import { useContext } from "react";
import { TechsContext } from "../../contexts/TechsContext";

export const TechModal = () => {
  const { setNewTechs, setIsNewTechModalActive } = useContext(TechsContext);
  const handleNewTech = async (data) => {
    try {
      const response = await api.post("users/techs", data);
      setNewTechs(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsNewTechModalActive(false);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchemaNewTech) });

  return (
    <Modal>
      <div className="overlay">
        <div className="content">
          <div className="modal-tittle">
            <h2>Cadastrar Nova Tecnologia</h2>
            <button onClick={() => setIsNewTechModalActive(false)}>
              <MdClose size={24} />
            </button>
          </div>
          <form onSubmit={handleSubmit(handleNewTech)}>
            <label htmlFor="title">Nome</label>
            <input
              name="title"
              type="text"
              id="title"
              placeholder="Digite o nome da nova tecnologia"
              {...register("title")}
            />
            <p>{errors.title?.message}</p>
            <label htmlFor="status">Selecionar status</label>
            <select name="status" id="status" {...register("status")}>
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </select>
            <p>{errors.status?.message}</p>
            <button type="submit">Cadastrar Tecnologia</button>
          </form>
        </div>
      </div>
    </Modal>
  );
};