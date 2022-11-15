// Palindroma

// Chiedo all'utente un input
let userInput = prompt(' Inserisci una parola ');
// Vado a richiamare la funzione
let value = verifyPalindrome(userInput);

function verifyPalindrome() {
  // Converto la stringa in un array 
  const arrayValue = userInput.split('');
  console.log(arrayValue)

  // Converto il contenuto dell'array al contrario
  const reverseArrayValue = arrayValue.reverse();
  console.log(reverseArrayValue)

  // Vado a raggruppare il valore dell'array nella stringa
  const reverseUserInput = reverseArrayValue.join('');
  console.log(reverseUserInput)

  if (userInput === reverseUserInput) {
    alert(" E' una parola palindroma ");
  }
  else {
    alert(" Non e' una parola palindroma ");
  }
}