import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services";
import { AuthContext } from "./AuthContext";
import { sucessToast } from "../components/SucessToast";
import { errorToast } from "../components/ErrorToast";

export const TechsContext = createContext({});

export const TechsProvider = ({ children }) => {
  const { user, navigate, userLoading, setUser, techs, setTechs } =
    useContext(AuthContext);
  const [isUpdateAndDeleteModalActive, setIsUpdateAndDeleteModalActive] =
    useState(false);
  const [isNewTechModalActive, setIsNewTechModalActive] = useState(false);
  const [techId, setTechId] = useState("");
  const [techName, setTechName] = useState("");
  const [techStatus, setTechStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);

  const exit = () => {
    setUser(null);
    localStorage.removeItem("kenzieHubToken");
    navigate("/");
  };

  if (userLoading) {
    return null;
  }

  const handleNewTech = async (data) => {
    try {
      setLoading(true);
      const newTech = await api.post("users/techs", data);
      console.log(newTech.data);
      setTechs([...techs, newTech.data]);
      sucessToast("Tecnologia adicionada com sucesso!");
    } catch (error) {
      console.log(error);
      errorToast(
        "Não foi possível adicionar a tecnologia. Aguarde e tente novamente."
      );
    } finally {
      setLoading(false);
      setIsNewTechModalActive(false);
    }
  };

  const handleUpdateTechs = async (data) => {
    try {
      setLoadingUpdate(true);
      if (data.status === techStatus) {
        errorToast("O nível de tecnlogia deve ser diferente do atual!");
        setIsUpdateAndDeleteModalActive(false);
      } else {
        const updateTechs = await api.put(`users/techs/${techId}`, data);
        const techToUpdate = techs.find((tech) => tech.id === techId);
        const IndexOfTechToUpdate = techs.indexOf(techToUpdate);
        techs.splice(IndexOfTechToUpdate, 1);
        setTechs([...techs, updateTechs.data]);
        sucessToast("Tecnologia atualizada com sucesso!");
      }
    } catch (error) {
      console.log(error);
      errorToast(
        "Não foi possível atualizar a tecnologia. Aguarde e tente novamente."
      );
    } finally {
      setLoadingUpdate(false);
      setIsUpdateAndDeleteModalActive(false);
    }
  };

  const handleAndDeleteTechs = async (data) => {
    try {
      setLoadingDelete(true);
      const deleteTechs = await api.delete(`users/techs/${techId}`);
      const techToDelete = techs.find((tech) => tech.id === techId);
      const IndexOfTechToDelete = techs.indexOf(techToDelete);
      techs.splice(IndexOfTechToDelete, 1);
      sucessToast("Tecnologia deletada com sucesso!");
    } catch (error) {
      console.log(error);
      errorToast(
        "Não foi possível deletar a tecnologia. Aguarde e tente novamente."
      );
    } finally {
      setLoadingDelete(false);
      setIsUpdateAndDeleteModalActive(false);
    }
  };

  return (
    <TechsContext.Provider
      value={{
        isUpdateAndDeleteModalActive,
        setIsUpdateAndDeleteModalActive,
        user,
        exit,
        setIsNewTechModalActive,
        isNewTechModalActive,
        techId,
        setTechId,
        techName,
        setTechName,
        techStatus,
        setTechStatus,
        setLoading,
        loading,
        setLoadingDelete,
        loadingDelete,
        setLoadingUpdate,
        loadingUpdate,
        handleUpdateTechs,
        handleAndDeleteTechs,
        handleNewTech,
      }}
    >
      {children}
    </TechsContext.Provider>
  );
};
