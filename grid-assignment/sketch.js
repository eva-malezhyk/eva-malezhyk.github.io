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
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];


let cellSize;
const GRID_SIZE = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
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

function keyPressed(){
  let y =  Math.floor(mouseY/cellSize);
  let x =  Math.floor(mouseX/cellSize);

  if (grid[y][x] === 0){
    grid[y][x] = 1;
  }
  else if (grid[y][x] === 1){
    grid[y][x] === 0;
  }
  else if(grid[y][x] === 2){
    grid[y][x] === 2;
  }
}


function displayGrid(){
  for (let y = 0; y < GRID_SIZE; y++ ){
    for (let x = 0; x < GRID_SIZE; x++){
      if (grid[y][x] === 0){
        fill("YellowGreen");
      }
      if(grid[y][x] === 1){
        fill ("OliveDrab");
      }
      if(grid[y][x] === 2){
        fill("Sienna");
      }
      if(grid[y][x] === 3){
        fill("Aqua");
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}

