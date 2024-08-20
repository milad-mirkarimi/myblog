import { useQuery } from "@tanstack/react-query";
import fetchArticle from "../services/fetchArticle";
import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  const results = useQuery(["article", id], fetchArticle);

  if (results.isLoading) {
    return (
      <div className="container p-8 mx-auto max-w-2xl loading-pane h-screen">
        <h2 className="loader">Loading article...</h2>
      </div>
    );
  }

  const article = results.data;

  return (
    <div className="h-full">
      <section className="background-gradient text-white p-8">
        <h2 className="font-garamond text-blue-600 text-5xl lg:text-8xl main-title">
          {article.title}
        </h2>
        <p className="italic">By {article.user.fullname}</p>
      </section>

      <div className="container p-8 mx-auto max-w-2xl">
        {article.sections.map((section, index) => (
          <section className="mb-12" key={index}>
            <h3 className="font-garamond text-4xl md:text-5xl mb-4">
              {section.title}
            </h3>
            <p className="mb-4">{section.text}</p>
            {section.image ? (
              <img src={section.image} alt={`section-${index}`} />
            ) : null}
          </section>
        ))}
      </div>
    </div>
  );
};

export default Article;
