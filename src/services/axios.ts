import axios from "axios";
import { parseCookies } from "nookies";
export const getAPIClient = (ctx?: any) => {
  const { "doceifancia.auth": token } = parseCookies(ctx);
  const api = axios.create({
    baseURL: "https://doceinfanciabackend-production.up.railway.app",
  });

  if (token) {
    api.defaults.headers["Authorization"] = `${token}`;
  }
  return api;
};
