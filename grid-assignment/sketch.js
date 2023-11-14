// Pixel Art 
// Ieva Malezhyk
// October 6th, 2023
//
//About: A 2D array grid where each cell represents a pixel. Users can draw by clicking cells, 
//You can also undo actions with Ctrl+Z, select colors with a color picker, and save their drawing as a PNG file. 
//
// Extra for Experts:
// For extra for experts I added a color picker using HTML.
//JavaScript manages this color picker by listening for changes to the selected color. When a user selects a color, 
//it updates the selectedColor variable. I also added a function to save the drawing when finished which is something new that 
//I learned about while working on this project.


//setting variables 
let pixelSize = 20;
let cols, rows;
let grid;
let selectedColor;
let undoStack = [];
let saveButton;

function setup() {
  createCanvas(900, 500);
  cols = width / pixelSize;
  rows = height / pixelSize;
  selectedColor = '#000000';//dafault color for drawing 
  createGrid();
//creating a save button
  saveButton = createButton('Save Drawing');
  saveButton.position(width + 10, height + 10);//position
  saveButton.mousePressed(saveCanvasState);//button click
}

function draw() {
  background(255);
  displayGrid();
}

function mousePressed() {
  //get the position where the mouse clicked 
  let col = floor(mouseX / pixelSize);
  let row = floor(mouseY / pixelSize);
  
  if (col >= 0 && col < cols && row >= 0 && row < rows) {//change the cell to selected color
    saveState();//before changing the color save the current state

    grid[row][col] = selectedColor;
  }
}

function keyPressed() {
  if (keyIsDown(CONTROL) && key === 'z') {//undo changes when Ctrl + z is pressed
    restoreState();//restore previous changes
  }
}

function saveState() {//save current state
  let currentState = JSON.parse(JSON.stringify(grid));
  undoStack.push(currentState);
}

function restoreState() {//if has changes, restore the previous state
  if (undoStack.length > 0) {
    grid = undoStack.pop();
  }
}

function createGrid() {  // Initialize the grid with default color '#ffffff' (white)
  grid = new Array(rows);
  for (let i = 0; i < rows; i++) {
    grid[i] = new Array(cols).fill('#ffffff');
  }
}

function displayGrid() {//displaying grid on canvas 
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = j * pixelSize;
      let y = i * pixelSize;

      fill(grid[i][j]);//cell color
      stroke(0);
      rect(x, y, pixelSize, pixelSize); //draw cell rectangle
    }
  }
}

function saveCanvasState() {
  saveCanvas('drawing', 'png');  //Save the canvas as a PNG image with the name 'drawing'
}

// Event listener for color picker to update selectedColor
document.getElementById('colorPicker').addEventListener('input', function(e) {
  selectedColor = e.target.value;
});



