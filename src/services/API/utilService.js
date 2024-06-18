import axios from "axios";
const baseURL = "http://192.168.45.149:3009/api/v1/";

const token =
  window.localStorage?.getItem("login") ||
  window.sessionStorage?.getItem("login");
export const api = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${JSON.parse(token)?.token}`,
  },
});

export const apiImage = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "multipart/form-data",
    Authorization: `Bearer ${token}`,
  },
});

export const authApi = axios.create({ baseURL: baseURL });
