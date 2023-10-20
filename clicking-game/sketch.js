// Requirements: When you click on circles, 'mousePressed()' starts working. 
//When time is up and the game is over you can click space 'keyPressed()' and restart the game.
// For extra for experts I attempted to add text, and I'm not sure if we ever learned about adding a score in class, but I 
//added a score to the game, a timer, and I learned about createVector() which is used to create 2D objects and 3D objects. 
//In my case I used it to create a 2D object and it generates the circle to appear in random spots after being clicked.

//declaring variables
let object;
let player;
let rad = 15;
let timer = 10; 
let score = 0;
let gameOver = false;

//setting a duration for variables
let greenDuration = 1000;
let yellowDuration = 1000;
let redDuration = 1000;
let purpleDuration = 1000;
let blueDuration = 1000;
let pinkDuration = 1000;
let cyanDuration = 1000;
let limeDuration = 1000;
let state = "green";//initiating the state to green
let lastSwitchTime = 0; //time to last switch


function setup() {
  createCanvas(600, 600);
  object = createVector(random(width), random(height)); //setting the object's position
  fill("pink")
}

function draw() {
  //calling functions
  checkState();
  displayCorrectLight();

  player = createVector(mouseX, mouseY);// user's position based on the mouse

  if (!gameOver) {
    timer -= 1 / 60;
    ellipse(object.x, object.y, rad * 2);//creates a circle
    let length = map(timer, 0, 5, 0, 100);
    text(score, width / 2, 20); //adding the score
    rect(350, 20, 10, length);// progress/time bar

    if (timer <= 0) {
      gameOver = true; //when timer is 0, game over
    }
  } else {
    //adding text
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Game Over", width / 2, height / 2 - 20);
    text("Press Space to Start over", width / 2, height / 2 + 20);
    fill("black")
  }
}

//when mouse clicks on the object, circle appears in a random spot and adds one point to score
function mousePressed() {
  if (!gameOver) {
    let dis = p5.Vector.dist(player, object);
    if (dis < rad) {
      object = createVector(random(width), random(height));
      score += 1;
    }
  }
}

//when space is pressed the game restarts
function keyPressed() {
  if (key === " ") {
    if (gameOver) {
      object.x = random(width);
      object.y = random(height);
      score = 0;
      timer = 10;
      gameOver = false;
    }
  }
}

//checking color states 
function checkState() {
  if (state === "green" && millis() > lastSwitchTime + greenDuration) {
    state = "yellow";
    lastSwitchTime = millis();
  }
  if (state === "yellow" && millis() > lastSwitchTime + yellowDuration) {
    state = "red";
    lastSwitchTime = millis();
  }
  if (state === "red" && millis() > lastSwitchTime + redDuration) {
    state = "purple";
    lastSwitchTime = millis();
  }
  if (state === "purple" && millis() > lastSwitchTime + redDuration) {
    state = "blue";
    lastSwitchTime = millis();
  }
  if (state === "blue" && millis() > lastSwitchTime + redDuration) {
    state = "pink";
    lastSwitchTime = millis();
  }
  if (state === "pink" && millis() > lastSwitchTime + redDuration) {
    state = "cyan";
    lastSwitchTime = millis();
  }
  if (state === "cyan" && millis() > lastSwitchTime + redDuration) {
    state = "lime";
    lastSwitchTime = millis();
  }
  if (state === "lime" && millis() > lastSwitchTime + redDuration) {
    state = "green";
    lastSwitchTime = millis();
  }
}

//checks the state and displays the corect color
function displayCorrectLight() {
  if (state === "green") {
    background("green");
  } else if (state === "yellow") {
    background("yellow");
  } else if (state === "purple") {
    background("purple");
  } else if (state === "blue") {
    background("blue");
  } else if (state === "pink") {
    background("pink");
  } else if (state === "cyan") {
    background("cyan");
  } else if (state === "lime") {
    background("lime");
  }
}