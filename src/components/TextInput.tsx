import React from "react";

interface TextInputProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const TextInput: React.FC<TextInputProps> = ({ text, setText }) => {
  return (
    <textarea
      className="w-full max-w-lg p-3 border rounded mb-4 shadow-sm focus:ring focus:ring-blue-300"
      rows={4}
      placeholder="Enter text to translate..."
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export default TextInput;
