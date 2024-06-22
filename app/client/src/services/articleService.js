import http from "./index.js";

const create = (payload) => {
  return http.post("/articles", payload);
};

export default {
  create,
};
