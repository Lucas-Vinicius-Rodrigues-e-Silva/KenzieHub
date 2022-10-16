import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services";
import { AuthContext } from "./AuthContext";

export const TechsContext = createContext({});

export const TechsProvider = ({ children }) => {
  const { user, navigate, userLoading, setUser } = useContext(AuthContext);
  const [isUpdateAndDeleteModalActive, setIsUpdateAndDeleteModalActive] =
    useState(false);
  const [userTechs, setUserTechs] = useState([]);
  const [isNewTechModalActive, setIsNewTechModalActive] = useState(false);
  const [techId, setTechId] = useState("")
  const [techName, setTechName] = useState("")

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
      }}
    >
      {children}
    </TechsContext.Provider>
  );
};
