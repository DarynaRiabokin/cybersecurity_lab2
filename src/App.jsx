import { useState } from "react";
import substitutionTable from "./assets/table.json";
import { getEncrypted } from "./helpers/getEncrypted";

function App() {
  const [inputText, setInputText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleEncrypt = () => {
    const encrypted = getEncrypted(inputText, substitutionTable);
    setEncryptedText(encrypted);
  };

  return (
    <div className="w-full min-h-dvh flex flex-col justify-center items-center p-20 gap-4">
      <h1 className="text-md">Гомофонний шифр</h1>
      <textarea
        className="border p-2"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Введіть текст"
        rows="5"
        cols="50"
      />
      <button
        className="w-full px-4 py-2 bg-black text-white text-sm max-w-[460px]"
        onClick={handleEncrypt}
      >
        Зашифрувати
      </button>
      <h2 className="text-md">Зашифрований текст:</h2>
      <textarea
        className="border p-2"
        value={encryptedText}
        readOnly
        rows="5"
        cols="50"
      />
    </div>
  );
}

export default App;
