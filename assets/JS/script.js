
// variables

const myModal = new bootstrap.Modal('#modal');
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

// define questionList 
let questionList = null;

document.addEventListener("DOMContentLoaded", function () {
	getJsonThenLoad();
});

const getJsonThenLoad = function () {
	fetch("./assets/js/quiz.js")
		.then(file => {
			return file.json();
		})
		.then(json => {
			questionList = json;
		})
		.then(() => buildQuiz());
};

function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);



