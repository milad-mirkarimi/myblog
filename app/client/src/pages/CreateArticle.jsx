import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArticleService from "../services/articleService";

const CreateArticle = () => {
  const navigate = useNavigate();
  const [articleTitle, setArticleTitle] = useState("");
  const [articleDescription, setArticleDescription] = useState("");

  const [sections, setSections] = useState([
    { title: "", text: "", image: "" },
  ]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newSections = [...sections];
    newSections[index][name] = value;
    setSections(newSections);
  };

  const addSection = () => {
    setSections([...sections, { title: "", text: "", image: "" }]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      title: articleTitle,
      description: articleDescription,
      sections_attributes: sections,
    };

    try {
      const res = await ArticleService.create(payload);
      if (res) {
        navigate("/articles");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container p-8 mx-auto max-w-2xl h-full text-zinc-900">
      <h2 className="font-garamond text-4xl md:text-5xl lg:text-8xl">
        Create Article
      </h2>
      <form onSubmit={handleSubmit} className="mt-8">
        <div className="mb-8">
          <label htmlFor="article-title">
            <input
              className="search-input w-full rounded"
              type="text"
              id="article-title"
              name="articleTitle"
              placeholder="Title"
              onChange={(e) => setArticleTitle(e.target.value)}
            />
          </label>
          <label htmlFor="article-description">
            <textarea
              className="search-input w-full rounded"
              id="article-description"
              name="articleDescription"
              placeholder="Description"
              onChange={(e) => setArticleDescription(e.target.value)}
            />
          </label>
        </div>
        <div className="border-1 border-gray-600 p-4 mb-4">
          {sections.map((section, index) => (
            <div className="mb-16" key={index}>
              <label htmlFor={`title-${index}`}>
                Section title
                <input
                  className="search-input w-full rounded"
                  type="text"
                  id={`title-${index}`}
                  name="title"
                  placeholder="Enter section title"
                  value={section.title}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </label>
              <label htmlFor={`text-${index}`}>
                Text
                <textarea
                  rows="10"
                  className="search-input w-full rounded"
                  id={`text-${index}`}
                  name="text"
                  placeholder="Enter Section text"
                  value={section.text}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </label>
              <label htmlFor={`image-${index}`}>
                Image
                <input
                  className="search-input w-full rounded"
                  id={`image-${index}`}
                  type="text"
                  name="image"
                  placeholder="Image Link"
                  value={section.image}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </label>
            </div>
          ))}
          <button
            className="w-full rounded px-6 py-2 color text-white hover:opacity-90 border-none bg-gray-400 mb-4"
            type="button"
            onClick={addSection}
          >
            + Add a new Section
          </button>
        </div>
        <button
          className="w-full rounded px-6 py-2 color text-white hover:opacity-90 border-none bg-blue-600"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateArticle;
