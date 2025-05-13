function checkGPA(x) {
  outputText = ""
  if(x > 3.0){
    outputText = "good job, keep it up, you might get a job!"
  }
  else{
    outputText = "sorry buddy"
  }
  document.getElementById("output").innerHTML = outputText
}

// Prompt user for input
let userInput = prompt("enter your gpa for advice:");
let number = parseFloat(userInput);

if (!isNaN(number)) {
  checkGPA(number);
} else {
  document.getElementById("output").innerHTML = "Invalid input. Please reload and enter a valid number.";
}
