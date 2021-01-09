
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1 ,ground1,dustbin;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);

    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paper1 = new Paper(200,435);
	ground1 = new Ground(700,505,1400,20);
	dustbin = new Dustbin(820,490)
	Engine.run(engine);

}


function draw() {
  background("grey");
  paper1.display();
  ground1.display();
  dustbin.display();

 
}
function keyPressed(){

if(keyDown (UP_ARROW)) {

 Matter.Body.applyForce(paper1.body,paper1.body.position,{x : 750 , y : -1100});

  }
}

