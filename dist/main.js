function GetRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//Timer
let counter = 60;
function TimeIt() {
  if (counter > 0) {
    counter--;
    document.getElementById("value1").innerHTML = "0:" + counter;
  } else {
    clearInterval(interval);
  }
}
let interval = setInterval(TimeIt, 1000);

//Display Multiplication
//let isRightAnswer;
let currRightAnswer;
function DisplayMultiplication() {
  let num1 = GetRandomNumber(1, 9);
  let num2 = GetRandomNumber(1, 9);
  let displayedAnswer = (document.getElementById("mult").innerHTML =
    num1 + "*" + num2);
  currRightAnswer = num1 * num2;
}
DisplayMultiplication();
console.log(currRightAnswer);

//Display AnswersVariants
function DisplayAnswers() {
  let answers = Array.prototype.slice.call(
    document.getElementsByClassName("answer"),
    0
  );
  let randomIndex = GetRandomNumber(0, answers.length);
  console.log(randomIndex);
  for (let i = 0; i < answers.length; i++) {
    if (i === randomIndex) {
      answers[i].innerHTML = currRightAnswer;
    } else {
      answers[i].innerHTML = GetRandomNumber(1, 81);
    }
  }
}
DisplayAnswers();

//Click Answer
