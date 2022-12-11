import axios from "axios";

export const axiosBackendClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:3001",
});
