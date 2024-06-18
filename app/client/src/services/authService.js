import http from "./index.js";

const login = (email, password) => {
  return http.post("/login", { email, password });
};

const logout = () => {
  sessionStorage.removeItem("user");
  delete http.defaults.headers.common["Authorization"];
};

const getCurrentUser = () => {
  return JSON.parse(sessionStorage.getItem("token"));
};

export default {
  login,
  logout,
  getCurrentUser,
};
