const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backimg, santa;
var engine, world;
var snow = [];
var maxSnowFlakes = 100; 

function preload(){
backimg = loadImage("background.jpg");
}

function setup() {
 createCanvas(900, 600);
 engine = Engine.create();
 world = engine.world;

 santa = new Santa(100, 150, 90, 70);

 
    for (var j = 0; j < maxSnowFlakes; j++) 
    {
     snow.push(new Snow(random(0,900), random(0,900)));
    }
}

  
function draw() {
  background(backimg);
  
  for (var i = 0; i < maxSnowFlakes; i++){
    
    snow[i].display();
    snow[i].updateY();
  }
  
  santa.display();
  
}

