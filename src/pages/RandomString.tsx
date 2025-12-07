import { useState, useCallback, useEffect } from "react";
import { ArrowLeft, KeyRoundIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RandomStringGenerator = () => {
  const navigate = useNavigate();

  const [length, setLength] = useState<number>(8);
  const [randomString, setRandomString] = useState<string>("");

  const generateRandomString = useCallback(() => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    setRandomString(result);
  }, [length]);

  useEffect(() => {
    generateRandomString();
  }, [generateRandomString]);

  return (
    <div className="min-h-screen bg-[#0a0f1c] flex flex-col items-center pt-10 px-6">
      {/* 🔹 Header outside the container */}
      <div className="w-full max-w-md mb-4 flex items-center flex-row gap-3">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-white/80 hover:text-white transition cursor-pointer p-2 rounded-lg bg-blue-500/10 border border-blue-400/20"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>

        <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-400/20">
          <KeyRoundIcon className="h-6 w-6 text-blue-400" />
        </div>

        <h1 className="text-2xl font-semibold text-white">
          Random String Generator
        </h1>
      </div>

      {/* 🔹 Main Glass Card */}
      <div className="w-full max-w-md bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xl shadow-lg text-center space-y-6">
        {/* Slider */}
        <div className="space-y-2">
          <label className="block text-white/70 font-medium">
            String Length: <span className="text-white">{length}</span>
          </label>
          <input
            type="range"
            min="4"
            max="32"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-blue-500 cursor-pointer"
          />
        </div>

        {/* Random String Display */}
        <div className="bg-white/10 border border-white/20 rounded-xl p-4 text-white font-mono text-lg break-all min-h-[60px]">
          {randomString}
        </div>

        {/* Generate Button */}
        <button
          onClick={generateRandomString}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition"
        >
          Generate New
        </button>
      </div>
    </div>
  );
};

export default RandomStringGenerator;
