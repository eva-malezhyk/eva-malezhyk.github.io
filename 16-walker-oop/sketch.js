// Walker OOP Demo

class Walker {
  constructor(x,y, color){
    this.x = x;
    this.y = y;
    this.color = color;
    this.size = 5;
    this.speed = 5;

  }
  display(){
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.size);
  }
  move(){
    let theChoice = random(100);
    if (theChoice < 25){
      //down
      this.y += this.speed;
    }
    else if(theChoice < 50){
      //up
      this.y -= this.speed;
    }
    else if (theChoice < 75){
      this.x -= this.speed; // left
    }
    else{
      this.x += this.speed;//right
    }
  }
}

// let jace;
// let seonheum;
let theWalkers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
  jace = new Walker(width/2, height/2, "blue");
  theWalkers.push(jace);
  // seonheum = new Walker(200, 400, "green");
}

function draw() {
  for(the person of theWalkers){
    person.move();
    person.display();
  }
  // jace.move();
  // seonheum.move();

  // jace.display();
  // seonheum.display();
}


function mousePressed(){
  
}
