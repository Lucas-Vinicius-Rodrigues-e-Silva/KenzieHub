import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services";
import { AuthContext } from "./AuthContext";
import { sucessToast } from "../components/SucessToast";
import { errorToast } from "../components/ErrorToast";

export const TechsContext = createContext({});

export const TechsProvider = ({ children }) => {
  const { user, navigate, userLoading, setUser } = useContext(AuthContext);
  const [isUpdateAndDeleteModalActive, setIsUpdateAndDeleteModalActive] =
    useState(false);
  const [userTechs, setUserTechs] = useState([]);
  const [isNewTechModalActive, setIsNewTechModalActive] = useState(false);
  const [techId, setTechId] = useState("")
  const [techName, setTechName] = useState("")
  const [techStatus, setTechStatus] = useState("")
  const [loading, setLoading] = useState(false)
  const [loadingDelete, setLoadingDelete] = useState(false)
  const [loadingUpdate, setLoadingUpdate] = useState(false)

  useEffect(() => {
    async function requestUserTechs() {
      try {
        const response = await api.get("profile");
        setUserTechs(response.data.techs);
      } catch (error) {
        console.log(error);
      }
    }
    requestUserTechs();
  }, [userTechs]);

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
      setLoading(true)
      const response = await api.post("users/techs", data);
      sucessToast("Tecnologia adicionada com sucesso!")
    } catch (error) {
      console.log(error);
      errorToast("Não foi possível adicionar a tecnologia. Aguarde e tente novamente.")
    } finally {
      setLoading(false)
      setIsNewTechModalActive(false);
    }
  };

  const handleUpdateTechs = async (data) => {
    try {
      setLoadingUpdate(true)
      if(data.status === techStatus) {
        errorToast("O nível de tecnlogia deve ser diferente do atual!")
        setIsUpdateAndDeleteModalActive(false);
      } else {
      const updateTechs = await api.put(`users/techs/${techId}`, data);
      sucessToast("Tecnologia atualizada com sucesso!")
    }
    } catch (error) {
      console.log(error);
      errorToast("Não foi possível atualizar a tecnologia. Aguarde e tente novamente.")
    } finally {
      setLoadingUpdate(false)
      setIsUpdateAndDeleteModalActive(false);
    }
  };

  const handleAndDeleteTechs = async () => {
    try {
      setLoadingDelete(true)
      const deleteTechs = await api.delete(`users/techs/${techId}`);
      sucessToast("Tecnologia deletada com sucesso!")
    } catch (error) {
      console.log(error);
      errorToast("Não foi possível deletar a tecnologia. Aguarde e tente novamente.")
    } finally {
      setLoadingDelete(false)
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
        userTechs,
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
        handleNewTech
      }}
    >
      {children}
    </TechsContext.Provider>
  );
};
