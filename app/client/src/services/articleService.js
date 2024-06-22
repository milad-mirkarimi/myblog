import http from "./index.js";

const create = (payload) => {
  return http.post("/articles", payload);
};

const fetchArticles = () => {
  return http.get("/articles");
};

const fetchArticle = (id) => {
  return http.get(`/articles/${id}`);
};

export default {
  create,
  fetchArticles,
  fetchArticle,
};
