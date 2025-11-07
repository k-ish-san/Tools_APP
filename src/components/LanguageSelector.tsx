interface LanguageSelectorProps {
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
  tl : "Tagalog",    
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
  return (
    <div className="flex flex-col w-1/2">
      <label className="text-sm text-gray-600 mb-1">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="p-2 border rounded-md focus:ring-2 focus:ring-green-400"
      >
        {Object.entries(languages).map(([code, name]) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
