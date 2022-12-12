import axios from "axios";

export const axiosBackendClient = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL + "/api/v1" || "http://localhost:3001/api/v1",
});
