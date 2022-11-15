// Pari e Dispari

const pariDispari = prompt("Scegli se pari o dispari");
console.log(pariDispari);

const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));

console.log(userNumber);

let computerNumber = randomComputerNumber(5);
console.log(computerNumber);

let sum = sumResult();
console.log(sum);

let winningResult = summed();
console.log(winningResult);


function randomComputerNumber(max) {
  let createdNumber = Math.floor(Math.random() * max) + 1;

  return createdNumber;
}



function sumResult() {
  let result = (computerNumber + userNumber);

  return result;
}


function summed() {

  let finalResult = "";

  if (sum % 2 === 0) {
    finalResult = "pari";
  } else {
    finalResult = "dispari";
  }
  return finalResult;
}


if (pariDispari === "pari" && winningResult === "pari") {
  console.log("Vince l'user")
} else if (pariDispari === "dispari" && winningResult === "dispari") {
  console.log("Vince l'user")
} else {
  console.log("Vince il computer")
}

