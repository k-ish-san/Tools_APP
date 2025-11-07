import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-green-100 px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">
        🧠 Mini React Utilities
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl w-full">
        {/* Text Translator Card */}
        <div
          onClick={() => handleCardClick("/translator")}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer hover:-translate-y-1"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            🈹 Text Translator
          </h2>
          <p className="text-gray-600 mb-4">
            Instantly translate text between languages using the RapidAPI
            Google Translator API.
          </p>
          <span className="inline-block bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700 transition">
            Open →
          </span>
        </div>

        {/* Random String Generator Card */}
        <div
          onClick={() => handleCardClick("/random-string")}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer hover:-translate-y-1"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            🔢 Random String Generator
          </h2>
          <p className="text-gray-600 mb-4">
            Generate secure random strings of variable length using modern React
            hooks.
          </p>
          <span className="inline-block bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700 transition">
            Open →
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
