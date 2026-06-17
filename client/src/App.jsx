import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import ChatBotPage from "./pages/ChatBotPage/ChatBotPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import {
  getLanguages,
  getPhraseByLanguageAndSettings,
  getTopics,
} from "./utils/api";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [nameValue, setNameValue] = useState("");
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [languages, setLanguages] = useState(null);
  const [topics, setTopics] = useState(null);
  const [phrases, setPhrases] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isTopicsLoading, setIsTopicsLoading] = useState(true);

  const getLanguagesList = async () => {
    const results = await getLanguages();
    setLanguages(results);
    setIsLoading(false);
  };

  const getTopicsList = async () => {
    const results = await getTopics();
    setTopics(results);
    setIsTopicsLoading(false);
  };

  const getPhrases = async (languageId, settingsId) => {
    const results = await getPhraseByLanguageAndSettings(
      languageId,
      settingsId
    );
    if (results.length === 0) {
      console.log('No Phrases')
    }
    setPhrases(results);
    setIsLoading(false);
  };

  useEffect(() => {
    getLanguagesList();
    getTopicsList();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                isLoading={isLoading}
                isTopicsLoading={isTopicsLoading}
                languages={languages}
                topics={topics}
                phrases={phrases}
                getPhrases={getPhrases}
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={setSelectedLanguage}
                setNameValue={setNameValue}
                selectedTopic={selectedTopic}
                setSelectedTopic={setSelectedTopic}
              />
            }
          />
          <Route
            path="/chatbot"
            element={
              <ChatBotPage
                phrases={phrases}
                nameValue={nameValue}
                selectedTopic={selectedTopic}
                selectedLanguage={selectedLanguage}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
