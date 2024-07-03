import { Link } from "react-router-dom";

const ArticleCard = ({ title, blob, id }) => {
  return (
    <div className="py-8 max-w-2xl">
      <h4 className="text-4xl mb-4 font-garamond">{title}</h4>
      <p className="mb-4">{blob}</p>
      <button className="button">
        <Link to={`/articles/${id}`}>
          Read this article
        </Link>
      </button>
    </div>
  );
};

export default ArticleCard;
