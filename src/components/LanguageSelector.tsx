import { useEffect, useRef, useState } from "react";


interface LanguageSelectorProps
{
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const languages: Record<string, string> = {
  af : "Afrikaans",
  sq : "Albanian",
  am : "Amharic",
  ar : "Arabic",
  hy : "Armenian",
  az : "Azerbaijani",    
  eu : "Basque",
  be : "Belarusian",    
  bn : "Bengali",    
  bs : "Bosnian",    
  bg : "Bulgarian",    
  ca : "Catalan",    
  ceb : "Cebuano",    
  ny : "Chichewa",    
  zhCN : "Chinese (Simplified)",    
  zhTW : "Chinese (Traditional)",    
  co : "Corsican",    
  hr : "Croatian",    
  cs : "Czech",    
  da : "Danish",    
  nl : "Dutch",    
  en : "English",    
  eo : "Esperanto",    
  et : "Estonian",    
  tl : "Filipino",    
  fi : "Finnish",    
  fr : "French",    
  fy : "Frisian",    
  gl : "Galician",    
  ka : "Georgian",    
  de : "German",    
  el : "Greek",    
  gu : "Gujarati",    
  ht : "Haitian Creole",    
  ha : "Hausa",    
  haw : "Hawaiian",    
  iw : "Hebrew",    
  hi : "Hindi",    
  hmn : "Hmong",    
  hu : "Hungarian",    
  is : "Icelandic",    
  ig : "Igbo",    
  id : "Indonesian",    
  ga : "Irish",    
  it : "Italian",    
  ja : "Japanese",    
  jw : "Javanese",    
  kn : "Kannada",    
  kk : "Kazakh",    
  km : "Khmer",    
  rw : "Kinyarwanda",    
  ko : "Korean",    
  ku : "Kurdish (Kurmanji)",    
  ky : "Kyrgyz",    
  lo : "Lao",    
  la : "Latin",    
  lv : "Latvian",    
  lt : "Lithuanian",    
  lb : "Luxembourgish",    
  mk : "Macedonian",    
  mg : "Malagasy",    
  ms : "Malay",    
  ml : "Malayalam",    
  mt : "Maltese",    
  mi : "Maori",    
  mr : "Marathi",    
  mn : "Mongolian",    
  my : "Myanmar (Burmese)",    
  ne : "Nepali",    
  no : "Norwegian",    
  ps : "Pashto",    
  fa : "Persian",    
  pl : "Polish",    
  pt : "Portuguese",    
  pa : "Punjabi",    
  ro : "Romanian",    
  ru : "Russian",    
  sm : "Samoan",    
  gd : "Scots Gaelic",    
  sr : "Serbian",    
  st : "Sesotho",    
  sn : "Shona",    
  sd : "Sindhi",    
  si : "Sinhala",    
  sk : "Slovak",    
  sl : "Slovenian",    
  so : "Somali",    
  es : "Spanish",    
  su : "Sundanese",    
  sw : "Swahili",    
  sv : "Swedish",    
  
  tg : "Tajik",    
  ta : "Tamil",    
  te : "Telugu",    
  th : "Thai",    
  tr : "Turkish",    
  uk : "Ukrainian",    
  ur : "Urdu",    
  uz : "Uzbek",    
  vi : "Vietnamese",    
  cy : "Welsh",    
  xh : "Xhosa",    
  yi : "Yiddish",    
  yo : "Yoruba",    
  zu : "Zulu",    
};  


const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  label,
  value,
  onChange,

}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // keyboard: close on escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div ref={ref} className="flex flex-col w-full sm:w-1/2">
      <label className="text-sm text-white/70 mb-1 select-none">{label}</label>

      <div className="relative">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md
                     text-white text-sm font-medium flex items-center justify-between gap-3
                     hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <span className="truncate">{languages[value] ?? value}</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-4 h-4 transform transition-transform ${open ? "rotate-180" : "rotate-0"}`}
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path className="fill-white/70" d="M12 15.5 5 8.5h14l-7 7z" />
          </svg>
        </button>

        {open && (
          <ul
            role="listbox"
            tabIndex={-1}
            className="absolute left-0 right-0 mt-2 bg-black/90 rounded-xl
                       shadow-xl border border-white/10 max-h-56 overflow-y-auto z-50"
          >
            {Object.entries(languages).map(([code, name]) => (
              <li
                key={code}
                role="option"
                aria-selected={code === value}
                onClick={() => {
                  onChange(code);
                  setOpen(false);
                }}
                className={`px-4 py-2 text-sm cursor-pointer truncate ${
                  code === value ? "bg-white/20 text-white" : "text-white/80 hover:bg-white/20"
                }`}
              >
                {name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;