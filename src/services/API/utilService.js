import axios from "axios";
const baseURL = process.env.REACT_APP_API_URL;

const token =
  window.localStorage?.getItem("login") ||
  window.sessionStorage?.getItem("login");
export const api = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${JSON.parse(token)?.token}`
  }
});

export const apiImage = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "multipart/form-data",
    Authorization: `Bearer ${token}`
  }
});

export const authApi = axios.create({ baseURL: baseURL });
