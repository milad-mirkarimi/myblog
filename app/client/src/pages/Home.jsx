import ArticleCard from "../components/ArticleCard";
import useArticles from "../hooks/useArticles";
import hello from "../assets/giphy.webp";
import joker from "../assets/joker.webp";
import grinch from "../assets/grinch.webp";
import doubtfire from "../assets/doubtfire.webp";
import MoodContext from "../context/MoodContext";
import { useContext, useState, useEffect, useMemo } from "react";

const Home = () => {
  const [articles] = useArticles();
  const [mood] = useContext(MoodContext);
  const [imageToShow, setImageToShow] = useState(hello);

  const images = useMemo(() => ({
    joker: joker,
    grinch: grinch,
    doubtfire: doubtfire,
    default: hello,
  }), []);

  // Preload images when the component mounts
  useEffect(() => {
    Object.values(images).map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });
  }, [images]);

  // Set the image based on the current mood
  useEffect(() => {
    setImageToShow(images[mood] || images.default);
  }, [mood, images]);

  return (
    <div>
      <section className="background-gradient text-white p-8">
        <h2 className="text-5xl lg:text-8xl font-garamond">
          <span style={{ "--delay": 1 }} className="catch">
            D
          </span>
          elivering scalable soft
          <span style={{ "--delay": 0.5 }} className="catch text-[--secondary]">
            w
          </span>
          are solutions make the w
          <span style={{ "--delay": 3 }} className="catch text-[--secondary]">
            o
          </span>
          rld a better place.
        </h2>
      </section>

      <section className="p-8 grid md:grid-cols-2 gap-4">
        <div className="max-w-2xl">
          <h3 className="text-4xl md:text-5xl mb-8 font-garamond">
            Hey, my name is <span className="text-[--secondary]">Milad</span>
          </h3>
          <p className="mb-8">
            I&apos;m fairly a curious person, I build things and I break things,
            I&apos;m always open to explore new ideas and experiences.
          </p>
          <img width="500" src={imageToShow} alt="hello" />
        </div>

        <div>
          <h3 className="text-4xl md:text-5xl font-garamond">
            Check out some of my articles
          </h3>
          {articles.map((article, index) => {
            return (
              <ArticleCard
                style={{ "--i": index }}
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
