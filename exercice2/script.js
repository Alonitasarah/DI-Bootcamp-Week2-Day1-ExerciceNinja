let number = prompt("Entrez vos nombres séparer d'une vircule");

let Array =  Number.split(",");

let other = (a, b) => parseInt(a) + parseInt(b);
console.log(`La somme de vos différents nombre est ${Array.reduce(other)}`);
