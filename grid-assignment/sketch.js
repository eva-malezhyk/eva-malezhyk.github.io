// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let grid = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,3,3,3,0,0,0,0,0,0,0,1,0,0,0,0,0,0,2,1],
  [1,3,3,3,0,0,0,0,0,0,0,1,0,0,0,0,0,0,2,1],
  [1,3,3,3,0,0,0,0,0,0,0,1,0,0,0,0,0,0,2,1],
  [1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,2,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1],
  [1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,2,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1],
  [1,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1],
  [1,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];


let cellSize;
const GRID_SIZE = 20;
let playerX = 17;
let playerY = 1;
let levelToload;


function preload(){
  levelToload = loadImage("house-rpg.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  grid[playerY][playerX] = 9;
 
  if (height > width){
    cellSize = width / GRID_SIZE;
  }
  else{
    cellSize = height / GRID_SIZE;
  }
}

function draw() {
  background(220);
  displayGrid();
}

//function keyPressed(){
  //let y =  Math.floor(mouseY/cellSize);
  //let x =  Math.floor(mouseX/cellSize);

  // if (grid[y][x] === 0){
  //   grid[y][x] = 1;
  // }
  // else if (grid[y][x] === 1){
  //   grid[y][x] === 0;
  // }
  // else if(grid[y][x] === 2){
  //   grid[y][x] === 2;
  // }
//}

function keyTyped(){
  if (key === "s") { //move down
    movePlayer(0, 1);
  }
  else if (key === "w") { //move up
    movePlayer(0, -1);
  }
  else if (key === "a") { //move left
    movePlayer(-1, 0);
  }
  else if (key === "d") { //move right
    movePlayer(1, 0);
  }
}

function movePlayer(x, y) {
  
  if (playerX + x >= 0 && playerX + x < GRID_SIZE &&
      playerY + y >= 0 && playerY + y < GRID_SIZE) {
    
   
    if (grid[playerY + y][playerX + x] === 0) {
      let tempX = playerX;
      let tempY = playerY;

      playerX += x;
      playerY += y;

      
      grid[playerY][playerX] = 9;
      grid[tempY][tempX] = 0;
    }
  }
}

function displayGrid(){
  for (let y = 0; y < GRID_SIZE; y++ ){
    for (let x = 0; x < GRID_SIZE; x++){
      if (grid[y][x] === 0){
        fill("YellowGreen");
        rect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
      if(grid[y][x] === 1){
        fill ("OliveDrab");
        rect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
      if(grid[y][x] === 2){
        fill("Sienna");
        rect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
      if(grid[y][x] === 3){
        fill("Aqua");
        rect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
      if(grid[y][x] === 4){
        image(levelToload, x * cellSize, y * cellSize, width / GRID_SIZE , height / GRID_SIZE);
      }
      if(grid[y][x] === 9){
        fill("Crimson");
        rect(x * cellSize, y * cellSize, cellSize, cellSize);
      } 
    } 
  }
}





