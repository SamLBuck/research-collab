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
window.onload = function () {
  document.getElementById("customPrompt").style.display = "block";
};

function submitInputs() {
  const first = document.getElementById("input1").value;
  const last = document.getElementById("input2").value;
  const gpa = document.getElementById("gpa").value;

  if (first && last && gpa) {
    document.getElementById("name").innerText = "hey " + first + " " + last;
 
    let number = parseFloat(gpa);

    if (!isNaN(number)) {
      checkGPA(number);
    } else {
      document.getElementById("output").innerText = "Invalid input. Please reload and enter a valid number.";
    }
    document.getElementById("modalOverlay").style.display = "none";
  } else {
    alert("Please enter both first and last name.");
  }
}
