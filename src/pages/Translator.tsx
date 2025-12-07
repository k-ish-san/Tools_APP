import { useState } from "react";
import axios from "axios";
import { ArrowLeft, LanguagesIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LanguageSelector from "../components/LanguageSelector";

const Translator = () => {
  const navigate = useNavigate();

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
      const response = await axios.request({
        method: "POST",
        url: "https://free-google-translator.p.rapidapi.com/external-api/free-google-translator",
        params: { from: sourceLang, to: targetLang, query: inputText },
        headers: {
          "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
          "x-rapidapi-host": "free-google-translator.p.rapidapi.com",
        },
        data: { translate: inputText },
      });

      const translated =
        response.data?.translation ||
        response.data?.data?.translation ||
        "Unexpected API response";

      setTranslatedText(translated);
    } catch {
      setError("Error translating text.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1c] px-6 py-10">
      {/* 🔹 TOP BAR */}
      <div className="max-w-2xl mx-auto flex items-center gap-4 mb-6">
        <button
          onClick={() => navigate("/")}
          className="p-2 rounded-lg bg-blue-500/10 border border-blue-400/20 
                     text-white/80 hover:text-white hover:bg-blue-500/20 transition cursor-pointer"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>

        <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-400/20">
          <LanguagesIcon className="h-6 w-6 text-blue-400" />
        </div>
        <h1 className="text-2xl font-semibold text-white flex-1 ">
          Text Translator
        </h1>
      </div>

      {/* 🔹 MAIN CARD */}
      <div
        className="max-w-2xl mx-auto bg-white/5 border border-white/10 
                      p-6 rounded-2xl backdrop-blur-xl shadow-lg"
      >
        {/* Input Text */}
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white 
                     focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter text to translate..."
          rows={4}
        />

        {/* Output Text */}
        <textarea
          value={translatedText}
          readOnly
          className="w-full p-3 mt-4 rounded-xl bg-white/10 border border-white/20 text-white/80 
                     focus:outline-none"
          placeholder="Translated text will appear here..."
          rows={4}
        />

        {/* Language selectors */}
        <div className="flex gap-4 mt-4">
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

        {/* Translate Button */}
        <button
          onClick={handleTranslate}
          disabled={loading}
          className="w-full mt-6 bg-linear-to-br from-blue-400 to-blue-600 hover:bg-linear-to-br hover:from-blue-800 hover:to-blue-900 text-white font-semibold py-3 rounded-xl transition disabled:opacity-70"
        >
          {loading ? "Translating..." : "Translate"}
        </button>

        {/* Error */}
        {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default Translator;
