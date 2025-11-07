interface TranslationResultProps {
  text: string;
}

const TranslationResult = ({ text }: TranslationResultProps) => {
  if (!text) return null;

  return (
    <div className="bg-gray-100 border border-gray-300 p-4 rounded-md text-gray-800">
      <h2 className="font-semibold mb-1">Translated Text:</h2>
      <p>{text}</p>
    </div>
  );
};

export default TranslationResult;
