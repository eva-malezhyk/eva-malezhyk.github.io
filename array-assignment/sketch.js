// Find the numbers
// Ieva Malezhyk
// 13/10/2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let trivia = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: 0
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: 1
  },
  {
    question: "What is the largest mammal in the world?",
    choices: ["Elephant", "Giraffe", "Blue Whale", "Kangaroo"],
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


