function convertToBinary(x) {
    let bin = 0;
    let rem, i = 1, step = 1;
    let outputText = "";
  
    while (x !== 0) {
      rem = x % 2;
      outputText += `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x / 2)}<br>`;
      x = parseInt(x / 2);
      bin = bin + rem * i;
      i = i * 10;
    }
  
    outputText += `Binary: ${bin}`;
  
    // Output to browser
    document.getElementById("output").innerHTML = outputText;
  }
  
  // take input
  let number = 5;
  convertToBinary(number);
  