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
    {
        question: "What is JavaScript?",
        choices: ["A programming language", "A markup language", "A styling language", "All of the above"],
        answer: "A programming language"
    },
    {
        question: "What is the syntax for a single-line comment in JavaScript?",
        choices: ["<!-- -->", "//", "/* */", "#"],
        answer: "//"
    },
    {
        question: "What is the syntax for a multi-line comment in JavaScript?",
        choices: ["<!-- -->", "//", "/* */", "#"],
        answer: "/* */"
    },
    {
        question: "What is the purpose of the 'use strict' directive in JavaScript?",
        choices: ["To enable strict mode", "To disable strict mode", "To add a strict mode warning", "To add a strict mode error"],
        answer: "To enable strict mode"
    },
    {
        question: "What is the difference between 'let' and 'var' in JavaScript?",
        choices: ["'let' is block-scoped and 'var' is function-scoped", "'let' is function-scoped and 'var' is block-scoped", "There is no difference", "None of the above"],
        answer: "'let' is block-scoped and 'var' is function-scoped"
    },
    {
        question: "What is the difference between '==' and '===' in JavaScript?",
        choices: ["'==' compares value and '===' compares value and type", "'==' compares value and type and '===' compares value", "'==' compares type and '===' compares value and type", "None of the above"],
        answer: "'==' compares value and '===' compares value and type"
    },
    {
        question: "What is the difference between null and undefined in JavaScript?",
        choices: ["null is assigned, undefined is not assigned", "undefined is assigned, null is not assigned", "Both represent empty values but have different types", "None of the above"],
        answer: "Both represent empty values but have different types"
    },
    {
        question: "What is an immediately invoked function expression (IIFE) in JavaScript?",
        choices: ["A function that is executed immediately after it is defined", "A function that is executed immediately after it is called", "A function that is executed immediately after the window loads", "A function that is executed immediately after the document is ready"],
        answer: "A function that is executed immediately after it is defined"
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        choices: ["To refer to the current object", "To refer to the global object", "To refer to the parent object", "To refer to the child object"],
        answer: "To refer to the current object"
    },
    {
        question: "What is a closure in JavaScript?",
        choices: ["A function that has access to variables in its outer scope", "A function that has access to variables in its inner scope", "A function that is defined inside another function", "A function that is called immediately after it is defined"],
        answer: "A function that has access to variables in its outer scope"
    },
    {
        question: "What is the purpose of the 'new' keyword in JavaScript?",
        choices: ["To create a new object", "To call a function as a constructor", "To delete an object", "To compare two objects"],
        answer: "To call a function as a constructor"
    },
      {
        question: "What does JavaScript do?",
        choices: ["manipulates HTML and CSS", "manipulates databases", "runs server-side code", "all of the above"],
        answer: "manipulates HTML and CSS"
    },
      {
        question: "What is the difference between `var`, `let`, and `const` in JavaScript?",
       choices: ["they are all the same", "var is block-scoped, let and const are function-scoped", "let is block-scoped, var and const are function-scoped", "const is block-scoped, var and let are function-scoped"],
        answer: "let is block-scoped, var and const are function-scoped"
    },
      {
        question: "What is the purpose of the `use strict` directive in JavaScript?",
        choices: ["it forces the use of strict typing in the code", "it enables strict mode, which helps catch coding mistakes", "it improves performance by optimizing the code", "it disables                     certain language features that are prone to errors"],
         answer: "it enables strict mode, which helps catch coding mistakes"
    },
      {
        question: "What is an arrow function in JavaScript?",
        choices: ["a function with a special syntax that allows for shorter and cleaner code", "a function that always returns a boolean value", "a function that can be called with any number           of arguments", "a function that returns a promise object"],
        answer: "a function with a special syntax that allows for shorter and cleaner code"
    },
      {
        question: "What is the purpose of the `this` keyword in JavaScript?",
        choices: ["it refers to the current function being executed", "it refers to the global window object", "it refers to the object that the function is a method of", "it refers to the last         variable declared in the code"],
        answer: "it refers to the object that the function is a method of"
    },
      {
        question: "What is the difference between ``==` and ``===`` in JavaScript?",
        choices: ["they are the same", "`==` compares values and === compares types and values", "'==' compares types and values and === compares values", "there is no difference"],
        answer: "`==` compares values and === compares types and values"
    },
      {
        question: "What is a callback function in JavaScript?",
        choices: ["a function that is executed immediately when called", "a function that is called when an event occurs", "a function that is passed as an argument to another function and             executed later", "a function that is used to create new objects"],
        answer: "a function that is passed as an argument to another function and executed later"
    },
      {
        question: "What is the purpose of the `try...catch` statement in JavaScript?",
        choices: ["it allows you to test the speed of your code", "it enables debugging by catching errors and preventing the code from crashing", "it is used to create loops in the code", "it         is used to sort arrays"],
        answer: "it enables debugging by catching errors and preventing the code from crashing"
    },
      {
        question: "What is an event listener in JavaScript?",
        choices: ["a function that is called when a user clicks a button", "a function that is called when a key is pressed", "a function that is called when an event occurs on a specified             element", "a function that is used to animate elements on a webpage"],
        answer: "a function that is called when an event occurs on a specified element"
        
    },
      {
        question: "What is a closure in JavaScript?",
        choices: ["a function that takes no arguments", "a function that is executed immediately when called", "a function that returns an object", "a function that has access to variables in           its outer scope"],
        answer: "a function that has access to variables in its outer scope"
    },
      {
        question: "What is the difference between `slice` and `splice` in JavaScript?",
        choices: ["they are the same", "slice returns a new array with selected elements and splice modifies the original array", "slice modifies the original array and splice returns a new             array with selected elements", "slice and splice both modify the original array"],
        answer: "slice returns a new array with selected elements and splice modifies the original array"
        
    },
      {
        question: "What is the purpose of the `prototype` property in JavaScript?",
        choices: ["it allows you to create new variables", "it is used to define the behavior of an object", "it is used to create new arrays", "it is used to define the styling of a webpage"],
        answer: "it is used to define the behavior of an object"
        
    },    
      {
        question: "What is the difference between `map` and `forEach` in JavaScript?",
        choices: ["they are the same", "map returns a new array and forEach does not", "forEach returns a new array and map does not", "map and forEach both modify the original array"],
        answer: "map returns a new array and forEach does not"
        
    },
      {
        question: "What is a promise in JavaScript?",
        choices: ["a guarantee that a function will return a value", "a function that is executed immediately when called", "a function that is used to handle errors", "an object that                   represents the eventual completion (or failure) of an asynchronous operation"],
        answer: "an object that represents the eventual completion (or failure) of an asynchronous operation"
        
    }, 
      {
        question: "What is the `async/await` syntax in JavaScript used for?",
        choices: ["to create animations on a webpage", "to handle errors in the code", "to make code run faster", "to write asynchronous code that looks synchronous"],
        answer: "to write asynchronous code that looks synchronous"
        
    },
      {
        question: "What is the difference between `let` and `var` in JavaScript?",
        choices: ["they are the same", "let is block-scoped and var is function-scoped", "var is block-scoped and let is function-scoped", "there is no difference"],
        answer: "let is block-scoped and var is function-scoped"
        
    },    
      {
        question: "What is the difference between `==`, `===`, and `!=` in JavaScript?",
        choices: ["they are all the same", "== compares types and values, === compares only values, and != is the opposite of ==", "== compares only values, === compares types and values, and           != is the opposite of ==", "== compares types and values, === compares only values, and != compares types and values"],
        answer: "== compares types and values, === compares only values, and != is the opposite of =="
        
    },
      {
        question: "What is the `spread` syntax in JavaScript used for?",
        choices: ["to create animations on a webpage", "to spread an array into separate arguments", "to handle errors in the code", "to make code run faster"],
        answer: "to spread an array into separate arguments"
        
    },    
     
];

