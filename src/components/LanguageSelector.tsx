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


const LanguageSelector = ({ label, value, onChange }: LanguageSelectorProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="flex flex-col w-1/2" ref={ref}>
      {/* Toggle Button */}
       <label className="text-sm text-gray-600 m-1 w-max mx-auto">{label}</label>
      <div className="relative w-max mx-auto ">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="sm:w-auto md:w-[180px] px-5 py-2.5 rounded-sm border-2 border-blue-200 cursor-pointer text-gray-700 text-sm font-medium outline-none bg-white text-spacing-wider hover:border-blue-400 flex justify-between items-center"
        >
          {languages[value]}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 fill-blue-400 inline ml-2"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
              clipRule="evenodd"
              data-original="#000000"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {open && (
          <ul className="absolute block rounded-sm shadow-lg bg-white py-2 z-1000 min-w-full w-max divide-y divide-gray-200 max-h-64 overflow-auto">
            {Object.entries(languages).map(([code, name]) => (
              <li
                key={code}
                onClick={() => {
                  onChange(code);
                  setOpen(false);
                }}
                className="px-5 py-2.5 hover:bg-blue-50 text-slate-600 text-sm font-medium cursor-pointer"
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
