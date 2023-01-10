import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { meRequest, signInRequest } from "../services/signin";
import { setCookie } from "nookies";
import Router from "next/router";
import { parseCookies } from "nookies";
import { api } from "../services/api";
import { message } from "antd";

interface AuthSignIn {
  email: string;
  password: string;
}
interface AuthContextType {
  isAuthenticated: boolean;
  signIn: ({ email, password }: AuthSignIn) => Promise<void>;
  errorMessageLogin: ReactElement;
  isLoading: boolean;
  user: User | null;
}

interface ChildrenProps {
  children: ReactNode;
}

interface User {
  email: string;
  name: string;
  password: string;
  admin: boolean;
  image: string;
  id: string;
  token: string;
}

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsloading] = useState(false);
  const [messageApi, errorMessageLogin] = message.useMessage();

  const isAuthenticated = !!user;

  const { "doceifancia.auth": token } = parseCookies();
  useEffect(() => {
    const retrieveUser = async () => {
      if (token) {
        const retrieveUserInformation = await meRequest();
        retrieveUserInformation && setUser(retrieveUserInformation);
      }
    };
    retrieveUser();
  }, [token]);

  const errorAlert = () => {
    messageApi.open({
      type: "error",
      content: "Usuário ou senha inválida",
    });
  };
  const signIn = async ({ email, password }: AuthSignIn) => {
    setIsloading(true);
    try {
      const { token } = (await signInRequest({ email, password })) || {};
      const expireToken = 60 * 60 * 1; // 1 hour
      if (token == undefined) {
        throw Error();
      }
      setCookie(undefined, "doceifancia.auth", `${token}`, {
        maxAge: expireToken,
      });
      setUser(user);
      api.defaults.headers["Authorization"] = `Bearer ${token}`;
      if (token) Router.push("/table");
      setIsloading(false);
    } catch (error) {
      setIsloading(false);
      errorAlert();
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, signIn, errorMessageLogin, isLoading, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
