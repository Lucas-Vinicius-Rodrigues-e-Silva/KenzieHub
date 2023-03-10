import { Modal } from "./style";
import { MdClose } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchemaNewTech } from "../../validations/newTech";
import { useContext } from "react";
import { TechsContext } from "../../contexts/TechsContext";
import { LoadingAnimation } from "../LoadingAnimation";

export interface INewTechData {
  title: string;
  status: string;
}

export const TechModal = () => {

  const { setIsNewTechModalActive, loading, handleNewTech } = useContext(TechsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm <INewTechData>({ resolver: yupResolver(formSchemaNewTech) });

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
              type="text"
              id="title"
              placeholder="Digite o nome da nova tecnologia"
              {...register("title")}
            />
            <p>{errors.title?.message}</p>
            <label htmlFor="status">Selecionar status</label>
            <select  id="status" {...register("status")}>
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </select>
            <button disabled={loading} type="submit">{loading ? <LoadingAnimation/> : "Cadastrar tecnologia"}</button>
          </form>
        </div>
      </div>
    </Modal>
  );
};
