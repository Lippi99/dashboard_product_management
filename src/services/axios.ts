import axios from "axios";
import { parseCookies } from "nookies";
export const getAPIClient = (ctx?: any) => {
  const { "doceifancia.auth": token } = parseCookies(ctx);
  //asdasdsa
  const api = axios.create({
    // baseURL: "https://doceinfanciabackend-production.up.railway.app",
    baseURL: "http://localhost:4000",
  });

  if (token) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
  }
  return api;
};
