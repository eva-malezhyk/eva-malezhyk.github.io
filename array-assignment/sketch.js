// Trivia Quiz
// Ieva Malezhyk
// 13/10/2023
//
// Requirements: 
// For the array requirement, I use an array to store trivia questions and the answers to them. Each question that is being 
// stored in an array is being randomly selected each time you refresh/restart. For an object requirement, the questions and the correct
// answers are represented as objects. 
// Extra for Experts:
// For extra for experts I learned about a function called alert(). This function is used to display messages to the user, the user can 
// dismiss the message by clicking "OK". Function called splice(), removes or replace things from an array. 
// Another one is prompt(), this function takes the user's input and puts it together.


// Generates a random number between min and max
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let trivia = [ // Array and objects of trivia questions and answers
  {
    quiz: "How many stars are on the European Union Flag?\n a) 12\n b) 14\n c) 22\n d) 9",
    correctAnswer: "a"
  },
  {
    quiz: "What’s the most popular drink in the world that is not alcohol?\n a) tea\n b) coffee\n d) orange juice\n c) lemonade",
    correctAnswer: "b"
  },
  {
    quiz: "Which animal can be seen on the Porsche logo?\n a) Elephant\n b) Horse\n c) Dog\n d) Jaguar",
    correctAnswer: "b"
  },
  {
    quiz: "Who painted Mona Lisa?\n a) Michelangelo\n b) Raphael\n c) Leonardo da Vinci\n d) Rembrandt",
    correctAnswer: "c"
  },
  {
    quiz: "When did Facebook first launch?\n a) 1999\n b) 2001\n c) 2008\n d) 2004",
    correctAnswer: "d"
  },
  {
    quiz: "In the Catholic Church, the Bishop of Rome is a title more commonly known as what?\n a) Pope\n b) Bobe\n c) Poppy\n d) John",
    correctAnswer: "a"
  },
  {
    quiz: "How old was Rose in the Titanic movie when she was recounting her story?\n a) 100 y.o.\n b) 98 y.o.\n c) 101 y.o.\n d) 85 y.o.",
    correctAnswer: "a"
  },
  {
    quiz: "What was the first Disney animated feature movie that was not based on an already existing story?\n a) Mulan\n b) Aladdin\n c) Pinocchio\n d) The Lion King",
    correctAnswer: "d"
  }
];

let score = 0; // Setting the score to 0 

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Displays a message before game starts
  alert("You will be presented with 10 questions. Type the letter corresponding to your answer (a, b, c, d)"); 
  triviaGame(); // Starts the game
}

function draw() {
  background(220);
}

//Function to play the trivia game
function triviaGame() {
  while (trivia.length > 0) { // Asks the questions until no more left
    let randomIndex = getRandom(0, trivia.length - 1);
    let question = trivia[randomIndex]; // Pulls out the questions from the array
    let response = prompt(question.quiz); // Promts the user's input

    if (response === question.correctAnswer) { // Checks if the user's input was correct
      // If yes, the score goes up by one and the message will tell you the answer is correct
      score++;
      alert("That is correct! ★"); 
    // If not, the message will tell you it was incorrect and tell you the right answer
    } else {
      alert("That is INCORRECT! ☹" + " The correct answer is " + question.correctAnswer);
    }
    
    //Removes the trivia question from the array
    trivia.splice(randomIndex, 1);
  }

  alert("Your score is " + score + " out of 8");
  restartTrivia();
}

//Function to restart the trivia game
function restartTrivia() {
  let restart = confirm("Would you like to play again?"); //Asks the user if they would like to play again

  if (restart) { //If the user clicks "OK" then the trivia restarts 
    score = 0;

    trivia = [
      {
        quiz: "How many stars are on the European Union Flag? \n a) 12 \n b) 14\n c) 22\n d) 9",
        correctAnswer: "a"
      },
      {
        quiz: "What’s the most popular drink in the world that is not alcohol? \n a) tea \n b) coffee\n d) orange juice\n c) lemonade",
        correctAnswer: "b"
      },
      {
        quiz: "Which animal can be seen on the Porsche logo?\n a) Elephant\n b) Horse \n c) Dog\n d) Jaguar",
        correctAnswer: "b"
      },
      {
        quiz: "Who painted Mona Lisa?\n a) Michelangelo\n b) Raphael\n c) Leonardo da Vinci\n d) Rembrandt",
        correctAnswer: "c"
      },
      {
        quiz: "When did Facebook first launch?\n a) 1999\n b) 2001\n c) 2008\n d) 2004",
        correctAnswer: "d"
      },
      {
        quiz: "In the Catholic Church, the Bishop of Rome is a title more commonly known as what?\n a) Pope\n b) Bobe\n c) Poppy\n d) John",
        correctAnswer: "a"
      },
      {
        quiz: "How old was Rose in the Titanic movie when she was recounting her story?\n a) 100 y.o.\n b) 98 y.o.\n c) 101 y.o.\n d) 85 y.o.",
        correctAnswer: "a"
      },
      {
        quiz: "What was the first Disney animated feature movie that was not based on an already existing story?\n a) Mulan\n b) Aladdin\n c) Pinocchio\n d) The Lion King",
        correctAnswer: "d"
      }
    ];

    triviaGame(); 

  } else { // If the user doesn't want to restart, the message will pop up 
    alert("Thank you for playing!");
  }
}




