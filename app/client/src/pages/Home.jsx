import ArticleCard from "../components/ArticleCard";
import useArticles from "../hooks/useArticles";
import hello from "../assets/giphy.webp";

const Home = () => {
  const [articles] = useArticles();

  return (
    <div>
      <section className="background-gradient text-white p-8">
        <h2 className="text-5xl lg:text-8xl font-garamond">
          <span style={{ "--delay": 1}} className="catch text-blue-600">S</span>oftware solutions and i<span style={{ "--delay": 0.5}} className="catch text-blue-600">d</span>eas for purpose driven a<span style={{ "--delay": 3}} className="catch text-blue-600">m</span>bitious companies
        </h2>
      </section>

      <section className="p-8 grid md:grid-cols-2 gap-4">
        <div className="max-w-2xl">
          <h3 className="text-4xl md:text-5xl mb-8 font-garamond">Hey, my name is <span className="text-blue-600">Milad</span></h3>
          <p className="mb-8">
            I&apos;m faily a carious person, I build things and I break things, I&apos;m always open to explore new ideas and experiences.
            I&apos;m a creative individual With extensive experience across frontend, backend
            and infrastructure stacks, working across some of New Zealand top
            startup companies. My passion is building maintainable and scalabe code and products that can live a long life.
          </p>
          <img src={hello} alt="hello" />
        </div>

        <div>
          <h3 className="text-4xl md:text-5xl font-garamond">
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
