function GetRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function ChangeBackgroundColor(element, color) {
  element.style.backgroundColor = color;
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
let currRightAnswer;
function DisplayMultiplication() {
  let num1 = GetRandomNumber(1, 9);
  let num2 = GetRandomNumber(1, 9);
  let displayedAnswer = (document.getElementById("mult").innerHTML =
    num1 + "*" + num2);
  currRightAnswer = num1 * num2;
}
DisplayMultiplication();

//Display AnswersVariants
let answers = document.getElementsByClassName("answer");

function DisplayAnswers() {
  let answersToArray = Array.prototype.slice.call(answers, 0);
  let randomIndex = GetRandomNumber(0, answers.length - 1);

  for (let i = 0; i < answersToArray.length; i++) {
    //Need to make not repeat the numbers
    if (i === randomIndex) {
      answersToArray[i].innerHTML = currRightAnswer;
    } else {
      if (currRightAnswer > 5) {
        answersToArray[i].innerHTML = GetRandomNumber(
          currRightAnswer - 5,
          currRightAnswer + 5
        );
      } else {
        answersToArray[i].innerHTML = GetRandomNumber(1, currRightAnswer + 5);
      }
    }
  }
}
DisplayAnswers();

//Do GameLogic
for (let i = 0; i < answers.length; i++) {
  answers[i].addEventListener("click", DoGameLogic);
}
let choosenAnswer;
function DoGameLogic(e) {
  let potentialAnswer = e.target;
  choosenAnswer = potentialAnswer;
  if (parseInt(potentialAnswer.innerHTML) === currRightAnswer) {
    ChangeBackgroundColor(potentialAnswer, "green");
    AddPoints();
    setTimeout(LoadNextLvl, 500);
  } else {
    ChangeBackgroundColor(potentialAnswer, "red");
    MinusPoints();
    setTimeout(TryAgain, 250);
  }
  e.preventDefault();
}

function LoadNextLvl() {
  choosenAnswer.style.backgroundColor = "";
  DisplayMultiplication();
  DisplayAnswers();
}

function TryAgain() {
  choosenAnswer.style.backgroundColor = "";
}

//Regulate Points
let countPoints = 0;
let points = document.getElementById("value3");

function AddPoints() {
  countPoints += 100;
  points.innerHTML = countPoints;
}

function MinusPoints() {
  if (countPoints >= 100) {
    countPoints -= 100;
    points.innerHTML = countPoints;
  }
}
