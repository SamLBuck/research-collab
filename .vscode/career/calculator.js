function checkGPA(x) {
  outputText = ""
  if(x > 3.0){
    outputText = x + ": good job, keep it up, you might get a job!"
  }
  else{
    outputText = x + ": sorry buddy"
  }
  document.getElementById("output").innerHTML = outputText
}
function increment(){

  number = document.getElementById("gpa").value;
  let i = parseFloat(number)
  console.log(i)
  i =  i + .1
  let result = i.toFixed(1)
  console.log(result)
  checkGPA(result)
  document.getElementById("gpa").value = result;
}
window.onload = function () {
  document.getElementById("customPrompt").style.display = "block";
};
function pageLogic(){
  
}

function submitInputs() {
  const first = document.getElementById("input1").value;
  const last = document.getElementById("input2").value;
  const gpa = document.getElementById("gpa").value;

  if (first && last) {
    document.getElementById("name").innerText = "Hey, " + first + " " + last;
 
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

  document.body.style.backgroundColor = "lightblue"
}

