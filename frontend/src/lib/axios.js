import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://chat-app-backend-sigr.onrender.com";

export const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/api`,
  withCredentials: true,
});