import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StartOptions.scss";

export default function StartOptions({
  isLoading,
  isTopicsLoading,
  languages,
  topics,
  getPhrases,
  selectedLanguage,
  setSelectedLanguage,
  selectedTopic,
  setSelectedTopic,
  setNameValue,
}) {
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();

  const handleLanguageSelection = (e, languageId) => {
    setSelectedLanguage(languageId);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;

    if (!name.length) {
      setErrorMsg("Please enter a name");
      return;
    }

    if (!selectedLanguage) {
      setErrorMsg("Please select a language");
      return;
    }

    setNameValue(name);
    getPhrases(selectedLanguage, selectedTopic);
    navigate("/chatbot");
  };

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <section className="start-options">
      <h2 className="start-options__title">Options</h2>
      <form className="start-options__form" onSubmit={handleFormSubmit}>
        <label className="start-options__form-label">
          Name:
          <input
            className="start-options__input start-options__input--name"
            type="text"
            name="name"
          />
        </label>
        <label className="start-options__form-label start-options__form-label--language">
          What language would you like to learn?
          {languages.map((language) => {
            return (
              <label key={language.id}>
                {language.name}:
                <input
                  className="start-options__input"
                  type="radio"
                  name={language.name.toLowerCase()}
                  value={language.name}
                  onChange={(e) => handleLanguageSelection(e, language.id)}
                  checked={language.id === selectedLanguage}
                />
              </label>
            );
          })}
        </label>
        <label className=" start-options__form-label start-options__form-label--topic">
          Pick a topic:
          {!isTopicsLoading && (
            <div className="start-options__btn-wrapper">
              {topics.map((topic) => {
                return (
                  <button
                    key={topic.id}
                    className="start-options__btn"
                    onClick={() => setSelectedTopic(topic.id)}
                  >
                    {topic.name}
                  </button>
                );
              })}
            </div>
          )}
        </label>
        <p className="start-options__error">{errorMsg}</p>
      </form>
    </section>
  );
}
