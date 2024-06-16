import { Link } from "react-router-dom";

const ArticleCard = ({ title, blob, id }) => {
  return (
    <div className="py-4 max-w-2xl">
      <h4 className="text-4xl mb-4 font-garamond text-gray-800">{title}</h4>
      <p>{blob}</p>
      <Link className="link" to={`/articles/${id}`}>
        Read this article
      </Link>
    </div>
  );
};

export default ArticleCard;
