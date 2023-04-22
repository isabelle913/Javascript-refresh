/*
	Écrivez une fonction qui prend en entrée un tableau de nombres et retourne un nouveau tableau contenant uniquement les nombres pairs.
*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const filterEvenNumbers = (numbersArray) => {
  return (newArray = numbersArray.filter((nb) => nb % 2 === 0));
};

console.log(filterEvenNumbers(numbers));
