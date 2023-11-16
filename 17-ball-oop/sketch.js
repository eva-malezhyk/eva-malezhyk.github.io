// Ball OOP Demo



class Ball {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.radius = random(15,30);
    this.dx = random(-5, 5);
    this.dy = random(-5,5);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);


  }
  move(){
    this.x += this.dx;
    this.y += this.dy;

    //up and down bounce
    if(this.y - this.radius < 0 || this.y + this.radius > height){
      this.dy *= -1;
    }

    //left and right bounce
    if(this.x - this.radius < 0 || this.x + this.radius > width){
      this.dx *= -1;
    }


  }
  display(){
    fill(this.r, this.g, this.b);
    circle(this.x, this.y, this.radius * 2);
  }
  bounceOff(otherBall){
    let radiiSum = this.radius + otherBall.radius;
    let distance = dist(this.x, this.y, otherBall.x, otherBall.y );
    if(radiiSum > distance){
      let tempX = this.dx;
      let tempY = this.dy;
      
      this.dx = otherBall.dx;
      this.dy = otherBall.dy;

      otherBall.dx = this.dx;
      otherBall.dy = this.dy;
    }
  }
}

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let theBall = new Ball(width/2, height/2);
  ballArray.push(theBall);
}

function draw() {
  background(220);
  noStroke();

  for(let someBall of ballArray){
    someBall.move();
    for(let otherBall of ballArray){
      if (someBall !== otherBall){
        someBall.bounceOff(otherBall);

      }
    }
    someBall.display();
  }
  
}

function mousePressed(){
  let theBall = new Ball(mouseX, mouseY);
  ballArray.push(theBall);
}
