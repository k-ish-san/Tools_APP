import { useState } from "react";
import axios from "axios";
import LanguageSelector from "../components/LanguageSelector";

const Translator = () => {
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("hi");
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTranslate = async () => {
    if (!inputText.trim()) return;
    setLoading(true);
    setError(null);

    try {
      const options = {
        method: "POST",
        url: "https://free-google-translator.p.rapidapi.com/external-api/free-google-translator",
        params: {
          from: sourceLang,
          to: targetLang, // ✅ added
          query: inputText,
        },
        headers: {
          "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
          "x-rapidapi-host": "free-google-translator.p.rapidapi.com",
          "Content-Type": "application/json",
        },
        data: { translate: inputText },
      };

      const response = await axios.request(options);

      // The API usually returns translated text in response.data.data or response.data.translatedText
      const translated =
        response.data?.translation ||
        response.data?.data?.translation ||
        JSON.stringify(response.data, null, 2);

      setTranslatedText(translated);
    } catch (err: any) {
      console.error("Translation error:", err);
      if (err.response?.status === 429) {
        setError("Rate limit exceeded. Please wait and retry later.");
      } else {
        setError("Error translating text.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-center text-gray-800">
        Text Translator
      </h1>

      <div className="flex flex-col gap-4">
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter text to translate..."
          rows={4}
        />
        <textarea
          value={translatedText}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Translated text will appear here..."
          rows={4}
          readOnly
        />

        <div className="flex justify-between gap-4">
          <LanguageSelector
            label="From"
            value={sourceLang}
            onChange={setSourceLang}
          />
          <LanguageSelector
            label="To"
            value={targetLang}
            onChange={setTargetLang}
          />
        </div>

        <button
          onClick={handleTranslate}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition disabled:opacity-70 mt-8"
        >
          {loading ? "Translating..." : "Translate"}
        </button>

        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    </div>
  );
};

export default Translator;
