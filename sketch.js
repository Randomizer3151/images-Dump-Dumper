
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var engine, world;
var Img;
//var bodies;

function setup() {
	var canvas = createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	paper = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	 World.add(world, paper);
	 paper.shapeColor=color("Purple");
 
	 Dbs1=createSprite(750,625,20,125);
	 Dbs1.shapeColor=color("White");
 
	 Dbs2=createSprite(700,685,100,20);
	 Dbs2.shapeColor=color("White");
	 
	 Dbs3=createSprite(650,625,20,125);
	 Dbs3.shapeColor=color("White")
    //Create the Bodies above.^

	ground=new Ground(600,height,700,20);
    paper=new Paper(100,100);
	

	Engine.run(engine);
}



function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
//So, um the displaying/"new paper" stuff is below this comment.
  paper.display;
  ground.display;

  
}

function jump() {
	if (keydown=DOWN_ARROW) { 
	paper.velocityY=-20
}
}
