import { api } from "./api";
import { getAPIClient } from "./axios";

interface AuthSignIn {
  email: string;
  password: string;
}
interface SignInRequestProps {
  id: string;
  token: string;
  admin: boolean;
  image: string;
  name: string;
  email: string;
  password: string;
}

interface User extends SignInRequestProps {}

export const signInRequest = async ({ email, password }: AuthSignIn) => {
  const data = {
    email,
    password,
  };

  try {
    const apiClient = getAPIClient();

    const response = await apiClient.post<SignInRequestProps>(
      "/api/user/login",
      data
    );

    const { admin, id, password, email, token } = response.data;

    let userAccount = {
      email,
      password,
      admin,
      id,
    };

    return {
      userAccount,
      token,
    };
  } catch (error) {}
};

export const meRequest = async () => {
  const apiClient = getAPIClient();
  try {
    const response = await apiClient.get<User | undefined>("/api/user/me");

    return response.data;
  } catch (error) {}
};
