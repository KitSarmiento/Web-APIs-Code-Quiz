var questionsArr = [
  {
    question: "Commonly used data types do NOT include:",
    choice1: "a. Strings",
    choice2: "b. Booleans",
    choice3: "c. Alerts",
    choice4: "d. Numbers",
    answer: "c",
  },

  {
    question: "The condition in an if/else statement is enclosed in:",
    choice1: "a. Quotes",
    choice2: "b.Parentheses",
    choice3: "c. Curly Brackets",
    choice4: "d. Square Brackets",
    answer: "b",
  },

  {
    question: "Arrays in JavaScript can be used to store:",
    choice1: "a. Numbers and Strings",
    choice2: "b. Other Arrays",
    choice3: "c. Booleans",
    choice4: "d. All of the Above",
    answer: "d",
  },

  {
    question:
      "String values must be enclosed within __________ when being assigned to variables:",
    choice1: "a. Commas",
    choice2: "b. Curly Brackets",
    choice3: "c. Quotes",
    choice4: "d. Parentheses",
    answer: "c",
  },

  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choice1: "a. JavaScript",
    choice2: "b. Terminal Bash",
    choice3: "c. for loops",
    choice4: "d. console.log",
    answer: "d",
  },
];

var questionEl = document.getElementById("questionEl");
var submitBtn = document.getElementById("submitBtn");
var finalScore = document.getElementById("finalScore");
var submitBtn = document.getElementById("submitBtn");
var finalScore = document.getElementById("finalScore");
var initial = document.getElementById("initial");
var startBtn = document.getElementById("startBtn");
var submitBtn = document.getElementById("submitBtn");
var initial = document.getElementById("initial");
var shuffledQuestions;
var currentQuestionIndex = 0;

//Main page - hide other div
submitPage.style.display = "none";
highscorePage.style.display = "none";
questionaire.style.display = "none";

//startButton
startBtn.addEventListener("click", startGame);
console.log("Start Game");

//timer
var timeLeft = 75;
var timer = document.getElementById("timer");

function setTime() {
  var timerInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = "Time: " + timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      finalScore.textContent = "Your score is: " + timeLeft;

      timer.textContent = "Your time is up!";
    }
  }, 1000);
}

var question = document.getElementById("questionEl");
var correctAnswer = document.getElementById("result");
var incorrectAnswer = document.getElementById("result");
var choices1 = document.getElementById("choicesBtn1");
var choices2 = document.getElementById("choicesBtn2");
var choices3 = document.getElementById("choicesBtn3");
var choices4 = document.getElementById("choicesBtn4");
var questionId = 0;

function setQuestion() {
  var questionaire = questionsArr[questionId];
  question.textContent = questionaire.question;
  choices1.textContent = questionaire.choice1;
  choices2.textContent = questionaire.choice2;
  choices3.textContent = questionaire.choice3;
  choices4.textContent = questionaire.choice4;
}

// start the quiz function

function startGame() {
  intro.style.display = "none";
  questionaire.style.display = "block";
  questionId = 0;
  shuffledQuestions = questionsArr.sort(() => Math.random() - 0.5);
  setTime();
  setQuestion();
}

var choicesButton = document.getElementsByClassName("choicesButton");
//Event listener

for (var i = 0; choicesButton.length; i++) {
  choicesButton[i].addEventListener("click", function userAnswer(event) {
    event.stopPropagation();
    if (event.currentTarget.innertext === questionsArr[questionId].answer) {
      correctAnswer.textContent = "Correct Answer!";
      console.log("Correct Answer!");
    } else {
      incorrectAnswer.textContent = "Wrong Answer!";
      incorrectAnswer.setAttribute.style.display = red;
      timeLeft = timeLeft - 10;
      console.log("incorrect Answer!");
    }
    console.log(questionId);
    questionId++;

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      setQuestion();
    }
  });
}

//next Question

var nextQuestion = function () {
  resetAnswer();
  displayQuestion(shuffledQuestions[currentQuestionIndex]);
};
