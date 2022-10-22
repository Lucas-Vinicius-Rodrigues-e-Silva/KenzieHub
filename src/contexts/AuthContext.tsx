import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { sucessToast } from "../components/SucessToast";
import { errorToast } from "../components/ErrorToast";

interface IUserTechs{
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
}

interface IUser {
  avatar_url: null | string;
  bio: string;
  contact: string;
  course_module: string;
  created_at: string;
  email: string;
  id: string;
  name: string;
  techs: IUserTechs[] | [];
  updated_at: string;
  works: [];
}

interface IAuthProviderProps {
  children: ReactNode;
}

 export interface ILoginUser {
  email: string;
  password: string;
}

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string;
}

interface IAuthContext {
handleLoginUser: ((data: ILoginUser) => void);
loading: true | false;
setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
user: IUser | null;
navigate: NavigateFunction;
userLoading: true | false;
handleRegisterUser: ((data: IRegisterUser) => void);
setTechs: React.Dispatch<React.SetStateAction<IUserTechs[] | null>>;
techs: IUserTechs[] | null;
}

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [userLoading, setUserLoading] = useState(true);
  const [user, setUser] = useState<IUser | null>(null);
  const [techs, setTechs] = useState<IUserTechs[] | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("kenzieHubToken");
      console.log(token)
      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get("profile");
          setUser(data);
          setTechs(data.techs);
        } catch (error) {
          console.log(error);
        }
      } else if (!token) {
        navigate("/")
      }
      setUserLoading(false);
    }
    loadUser();
  }, []);

  const handleLoginUser = async (data: ILoginUser) => {
    try {
      setLoading(true);
      const response = await api.post("sessions", data);
      const { user: userResponse, token } = response.data;
      api.defaults.headers.authorization = `Bearer ${token}`;
      setUser(userResponse);
      setTechs(userResponse.techs);
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

  const handleRegisterUser = async (data: IRegisterUser) => {
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
        handleLoginUser,
        loading,
        setUser,
        user,
        navigate,
        userLoading,
        handleRegisterUser,
        setTechs,
        techs,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
