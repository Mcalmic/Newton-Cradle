
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Ball(200, 250, 50);
	ball2 = new Ball(350, 350, 50);
	ball3 = new Ball(400, 350, 50);
	ball4 = new Ball(450, 350, 50);
	ball5 = new Ball(500, 350, 50);
	ball6 = new Ball(550, 350, 50);

	chain1 = new Chain(ball1, 300, 250);
	chain2 = new Chain(ball2, 350, 250);
	chain3 = new Chain(ball3, 400, 250);
	chain4 = new Chain(ball4, 450, 250);
	chain5 = new Chain(ball5, 500, 250);
	chain6 = new Chain(ball6, 550, 250);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  drawSprites();
 
}



