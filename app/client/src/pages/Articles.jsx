import ArticleCard from "../components/ArticleCard";

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "How to not do Agile properly",
      blob: 'Working across different businesses that they all claim to be "AGILE", I\'m going to share why they are not...',
    },
    {
      id: 2,
      title: "React Redux query 101",
      blob: "Learn the magic of React Toolkit Query and how to make testable and maintainable code with React Redux tool...",
    },
    {
      id: 3,
      title: "How to structure your Vue app from scratch",
      blob: "Structuring a Front end app from scratch could be very a duanting task, making lots of decision get go...",
    },
  ];

  return (
    <div className="container p-8 mx-auto max-w-2xl">
      <h2 className="font-garamond text-4xl md:text-5xl lg:text-8xl">
        Articles
      </h2>
      {!articles.length ? (
        <h3>No articles Found 😢</h3>
      ) : (
        articles.map((article) => {
          return (
            <ArticleCard
              key={article.id}
              title={article.title}
              id={article.id}
              blob={article.blob}
            />
          );
        })
      )}
    </div>
  );
};

export default Articles;
