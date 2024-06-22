import http from "./index.js";

const create = (payload) => {
  return http.post("/articles", payload);
};

const fetchArticles = () => {
  return http.get("/articles");
};

export default {
  create,
  fetchArticles
};
