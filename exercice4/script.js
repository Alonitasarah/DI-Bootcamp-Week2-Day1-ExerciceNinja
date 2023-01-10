let number = prompt("Entrez un nombre SVP:");
const result = "boom"
if (number < 2) {
  console.log("boom");
} else if (number % 2 === 0 && number % 5 === 0) {
  console.log("BOOM!".toUpperCase());
} else if (number % 2 === 0) {
  console.log("boom!".toLowerCase());
} else if (number % 5 === 0) {
  console.log("BOOM");
} 
if(number> 2){
  console.log("B" + "o".repeat(number) + "m");
}