const positiveMessage = [ 
    {
    message: "Do you have a PhD in this?"
    },
    {   
    message: "Did you invent this quiz?"
    },
    {   
    message: "Are you the smartest person in the room?"
    },   
    {
        message: "Do you have a PhD in this?"
    },
    {
        message: "Did you invent this quiz?"
    },
    {
        message: "Are you the smartest person in the room?"
    },
    {
        message: "Is this too easy for you?"
    },
    {
        message: "Have you considered applying to MENSA?"
    },
    {
        message: "Do you know the secrets of the universe?"
    },
    {
        message: "Did you study for this or are you just that good?"
    },
    {
        message: "Are you a robot in disguise?"
    },
    {
        message: "Did you download the answer key?"
    },
    {
        message: "Is this your superpower?"
    },
    {
        message: "Did you eat your Wheaties this morning?"
    },
    {
        message: "Do you know what they put in the water at Hogwarts?"
    },
    {
        message: "Are you the chosen one?"
    },
    {
        message: "Did you take a smart pill today?"
    },
    {
        message: "Do you have a photographic memory?"
    },
    {
        message: "Are you the reincarnation of Einstein?"
    },
    {
        message: "Did you receive an IQ upgrade overnight?"
    },
    {
        message: "Do you have a time machine to go back and study for this?"
    },
    {
        message: "Are you a trivia mastermind?"
    },
    {
        message: "Did you just read my mind for the answer?"
    },
    {
        message: "You're crushing it!"
    },
    {
        message: "You're a genius!"
    },
    {
        message: "Way to go, smarty pants!"
    },
    {
        message: "You're on fire!"
    },
    {
        message: "You nailed it!"
    },
    {
        message: "You're a star!"
    },
    {
        message: "You're a rockstar!"
    },
    {
        message: "You're killing it!"
    },
    {
        message: "You're a pro!"
    },
    {
        message: "You're a champ!"
    },
    {
        message: "You're a wizard!"
    },
    {
        message: "You're a superhero!"
    },
    {
        message: "You're a legend!"
    },
    {
        message: "You're a boss!"
    },
    {
        message: "You're a mastermind!"
    },
    {
        message: "You're a whiz!"
    },
    {
        message: "You're unstoppable!"
    },
    {
        message: "You're brilliant!"
    },
    {
        message: "You're amazing!"
    },
    {
        message: "You're awesome!"
    },
    {
        message: "You're killing this quiz!"
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
const messageElement = document.getElementById("message");

let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let timeRemaining = 60;
let currentpositiveMessageIndex = 0;
let shuffledIndexes = [];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    homeButtons.style.display = "none";
    quizContainer.style.cssText = "display: flex; height: 600px;"; 
    shuffle(questions);
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

shuffledIndexes = shuffleIndexes(questions.length);

function shuffleIndexes(length) {
    const indexes = Array.from({ length }, (_, i) => i);
    shuffle(indexes);
    return indexes;
}


function showQuestion() {
    const questionIndex =shuffledIndexes[currentQuestionIndex]
    const question = questions[questionIndex];
    questionElement.textContent = question.question;
    choice1Button.textContent =question.choices[0];
    choice2Button.textContent =question.choices[1];
    choice3Button.textContent =question.choices[2];
    choice4Button.textContent =question.choices[3];
}

function showMessage() {
    shuffle(positiveMessage);
    const message = positiveMessage[currentpositiveMessageIndex].message;
    messageElement.textContent = message;
}

function checkAnswer(event) {
    const selectedAnswer = event.target.textContent;
    const questionIndex = shuffledIndexes[currentQuestionIndex];
    const question = questions[questionIndex];
    if (selectedAnswer === question.answer) {
        messageElement.style.display = "flex";
        showMessage();
        setTimeout(() => {
            messageElement.style.display = "none";
        }, 1500);
        score++;
        timeRemaining +=7;
    } else {
        timeRemaining -= 10;
        uWrong.style.display = "flex";
        homeContainer.style.display = "none";
        setTimeout(() => {
            uWrong.style.display = "none";
            homeContainer.style.display = "flex";
        }, 500);
    }

    currentpositiveMessageIndex++
        if (currentpositiveMessageIndex < positiveMessage.length) {
            shuffle(positiveMessage);
        } else {
            currentpositiveMessageIndex = 0;
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
    clearInterval(timerInterval);
    currentQuestionIndex = 0;
    //timeRemaining = 60;
    //score = 0;
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
    const totalPages = Math.ceil(totalScores / pageSize);

    if (currentPage < totalPages) {
        currentPage++;
        showScores();
    }
}

choice1Button.addEventListener("click", checkAnswer);
choice2Button.addEventListener("click", checkAnswer);
choice3Button.addEventListener("click", checkAnswer);
choice4Button.addEventListener("click", checkAnswer);