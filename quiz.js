const questions = [
    {
        question: "How many Infinity Stones are there?",
        choices: ["3", "5", "8", "6"],
        answer: "6"
    },
    {
        question: "What is the only food that cannot go bad?",
        choices: ["Dark chocolate", "Peanut butter", "Canned tuna", "Honey"],
        answer: "Honey"
    },
    {
        question: "Which was René Magrittes first surrealist painting?",
        choices: ["Not to Be Reproduced", "Personal Values", "The Lovers", "The Lost Jockey"],
        answer: "The Lost Jockey"
    },
    {
        question: "What 90s boy band member bought Myspace in 2011?",
        choices: ["Nick Lachey", "Justin Timberlake", "Shawn Stockman", "AJ McLean"],
        answer: "Justin Timberlake"
    },
    {
        question: "What is the most visited tourist attraction in the world?",
        choices: ["Eiffel Tower", "Statue of Liberty", "Great Wall of China", "Colosseum"],
        answer: "Great Wall of China"
    },
    {
        question: "Whats the name of Hagrids pet spider?",
        choices: ["Nigini", "Crookshanks", "Aragog", "Mosag"],
        answer: "Aragog"
    },
    {
        question: "Whats the heaviest organ in the human body?",
        choices: ["Brain", "Liver", "Skin", "Heart"],
        answer: "Liver"
    },
    {
        question: "Who made the third most 3-pointers in the Playoffs in NBA history?",
        choices: ["Kevin Durant", "JJ Reddick", "Lebron James", "Kyle Korver"],
        answer: "Lebron James"
    },
    {
        question: "Which of these EU countries does not use the euro as its currency?",
        choices: ["Poland", "Denmark", "Sweden", "All of the above"],
        answer: "Denmark"
    },
    {
        question: "Which US city is the sunniest major city and sees more than 320 sunny days each year?",
        choices: ["Phoenix", "Miami", "San Francisco", "Austin"],
        answer: "Phoenix"
    },
    {
        question: "What type of food holds the world record for being the most stolen around the globe?",
        choices: ["Wagyu beef", "Cheese", "Coffee", "Chocolate"],
        answer: "Cheese"
    },
    {
        question: "What element does the chemical symbol Au stand for?",
        choices: ["Silver", "Magnesium", "Salt", "Gold"],
        answer: "Gold"
    },
    {
        question: "What is the highest-grossing Broadway show of all time?",
        choices: ["The Lion King", "Wicked", "Kinky Boots", "Hamilton"],
        answer: "Hamilton"
    },
    {
        question: "On average, how many seeds are located on the outside of a strawberry?",
        choices: ["100", "200", "400", "500"],
        answer: "200"
    },
    {
        question: "Which fast food restaurant has the largest number of retail locations in the world?",
        choices: ["Jack In The Box", "Chipotle", "Subway", "McDonalds"],
        answer: "Subway"
    },
    {
        question: "Where is recognized as the location of the hottest temperature ever recorded on Earth?",
        choices: ["Mitribah, Kuwait", "Death Valley, California", "Yuma, Arizona", "Key West, Florida"],
        answer: "Death Valley, California"
    },
    {
        question: "Which planet is the closest to Earth?",
        choices: ["Mars", "Venus", "Mercury", "Jupiter"],
        answer: "Venus"
    },
    {
        question: "What is the capital of Spain?",
        choices: ["Barcelona", "Madrid", "Seville", "Valencia"],
        answer: "Madrid"
    },
    {
        question: "What is the largest continent by land area?",
        choices: ["Africa", "South America", "Asia", "North America"],
        answer: "Asia"
    },
    {
        question: "What country is home to the tallest mountain in the world?",
        choices: ["Nepal", "China", "India", "Bhutan"],
        answer: "Nepal"
    },
    {
        question: "What is the smallest country in the world by land area?",
        choices: ["Monaco", "San Marino", "Nauru", "Vatican City"],
        answer: "Vatican City"
    },
    {
        question: "What is the largest ocean on Earth?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "What is the currency used in Japan?",
        choices: ["Yuan", "Euro", "Yen", "Dollar"],
        answer: "Yen"
    },
    {
        question: "Which city is home to the headquarters of the United Nations?",
        choices: ["Geneva", "New York City", "Vienna", "Paris"],
        answer: "New York City"
    },
    {
        question: "What is the largest desert in the world?",
        choices: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Antarctic Desert"],
        answer: "Antarctic Desert"
    },
    {
        question: "What is the most spoken language in the world?",
        choices: ["Mandarin", "English", "Spanish", "Hindi"],
        answer: "Mandarin"
    },
    {
        question: "From which country do French fries originate?",
        choices: ["Belgium", "France", "USA", "England"],
        answer: "Belgium"
    },
    {
        question: "What sport is referred to as the “sport of kings”?",
        choices: ["Bocce Ball", "Cricket", "Rugby", "Polo"],
        answer: "Polo"
    },
    {
        question: "Who was the first Disney Princess?",
        choices: ["Cinderella", "Snow White", "Aurora", "Jasmine"],
        answer: "Snow White"
    },
    {
        question: "What year was In-N-Out Burger founded?",
        choices: ["1968", "1975", "1948", "1985"],
        answer: "1948"
    },
    {
        question: "How many islands are in Hawaii?",
        choices: ["4", "7", "48", "137"],
        answer: "137"
    },
    {
        question: "What is the national alcoholic beverage of America?",
        choices: ["Rye", "Bourbon", "Whiskey", "Cognac"],
        answer: "Bourbon"
    },
    {
        question: "What is Bruno Mars real name?",
        choices: ["Peter Gene Hernandez", "Michael Nguyen-Stevenson", "Ray Aguirre", "Bruno Maritza"],
        answer: "Peter Gene Hernandez"
    },
];

