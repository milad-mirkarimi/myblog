import { Link } from "react-router-dom";

const ArticleCard = ({ style, title, blob, id }) => {

  return (
    <div style={style} className="py-8 max-w-2xl flex items-center article-card">
      <div className="svg-container article-card-gem">
        <svg className="house-loader h-l1" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_2" x="0" y="0" viewBox="0 0 220.5 191" enableBackground="new 0 0 220.5 191" xmlSpace="preserve">
          <g id="box">
              <polygon id="back" opacity="0.7" fill="#2563eb" points="125.2 130.3 41.6 141.9 41.6 52.3 125.3 40.2" />
              <polygon id="l-side" opacity="0.8" fill="#2563eb" points="87.5 166.7 41.6 142.5 41.6 52.3 88.5 77.3 " />
              <polygon id="r-side" opacity="0.8" fill="#2563eb" points="171.1 154.6 125.3 130.3 125.3 40.1 172.2 65.2 " />
              <polygon id="front" opacity="0.7" fill="#2563eb" points="171.1 155.2 87.5 166.7 88.5 77.3 172.1 65.6 " />
          </g>
          <g id="roof">
              <polygon opacity="0.7" fill="#2563eb" points="172.1 65.6 88.5 77.3 68.6 35.4 149.7 23.5 " />
              <polygon opacity="0.7" fill="#2563eb" points="125.3 40.2 41.6 52.3 68.1 35.4 149.8 23.7 " />
          </g>
          <g id="column">
              <line fill="none" stroke="#39B54A" strokeMiterlimit="10" x1="87.5" y1="166.7" x2="88.5" y2="77.3" />
              <line fill="none" stroke="#39B54A" strokeMiterlimit="10" x1="171.1" y1="155.2" x2="172.2" y2="65.6" />
              <line fill="none" stroke="#39B54A" strokeMiterlimit="10" x1="125.3" y1="130.5" x2="125.3" y2="40.5" />
              <line fill="none" stroke="#39B54A" strokeMiterlimit="10" x1="41.6" y1="142.5" x2="41.6" y2="52.3" />
          </g>
          <g id="roof-lines">
              <line className="one" strokeLinecap="round" fill="none" stroke="#39B54A" strokeMiterlimit="10" x1="88.5" y1="77.3" x2="68.1" y2="35.4" />
              <line className="two" strokeLinecap="round" fill="none" stroke="#39B54A" strokeMiterlimit="10" x1="41.6" y1="52.3" x2="68.1" y2="35.4" />
              <line className="three" strokeLinecap="round" fill="none" stroke="#39B54A" strokeMiterlimit="10" x1="172.2" y1="65.9" x2="149.8" y2="23.7" />
              <line className="four" strokeLinecap="round" fill="none" stroke="#39B54A" strokeMiterlimit="10" x1="125" y1="40.9" x2="150.1" y2="23.7" />
              <line id="top" fill="none" stroke="#39B54A" strokeMiterlimit="10" x1="68.1" y1="35.4" x2="150.1" y2="23.7" />
          </g>
        </svg>
      </div>
      <div className="w-full">
        <h4 className="text-4xl mb-4 font-garamond">{title}</h4>
        <p className="mb-4">{blob}</p>
        <button
          className="button">
          <Link to={`/articles/${id}`}>
            Read this article
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
