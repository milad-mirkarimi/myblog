import ArticleCard from "../components/ArticleCard";

const Home = () => {
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
    <div>
      <section className="bg-gray-800 text-white p-8">
        <h2 className="text-4xl md:text-5xl lg:text-8xl font-garamond">
          Software solutions and ideas for purpose driven ambitious companies
        </h2>
      </section>

      <section className="p-8 grid md:grid-cols-2 gap-4">
        <div className="max-w-2xl">
          <h3 className="text-5xl mb-4 font-garamond">Hello there,</h3>
          <p className="mb-4">
            My name is Milad, with extensive experience across frontend, backend
            and infrastructure stacks, working across some of New Zealand top
            startup companies and some big names like Xero, I can help your
            company and project to deliver high quality software solutions that
            are maintainable and scalable for continuous improvement. I have
            excelled in roles ranging from software engineering to managerial
            position.
          </p>
          <h4 className="font-garamond text-4xl">
            Code | Architecture | Management
          </h4>
          <ul className="list-disc pl-12 pt-4">
            <li className="pb-2">
              <p>Javascript | React | Vue</p>
            </li>
            <li className="pb-2">
              <p>Ruby on Rails | Nodejs | .NET</p>
            </li>
            <li className="pb-2">
              <p>Vitest | Jest | Cypress | Rspec | Capybara</p>
            </li>
            <li className="pb-2">
              <p>Terraform | Pulumi | AWS | Heroku | Github Actions</p>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-5xl font-garamond">
            Check out some of my articles👇
          </h3>
          {articles.map((article) => {
            return (
              <ArticleCard
                key={article.id}
                title={article.title}
                id={article.id}
                blob={article.blob}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
