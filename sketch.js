const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var topwall,bottomwall,leftwall,rightwall;
var ball;
var upbutton,rightbutton;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  bottomwall=new Ground(200,390,400,20);
  topwall=new Ground(200,10,400,20);
  leftwall=new Ground(10,200,20,400);
  rightwall=new Ground(390,200,20,400);

  var options={restitution:0.3}
  ball=Bodies.circle(200,200,15,options);
  World.add(world,ball);

  upbutton=createImg("up.png");
  upbutton.size(50,50);
  upbutton.position(40,330);
  upbutton.mouseClicked(upforce);

  rightbutton=createImg("right.png");
  rightbutton.size(50,50);
  rightbutton.position(100,330);
  rightbutton.mouseClicked(rightforce);
}
function upforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.02})
}
function rightforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:0})
}
function draw() 
{
  background(51);
  Engine.update(engine);
  bottomwall.display();
  topwall.display();
  leftwall.display();
  rightwall.display();

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,15,15);
}

