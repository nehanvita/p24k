
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var ground,paper,dustbin1;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(700,320,70,70);
  paper= new Paper(700,450,50);
	
	dustbin1 = new Dustbin(480,600,20,100)
	dustbin2 = new Dustbin(340,660,300,20)
	dustbin3 = new Dustbin(200,600,20,100)



	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);

    ground.display();
    paper.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}



