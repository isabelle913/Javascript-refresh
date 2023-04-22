/*
	Écrivez une fonction qui prend en entrée une chaîne de caractères et retourne un objet avec la fréquence de chaque caractère. Ignorez les espaces, les caractères spéciaux et la casse (majuscules / minuscules).
*/
const str = "Hello world 1 2 3!";

const countCharacters = (string) => {
  const newString = string.replace(/[^a-zA-Z0-9_]/g, "").toLowerCase();
  const responseObj = {};

  for (let i = 0; i < newString.length; i++) {
    // console.log(newString[i]);
    // console.log(Object.keys(responseObj).includes(newString[i]));
    if (Object.keys(responseObj).includes(newString[i])) {
      // console.log("++");
      responseObj[newString[i]]++;
      // console.log(responseObj);
    } else {
      // console.log(newString[i]);
      responseObj[newString[i]] = 1;
      // console.log(responseObj);
    }
    // console.log("-------");
  }
  return responseObj;
};

console.log(countCharacters(str));
countCharacters(str);
