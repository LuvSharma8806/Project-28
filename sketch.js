
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,stone;
var boy,boyImg;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground= new Ground(400,680,800,10);
	stone=new Stone(100,300,60,60);
	
	boy=new Boy(180,600,150,150);
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
 ground.display();
 stone.display();
 boy.display();
 
}



