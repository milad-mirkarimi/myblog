import React, { useState } from "react";

const CreateArticle = () => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = { sections };
    console.log("Payload:", payload);
    // Here you can send the payload to your backend or perform other actions
  };

  return (
    <form onSubmit={handleSubmit}>
      {sections.map((section, index) => (
        <div key={index}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={section.title}
            onChange={(event) => handleInputChange(index, event)}
          />
          <textarea
            name="text"
            placeholder="Text"
            value={section.text}
            onChange={(event) => handleInputChange(index, event)}
          />
          <input
            type="text"
            name="image"
            placeholder="Image Link"
            value={section.image}
            onChange={(event) => handleInputChange(index, event)}
          />
        </div>
      ))}
      <button type="button" onClick={addSection}>
        Add Section
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateArticle;
