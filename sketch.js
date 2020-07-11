var Bin1, bin2, bin3;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	var ball=addImg("crumpled-paper-tranparent-5")
	var ball=createSprite(400,370,15,15)
	var Bin1=createSprite(100,700,10,100)
	var bin2=createSprite(150,700,100,10)
	var bin3=createSprite(50,700,10,100)
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.mouseX
  ball.mouseY
  drawSprites();
 
}



