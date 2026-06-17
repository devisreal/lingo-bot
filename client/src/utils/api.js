import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const getLanguages = async () => {
  try {
    const { data } = await axios.get(`${BACKEND_URL}/languages`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getSingleLanguage = async (languageId) => {
  try {
    const { data } = await axios.get(`${BACKEND_URL}/languages/${languageId}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getTopics = async () => {
  try {
    const { data } = await axios.get(`${BACKEND_URL}/settings`);
    return data;
  } catch (error) {
    console.error(error);
  }
};
const getAllPhrases = async () => {
  try {
    const { data } = await axios.get(`${BACKEND_URL}/phrases`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getPhraseByLanguage = async (languageId) => {
  try {
    const { data } = await axios.get(
      `${BACKEND_URL}/phrases?languageId=${languageId}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getPhraseByTopic = async (settingsId) => {
  try {
    const { data } = await axios.get(
      `${BACKEND_URL}/phrases?languageId=${settingsId}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
const getPhraseByLanguageAndSettings = async (languageId, settingsId) => {
  try {
    const { data } = await axios.get(
      `${BACKEND_URL}/phrases?languageId=${languageId}&settingsId=${settingsId}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export {
  getLanguages,
  getSingleLanguage,
  getTopics,
  getAllPhrases,
  getPhraseByLanguage,
  getPhraseByTopic,
  getPhraseByLanguageAndSettings,
};
