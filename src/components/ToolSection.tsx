
import { KeyRoundIcon, LanguagesIcon, ChevronsRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ToolSection() {
  const navigate = useNavigate();

  const handleCardClick = (path: string) => {
    navigate(path);
  };
  return (
    <div
      id="tools"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-linear-to-b from-[#000000] to-[#101319] text-center"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl w-full">
        {/* Text Translator Card */}
        <div
          onClick={() => handleCardClick("/translator")}
          className="p-6 rounded-2xl bg-white/5 border border-white/10 
                 backdrop-blur-lg transition duration-300 cursor-pointer
                 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_25px_rgba(255,255,255,0.05)]"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-400/20">
              <LanguagesIcon className="h-6 w-6 text-blue-400" />
            </div>
            <h2 className="text-xl font-semibold text-white">
              Text Translator
            </h2>
          </div>

          <p className="text-white/60 mb-5 text-sm leading-relaxed">
            Instantly translate text between languages using the RapidAPI Google
            Translator API.
          </p>

          <button className="inline-flex items-center text-sm text-green-300 font-medium">
            Open <ChevronsRightIcon className="ml-1 h-5 w-5" />
          </button>
        </div>

        {/* Random String Generator Card */}
        <div
          onClick={() => handleCardClick("/random-string")}
          className="p-6 rounded-2xl bg-white/5 border border-white/10 
                 backdrop-blur-lg transition duration-300 cursor-pointer
                 hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_25px_rgba(255,255,255,0.05)]"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-400/20">
              <KeyRoundIcon className="h-6 w-6 text-blue-400" />
            </div>
            <h2 className="text-xl font-semibold text-white">
              Random String Generator
            </h2>
          </div>

          <p className="text-white/60 mb-5 text-sm leading-relaxed">
            Generate secure random strings of variable length using modern React
            hooks.
          </p>

          <button className="inline-flex items-center text-sm text-green-300 font-medium">
            Open <ChevronsRightIcon className="ml-1 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
