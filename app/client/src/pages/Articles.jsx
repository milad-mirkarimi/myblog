import ArticleCard from "../components/ArticleCard";
import { useEffect, useState } from "react";
import ArticleService from "../services/articleService";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);

  async function getArticles() {
    try {
      const res = await ArticleService.fetchArticles();
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container p-8 mx-auto max-w-2xl h-screen">
      <h2 className="font-garamond text-4xl md:text-5xl lg:text-8xl">
        Articles
      </h2>
      {!articles.length ? (
        <h3>Loading...</h3>
      ) : (
        articles.map((article) => {
          return (
            <ArticleCard
              key={article.id}
              title={article.title}
              id={article.id}
              blob={article.description}
            />
          );
        })
      )}
    </div>
  );
};

export default Articles;
