import ArticleCard from "../components/ArticleCard";
import useArticles from "../services/useArticles";

const Home = () => {
  const [articles] = useArticles();

  return (
    <div>
      <section className="background-gradient text-white p-8">
        <h2 className="text-4xl md:text-5xl lg:text-8xl font-garamond">
          Software solutions and ideas for purpose driven ambitious companies
        </h2>
      </section>

      <section className="p-8 grid md:grid-cols-2 gap-4">
        <div className="max-w-2xl">
          <h3 className="text-5xl mb-8 font-garamond">Hey, my name is <span className="text-blue-600">Milad</span></h3>
          <p className="mb-8">
            With extensive experience across frontend, backend
            and infrastructure stacks, working across some of New Zealand top
            startup companies, I can help your
            company and project to deliver high quality software solutions that
            are maintainable and scalable for continuous improvement. I have
            excelled in roles ranging from software engineering to managerial
            position.
          </p>
        </div>

        <div>
          <h3 className="text-5xl font-garamond">
            Check out some of my articles
          </h3>
          {articles.map((article, index) => {
            return (
              <ArticleCard
                style={{"--i": index}}
                key={index}
                title={article.title}
                id={article.id}
                blob={article.description}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
