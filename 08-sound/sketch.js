// images and sound demo
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let kitty;

function preload(){
  kitty = loadImage("hello-kitty-transperant-forSquare.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);
  circle(kitty, mouseX, mouseY);
}
