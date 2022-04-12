
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var bote2;
var bote3;

var bote;

function setup() {
  createCanvas(800,700);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
  }
   
   var ground_options ={
     isStatic: true,
     density:1.3
   };
  
  
  ground = Bodies.rectangle(400,690,800,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,10,ball_options);
  World.add(world,ball);

  bote2 = Bodies.rectangle(750,630,20,100,ground_options);
  World.add(world,bote2);

  bote = Bodies.rectangle(600,630,20,100,ground_options);
  World.add(world,bote);

  bote3 = Bodies.rectangle(800,400,20,900,ground_options);
  World.add(world,bote3);
  
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  //keyPressed();
  
  ellipse(ball.position.x,ball.position.y,10);
  rect(ground.position.x,ground.position.y,800,20);
  rect(bote2.position.x,bote2.position.y,20,100);
  rect(bote3.position.x,bote3.position.y,20,900);
  rect(bote.position.x,bote.position.y,20,100);
}

function keyPressed() {
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,{x:1,y:-1},{x:0.3,y:-0.5})
  }
}
