import { useState } from "react";
import "./Message.scss";

export default function Message({ greeting, nameValue, speaker = 1, phrase }) {
  const [initialTranslation, setInitialtranslation] = useState("");
  const [translated, setTranslated] = useState(false);

  const handleSwapTranslation = (english_text) => {
    if (translated) {
      setInitialtranslation("");
      setTranslated(false);
    } else {
      setInitialtranslation(english_text);
      setTranslated(true);
    }
  };
  return (
    <div className={`message ${speaker === 2 ? "message--speaker-2" : ""}`}>
      <div className="message__content">
        {" "}
        {greeting && (
          <>
            <div className="message__original-message">
              {greeting}, {nameValue}!
            </div>
            <div className="message__translated-message">
              Hello, {nameValue}
            </div>
          </>
        )}
        <div className="message__original-message">
          {phrase.translated_text}
        </div>
        <div className="message__translated-message">{initialTranslation}</div>
      </div>
      <button
        className="message__btn"
        onClick={() => handleSwapTranslation(phrase.english_text)}
      >
        {!translated ? "Translate" : "Hide"}
      </button>
    </div>
  );
}
