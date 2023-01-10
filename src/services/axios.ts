import axios from "axios";
import { parseCookies } from "nookies";
export const getAPIClient = (ctx?: any) => {
  const { "doceifancia.auth": token } = parseCookies(ctx);
  const api = axios.create({
    baseURL: `${process.env.ENVIRONMENT}`,
  });

  if (token) {
    api.defaults.headers["Authorization"] = `${token}`;
  }
  return api;
};
