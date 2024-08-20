import { useState } from "react";
import MoodContext from "../context/MoodContext";
import { useContext } from "react";

const MoodButton = () => {
  const themes = ["default", "joker", "grinch", "doubtfire"];
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  // eslint-disable-next-line no-unused-vars
  const [_, setMood] = useContext(MoodContext);

  function handleMoodChange() {
    document.documentElement.classList.remove(themes[currentThemeIndex]);
    const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
    document.documentElement.classList.add(themes[nextThemeIndex]);
    setCurrentThemeIndex(nextThemeIndex);
    setMood(themes[nextThemeIndex]);
  }

  return (
    <button
      onClick={handleMoodChange}
      className="mood-button ml-4 text-sm rounded-full text-white bg-transparent border border-white px-2"
    >
      Change mood
    </button>
  );
};

export default MoodButton;
