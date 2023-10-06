// Clicking game
// Ieva Malezhyk
// 04/10/23
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let object;
let player;
let rad = 15;
let timer = 10;
let score = 0;
let gameOver = false; 

function setup() {
  createCanvas(600, 600);
  object = createVector(random(width), random(height));
}

function draw() {
  background("pink");
  player = createVector(mouseX, mouseY);

  if (!gameOver) {
    timer -= 1 / 60;
    ellipse(object.x, object.y, rad * 2);
    let length = map(timer, 0, 5, 0, 100);
    text(score, width / 2, 20)
    rect(350, 20, 10, length);

    if (timer <= 0) {
      gameOver = true; 
    }
  } else {
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Game Over", width / 2, height / 2);
  }
}

function mousePressed() {
  if (!gameOver) {
    let dis = p5.Vector.dist(player, object);
    if (dis < rad) {
      object = createVector(random(width), random(height));
      score += +1;
    }
  }
}

function keyPressed() {
  if (key === ' ') {
    if (gameOver) {
      
      object.x = random(width);
      object.y = random(height);
      score = 0;
      timer = 10;
      gameOver = false; 
    }
  }
}