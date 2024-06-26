import ArticleCard from "../components/ArticleCard";
import useArticles from "../services/useArticles";

const Articles = () => {
  const [articles] = useArticles();

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
