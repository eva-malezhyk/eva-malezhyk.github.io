//Dog OOP Demo

class Dog {
  constructor(name, color, breed, age, size, ){
    this.name = name;
    this.color = color;
    this.breed = breed;
    this.age = age;
    this.size = size;
  }

  bark(){
    console.log("Woof! " + this.name);
  }
}

let spot = new Dog("Spot", "Orange", "Poodle", 3, "Small");
let rover = new Dog("Rover", "Black", "Pug", 1, "Big");


function setup() {
  createCanvas(windowWidth, windowHeight);
  spot.bark();
  rover.bark();
}

function draw() {
  background(220);
}
