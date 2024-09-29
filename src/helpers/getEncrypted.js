export function getEncrypted(text, substitutionTable) {
  const encryptedTextArray = [];

  for (let char of text) {
    // Перевірка на великі і малі літери
    const upperCaseChar = char.toUpperCase();

    if (substitutionTable[upperCaseChar]) {
      // Отримуємо список можливих символів і вибираємо випадковий
      const possibleSymbols = substitutionTable[upperCaseChar];
      const randomSymbol =
        possibleSymbols[Math.floor(Math.random() * possibleSymbols.length)];
      encryptedTextArray.push(randomSymbol);
    } else {
      // Якщо символу немає в таблиці, зберігаємо як є
      encryptedTextArray.push(char);
    }
  }

  return encryptedTextArray.join("");
}
