import { useEffect, useState } from "react";
import Message from "../../components/Message/Message";
import "./ChatBotPage.scss";
import { getSingleLanguage } from "../../utils/api";
export default function ChatBotPage({
  phrases,
  selectedLanguage,
  selectedTopic,
  nameValue,
}) {
  const [currentLanguage, setCurrentLanguage] = useState(null);

  const getCurrentLanguage = async (languageId) => {
    const result = await getSingleLanguage(languageId);
    setCurrentLanguage(result);
  };

  useEffect(() => {
    getCurrentLanguage(selectedLanguage);
  }, [selectedLanguage]);

  if (!phrases || !currentLanguage) {
    return;
  }

  return (
    <section className="chatbot">
      <h1 className="chatbot__title">Learning {currentLanguage.name}!</h1>
      <div className="chatbot__window">
        {selectedLanguage === "German" ? (
          <Message greeting="Hallo" nameValue={nameValue} />
        ) : null}
        {selectedLanguage === "French" ? (
          <Message greeting="bonjour" nameValue={nameValue} />
        ) : null}
        {selectedLanguage === "Spanish" ? (
          <Message greeting="¡Hola" nameValue={nameValue} />
        ) : null}
        {phrases.map((phrase) => {
          return <Message key={phrase.id} phrase={phrase} />;
        })}
      </div>
      {/* <div className="chatbot__window-footer">
        <button className="chatbot__btn">Get new phrase</button>
      </div> */}
    </section>
  );
}
