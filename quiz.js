const questions = [
    { question: "Who is the first president of India?", answers: ["Dr.Ambedkar", "Dr.Rajendra prasad", "Sarvepalli Radhakrishnan", "K R Narayanan"], correct: "Dr.Rajendra prasad" },
    { question: "Who is the CEO of Tesla?", answers: ["Bill Gates", "Elon Musk", "Jeff Bezos", "Mark Zuckerberg"], correct: "Elon Musk" },
    { question: "What is the capital of India?", answers: ["Kerala", "Mumbai", "New Delhi", "Tamilnadu"], correct: "New Delhi" },
    { question: "What is the name of the first cryptocurrency?", answers: ["Bitcoin (BTC)","Ethereum (ETH)","Tether (USDT)","Binance Coin (BNB)"], correct: "Bitcoin (BTC)" }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;

const questionElement = document.getElementById('question');
const answerFormElement = document.getElementById('answer-form');
const nextButton = document.getElementById('next-button');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.innerText = '';
    nextButton.innerText = 'Next';
    showQuestion();
}

function showQuestion() {
    clearInterval(timer);
    timerElement.innerText = '';
    answerFormElement.innerHTML = '';

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {
        const radioWrapper = document.createElement('div');
        const radioButton = document.createElement('input');
        radioButton.type = 'radio';
        radioButton.id = `answer${index}`;
        radioButton.name = 'answer';
        radioButton.value = answer;

        const label = document.createElement('label');
        label.htmlFor = `answer${index}`;
        label.innerText = answer;

        radioWrapper.appendChild(radioButton);
        radioWrapper.appendChild(label);
        answerFormElement.appendChild(radioWrapper);
    });

    startTimer();
}

function checkAnswer() {
    const selAns = document.querySelector('input[name="answer"]:checked');
    if (selAns && selAns.value === questions[currentQuestionIndex].correct) {
        score++;
    }
}

function Score() {
    clearInterval(timer);
    questionElement.innerText = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerText = 'Restart';
    //  nextButton.innerHTML=startQuiz();
    answerFormElement.innerHTML = '';
    timerElement.innerText = '';
    // nextButton.removeEventListener('click', handleNextButton); // 
    nextButton.addEventListener('click', startQuiz); // 
}


function Next() {
    checkAnswer();

    if (currentQuestionIndex + 1 < questions.length) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        Score();
    }
}

function startTimer() {
    let timeLeft = 10;
    timerElement.innerText = `Time left: ${timeLeft}s`;
    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerText = `Time left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            Next(); 
        }
    }, 1000);
}
// nextButton.removeEventListener('click', handleNextButton); 


nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        Next();
    } else {
        startQuiz();
    }
});

startQuiz();
