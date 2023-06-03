
// variables

const myModal = new bootstrap.Modal('#modal');

const gameSection = document.querySelector(".game-play");
const resultSection = document.querySelector(".result");

//main game variables
const questionElement = document.getElementById('questions');
const allAnswers = document.getElementById('answer-buttons');
const nextButton = document.querySelector('.next-btn');

let currentQuestionIndex = 0;


function startQuiz(){
	currentQuestionIndex = 0;
	score = 0;
	nextButton.innerHTML = "Next";
	showQuestion();
}

function showQuestion(){
	let currentQuestion = questions[currentQuestionIndex];
	let questionNo = currentQuestionIndex + 1;
	questionElement.innerHTML = questionNo + "." + currentQuestion.question;

	currentQuestion.answers.forEach(answer => {
		const button = document.createElement("button");
		button.innerHTML = answer.text;
		button.classList.add("btn");
		answerButton.appendChild(button);
	})
}

startQuiz();