import { useState, useEffect } from "react";
import ArticleService from "../services/articleService";

export default function useArticles() {
  const [articles, setArticles] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    requestArticles();

    async function requestArticles() {
      setArticles([]);
      setStatus("loading");
      const res = await ArticleService.getArticles();

      setArticles(res.data);
      setStatus("loaded");
    }
  }, []);

  return [articles, status];
}
