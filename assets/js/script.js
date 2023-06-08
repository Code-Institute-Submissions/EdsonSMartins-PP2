import {questions} from './quiz.js';

// DOM elements
let usernameArea = document.getElementsByClassName("username-section");
let quizArea = document.getElementsByClassName("game-play");
let resultsArea = document.getElementsByClassName("results");
let quizQuestion = document.getElementById("question");
let answerButtons = document.getElementById('answer-buttons');
let currentQuestionIndex = 0;
let userScore = 0;
let score = document.getElementById("user-score");

// function to open quiz area
function startQuiz() {
    usernameArea[0].classList.add("hide");
    quizArea[0].classList.remove("hide");
    currentQuestionIndex = 0;
    showQuiz();
    userScore = 0;
}

let startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startQuiz)

// function to show quiz questions
function showQuiz() {
    // answer buttons were repeating so the reset function was added
    resetAnswerButtons();
    // displays question number
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    quizQuestion.innerHTML = questionNumber + " / 16 - " + currentQuestion.question;

    currentQuestion.options.forEach(options => {
        //this is to create the answer buttons and include the values
        let button = document.createElement("button");
        button.innerHTML = options.text;
       button.classList.add("option");
       answerButtons.appendChild(button);
       button.addEventListener("click", checkAnswer);
       if (options.correct) {
           button.dataset.correct = options.correct;
       };
    });
}

//This function removes the old blank buttons and replaces them with above 
function resetAnswerButtons() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// checks the answers value, adds class to correct and incorrect values
// changes colour of answers to indicate correct/incorrect
function checkAnswer(e) {
    let clickedButton = e.target;
    let correctOption = clickedButton.dataset.correct === "true";
    if (correctOption) {
        clickedButton.classList.add("correct-option");
        incrementScore();
    } else {
        clickedButton.classList.add("incorrect-option");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct-option");
        }
        //disables answer buttons
        button.disabled = true;
        button.classList.add("disabled");
    });
}

// function to increment the score
function incrementScore() {
    userScore += 1;
    score.innerText = `${userScore}`;
}

// repeats the show quiz function if there are questions left
// if not, it returns the end page with final score
function nextQuestion() {
    currentQuestionIndex++;
    if(currentQuestionIndex < 16){
        showQuiz();
    } else{
        quizArea[0].classList.add("hide");
        resultsArea[0].classList.remove("hide");
        let endResult = document.getElementById("end-result");
        let userName = document.getElementById("username");
        let html = `
        <p>Well done ${userName.value}! You got ${userScore} out of 16 right!
        `;
        endResult.innerHTML = html;
    }
}

// moves on to the next question
let nextButton = document.getElementById("next");
nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        nextQuestion();
    } else {
        startQuiz();
    }
});

// returns user to username page
let rstButton = document.getElementById("rstbtn");
rstButton.addEventListener("click", playAgain)

function playAgain() {
    usernameArea[0].classList.remove("hide");
    quizArea[0].classList.add("hide");
    resultsArea[0].classList.add("hide");
    score.innerHTML = 0;
}

//   this function closes the navbar menu when a link is clicked 
const navLinks = document.querySelectorAll('.nav-link')
const menuToggle = document.getElementById('navbarNavAltMarkup')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})