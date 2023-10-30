// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let grid;
let GRID_SIZE = 20:

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  displayGrid();
}


function displayGrid(){
  for (let y = 0; y < GRID_SIZE; y++ ){
    for (let x = 0; x < GRID_SIZE; x++){
      if (grid[y][x] === 0){
        fill("white");
      }
      if(grid[y][x] === 1){
        fill ("purple");
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}