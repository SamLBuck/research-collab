function scoreGrade(){
const ans1 = document.getElementById("ans2");
const ans2 = document.getElementById("1ans1");
const ans3 = document.getElementById("2ans4");
const ans4 = document.getElementById("3ans1");

let finalScore = 0;

if (ans1.checked) {
  console.log("Answer 2 was selected.");
  finalScore += 1
}
if (ans2.checked) {
    console.log("Answer 1 was selected.");
    finalScore += 1
  }
if (ans3.checked) {
    console.log("Answer 3 was selected.");
    finalScore += 1
}
if (ans4.checked) {
    console.log("Answer TRUE was selected.");
    finalScore += 1
}
console.log(finalScore)
    scoreScreen(finalScore);
}

function scoreScreen(x){
    if(x >= 3){
    document.getElementById("result").innerText = "you scored " + x + ", which is more than three. Congrats, you win"
    }
    else{
        document.getElementById("result").innerText = "Sorry man, you scored " + x + " which is less than three. try different answers or go back and read more"
    }
}
