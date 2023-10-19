// Find the numbers
// Ieva Malezhyk
// 13/10/2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let trivia = [
  {
    question: "How many stars are on the Euroupean Union flag?",
    choices: ["12", "14", "9", "22"],
    correctAnswer: 0
  },
  {
    question: "What is the most popular drink if it's not alcohol?",
    choices: ["tea", "coffee", "orange juice", "lemonade"],
    correctAnswer: 1
  },
  {
    question: "Which animal can be seen on a Porche logo?",
    choices: ["Elephant", "Dog", "Horse", "Jaguar"],
    correctAnswer: 2
  }
];

function checkAnswer(index, selectedAnswer) {
  if (selectedAnswer === trivia[index].correctAnswer) {
    console.log("That's Correct!");
    return true;
  } else {
    console.log("That's incorrect. The correct answer is: " + trivia[index].choices[trivia[index].correctAnswer]);
    return false;
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
}


