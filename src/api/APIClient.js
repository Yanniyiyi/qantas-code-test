import axios from "axios";

export const baseUrl =
  process.env.NODE_ENV != "production"
    ? "http://localhost:3000/api"
    : " https://6256a9b3e07d2c9a670a7e5c.mockapi.io/api";
export const apiClient = axios.create({
  baseURL: baseUrl,
});
