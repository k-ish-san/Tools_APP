import { useState, useCallback, useEffect } from "react";

const RandomStringGenerator = () => {
  const [length, setLength] = useState<number>(8);
  const [randomString, setRandomString] = useState<string>("");

  // Function to generate random string
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

  // Generate once when component mounts
  useEffect(() => {
    generateRandomString();
  }, [generateRandomString]);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md text-center space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">
        🔢 Random String Generator
      </h1>

      <div className="space-y-2">
        <label className="block text-gray-600 font-medium">
          String Length: {length}
        </label>
        <input
          type="range"
          min="4"
          max="32"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full cursor-pointer accent-green-600"
        />
      </div>

      <div className="bg-gray-100 rounded-md p-3 text-lg font-mono break-all">
        {randomString}
      </div>

      <button
        onClick={generateRandomString}
        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition"
      >
        Generate New
      </button>
    </div>
  );
};

export default RandomStringGenerator;
