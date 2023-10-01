import { getAPIClient } from "./axios";

export interface ISignup {
  name: string;
  email: string;
  password: string;
}
export const signUp = async (data: ISignup) => {
  const apiClient = getAPIClient();
  const response = await apiClient.post("/api/user/create", data);
  return response.data;
};
