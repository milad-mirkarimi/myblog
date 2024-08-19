import http from "./index.js";

const create = (payload) => {
  return http.post("/articles", payload);
};

const getArticles = () => {
  return http.get("/articles");
};

const getArticle = (id) => {
  return http.get(`/articles/${id}`);
};

export default {
  create,
  getArticles,
  getArticle,
};
