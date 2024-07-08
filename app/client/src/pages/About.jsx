import bailee from "../assets/bailee-ludi.jpeg"

const About = () => {
  return (
    <div className="container p-8 mx-auto max-w-2xl">
      <h2 className="font-garamond text-5xl lg:text-8xl mb-8">
        About me
      </h2>
      <p className="mb-8">
        Hello there, I&apos;m Milad, a tech enthusiast and dog dad to two amazing dogs (arguably the best dogs in the world).
        I currently live in Sydney and work remotely for APLYiD as a senior engineer. How did I end up in Sydney, you may ask? I can tell you more when I meet you.
      </p>

      <p className="mb-8">
        I have nearly 10 years of experience coding and building products using JavaScript frameworks such as React and Vue for the frontend, and Node.js for the backend.
        Recently, I have discovered a passion for building products with Ruby on Rails.
      </p>

      <p className="mb-8">
        My experience in tech encompasses a wide range of roles, including Web Tutor, Frontend Engineer, Fullstack Engineer, Tech Lead, Software Engineering Manager, and most recently, Senior Software Engineer.
      </p>

      <p className="mb-8">
        I cannot wait to discuss with you about your next ideas, opportunities or your team. You can contact me directly
        using one of the links below:
      </p>
      <p className="link"><a rel="noreferrer" href="https://www.linkedin.com/in/milad-mirkarimi-74075398/" target="_blank">My Linked in profile</a></p>
      <p className="link mb-8"><a href="mailto:miladmirkarimi3@gmail.com">miladmirkarimi3@gmail.com</a></p>

      <img className="rounded-full" src={bailee} alt="Bailee-ludi" />
    </div>
  );
};

export default About;
