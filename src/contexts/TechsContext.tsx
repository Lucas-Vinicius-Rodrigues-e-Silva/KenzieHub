import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";
import { AuthContext } from "./AuthContext";
import { sucessToast } from "../components/SucessToast";
import { errorToast } from "../components/ErrorToast";
import { INewTechData } from "../components/NewTechModal";
import { IUpdateTechData } from "../components/UpdateAndDeleteModal";

interface ITechsProviderProps {
  children: ReactNode
}

interface ITechContext {
  isUpdateAndDeleteModalActive : boolean,
  setIsUpdateAndDeleteModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  exit: (() => void);
  setIsNewTechModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  isNewTechModalActive:boolean;
  techId: string,
  setTechId:React.Dispatch<React.SetStateAction<string>>;
  techName: string;
  setTechName:React.Dispatch<React.SetStateAction<string>>;
  techStatus:string;
  setTechStatus:React.Dispatch<React.SetStateAction<string>>;
  setLoading:React.Dispatch<React.SetStateAction<boolean>>;
  loading:boolean;
  setLoadingDelete:React.Dispatch<React.SetStateAction<boolean>>;
  loadingDelete: boolean;
  setLoadingUpdate:React.Dispatch<React.SetStateAction<boolean>>;
  loadingUpdate:boolean;
  handleUpdateTechs: ((data:IUpdateTechData) => void);
  handleAndDeleteTechs: (() => void);
  handleNewTech:((data:INewTechData) => void)
}

export const TechsContext = createContext({} as ITechContext);

export const TechsProvider = ({ children }: ITechsProviderProps) => {
  const { navigate, userLoading, setUser, techs, setTechs } = useContext(AuthContext);
  const [techId, setTechId] = useState("");
  const [techName, setTechName] = useState("");
  const [techStatus, setTechStatus] = useState("");
  const [isUpdateAndDeleteModalActive, setIsUpdateAndDeleteModalActive] = useState(false);
  const [isNewTechModalActive, setIsNewTechModalActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [loadingUpdate, setLoadingUpdate] = useState(false);

  const exit = ():void => {
    setUser(null);
    localStorage.removeItem("kenzieHubToken");
    navigate("/");
  };

  if (userLoading) {
    return null;
  }

  const handleNewTech = async (data:INewTechData) => {
    try {
      setLoading(true);
      const newTech = await api.post("users/techs", data);
      console.log(newTech.data);
      setTechs([...techs!, newTech.data]);
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

  const handleUpdateTechs = async (data:IUpdateTechData) => {
    try {
      setLoadingUpdate(true);
      if (data.status === techStatus) {
        errorToast("O nível de tecnlogia deve ser diferente do atual!");
        setIsUpdateAndDeleteModalActive(false);
      } else {
        const updateTechs = await api.put(`users/techs/${techId}`, data);
        const techToUpdate = techs?.find((tech) => tech.id === techId)
        const IndexOfTechToUpdate = techs?.indexOf(techToUpdate!);
        techs?.splice(IndexOfTechToUpdate!, 1);
        setTechs([...techs!, updateTechs.data]);
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

  const handleAndDeleteTechs = async () => {
    try {
      setLoadingDelete(true);
      const deleteTechs = await api.delete(`users/techs/${techId}`);
      const techToDelete = techs?.find((tech) => tech.id === techId);
      const IndexOfTechToDelete = techs?.indexOf(techToDelete!);
      techs?.splice(IndexOfTechToDelete!, 1);
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