const homeButtons = document.getElementById("buttons");
const startButton = document.getElementById("start");
const scoresButton = document.getElementById("scores");
const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const choice1Button = document.getElementById("choice1");
const choice2Button = document.getElementById("choice2");
const choice3Button = document.getElementById("choice3");
const choice4Button = document.getElementById("choice4");
const countdownTimer = document.getElementById("timer");
const endContainer = document.getElementById("end-container");
const scoreElement = document.getElementById("score");
const initialsInput = document.getElementById("initials");
const homeContainer = document.getElementById("home-container");
const uWrong = document.getElementById("u-wrong");
const form = endContainer.querySelector("form");
const scoresContainer = document.getElementById("scores-container");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const homeButton = document.getElementById("home");

let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let timeRemaining = 60;

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    homeButtons.style.display = "none";
    quizContainer.style.display = "flex";
    showQuestion();
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        updateScoreAndInitials();
        clearInterval(timerInterval);
    });

    const timerInterval = setInterval(() => {
        timeRemaining--;
        countdownTimer.textContent = timeRemaining;
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert("TIME's UP ...I'm soo Sorry");
            endGame();
        }
    }, 1000);
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    choice1Button.textContent =question.choices[0];
    choice2Button.textContent =question.choices[1];
    choice3Button.textContent =question.choices[2];
    choice4Button.textContent =question.choices[3];
}

function checkAnswer(event) {
    const selectedAnswer = event.target.textContent;
    const question = questions[currentQuestionIndex];
    if (selectedAnswer === question.answer) {
        alert("Correct!");
        score++
    } else {
        timeRemaining -= 10;
        uWrong.style.display = "flex";
        homeContainer.style.display = "none";
        setTimeout(() => {
            uWrong.style.display = "none";
            homeContainer.style.display = "flex";
        }, 1000);
    }
    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert ("You're done my Friend!");
        quizContainer.style.display = "none";
        currentQuestionIndex = 0;
        endGame();
    }
    
}



function endGame() {
    quizContainer.style.display = "none";
    endContainer.style.display = "block";
    scoreElement.textContent = score;
}

function updateScoreAndInitials() {
    const initials = initialsInput.value.trim();
    if (initials) {
        const highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
        highScores.push({score,initials });
        localStorage.setItem("highScores", JSON.stringify(highScores));
        initialsInput.disabled = true;
        setTimeout (() => {
            endContainer.style.display = "none";
            homeButtons.style.display = "flex";
            location.reload();
        }, 850);
    }
}

const pageSize = 10;
let currentPage = 1;

scoresButton.addEventListener("click", showScores);
function showScores() {
    homeButtons.style.display = "none";
    scoresContainer.style.display = "flex";
    var backToStart = document.getElementById("backtostart");
    backToStart.style.display = "flex";

    const highScores = JSON.parse(localStorage.getItem("highScores") || "[]");

    highScores.sort((a, b) => b.score - a.score);

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const highScoresList = document.getElementById("high-scores");
    highScoresList.innerHTML = "";
    for (let i = startIndex; i < endIndex && i < highScores.length; i++) {
        const { score, initials } = highScores[i];
        const listItem = document.createElement("li");
        listItem.innerText = `${initials}: ${score}`;
        highScoresList.appendChild(listItem);
    }

    homeButton.addEventListener("click", () => {
        location.reload();
    });

    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    previousButton.disabled = currentPage === 1;
    nextButton.disabled = endIndex >= highScores.length;
}

previousButton.addEventListener("click", showPreviousPage);
nextButton.addEventListener("click", showNextPage);

function showPreviousPage() {
    if(currentPage > 1) {
        currentPage--;
        showScores()
    }
}

function showNextPage() {
    const highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
    const totalScores = highScores.length;
    const totalPages = math.ceil(totalScores / pageSize);

    if (currentPage < totalPages) {
        currentPage++;
        showScores();
    }
}

choice1Button.addEventListener("click", checkAnswer);
choice2Button.addEventListener("click", checkAnswer);
choice3Button.addEventListener("click", checkAnswer);
choice4Button.addEventListener("click", checkAnswer);