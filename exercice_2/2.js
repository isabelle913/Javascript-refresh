/*
	Écrivez une fonction qui prend en entrée un nombre entier positif et retourne sa factorielle. Utilisez une approche récursive pour résoudre cet exercice.

	n! = n × (n-1) × (n-2) × ... × 3 × 2 × 1

	Par convention, on considère que le factoriel de 0 (0!) est égal à 1.

	Voici quelques exemples de factoriels :

	1! = 1
	2! = 2 × 1 = 2
	3! = 3 × 2 × 1 = 6
	4! = 4 × 3 × 2 × 1 = 24
	5! = 5 × 4 × 3 × 2 × 1 = 120
*/

const factorial = (n) => {
  if (n < 0) {
    return "Mathieu donne moi un nombre positif STP";
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    let acc = n;
    for (let i = 1; i < n; i++) {
      acc = acc * (n - i);
    }
    return acc;
  }
};

factorial(5);
