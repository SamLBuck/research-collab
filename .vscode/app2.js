function convertToBinary(x) {
  let bin = 0;
  let rem, i = 1, step = 1;
  let outputText = "";

  while (x !== 0) {
    rem = x % 2;
    outputText += `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x / 2)}`;
    x = parseInt(x / 2);
    bin = bin + rem * i;
    i = i * 10;
  }

  outputText += `Binary: ${bin}`;
  document.getElementById("output") = outputText;
}

// Prompt user for input
let userInput = prompt("Enter a number to convert to binary:");
let number = parseInt(userInput);

if (!isNaN(number)) {
  convertToBinary(number);
} else {
  document.getElementById("output") = "Invalid input. Please reload and enter a valid number.";
}
