import axios from "axios";
import AuthService from "./authService";

const http = axios.create({
  baseURL: `${
    process.env.NODE_ENV === "production" ? "" : "http://localhost:3000"
  }/api/v1`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      config.headers["Authorization"] = `Bearer ${currentUser.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
