import { createContext, useEffect, useState } from "react";
import { api } from "../services";
import { useNavigate } from "react-router-dom";
import { sucessToast } from "../components/SucessToast";
import { errorToast } from "../components/ErrorToast";
export const AuthContext = createContext({}); 

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [userLoading, setUserLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("kenzieHubToken");
      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get("profile");
          setUser(data);
        } catch (error) {
          console.log(error);
        }
      }
      setUserLoading(false);
    }
    loadUser();
  }, []);

  const handleSubmitFunction = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("sessions", data);
      const { user: userResponse, token } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`;
      setUser(userResponse);

      localStorage.setItem("kenzieHubToken", token);

      sucessToast("Login feito com sucesso!");
      navigate("/dashboard", { replace: true });
    } catch (error) {
      errorToast(
        "Não foi possível efetuar o login. Confira os dados e tente novamente"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitFormFunction = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("users", data);
      sucessToast("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (error) {
      errorToast(
        "Não foi possível realizar o cadastro. Verifique os dados e tente novamente."
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        handleSubmitFunction,
        loading,
        setUser,
        user,
        navigate,
        userLoading,
        handleSubmitFormFunction,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
