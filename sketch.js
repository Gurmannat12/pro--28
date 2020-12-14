const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,treeImage;
var boy,boyImage;
var ground;
var stone;
var mango;

function preload(){
treeImage = loadImage("tree.png");
boyImage = loadImage("boy.png");	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	tree=createSprite(900,400);
	tree.addImage(treeImage);
	tree.scale=0.45;


	ground = new Ground(600,680,1600,20);
	stone = new Stone(180,500,40);
	mango1 = new Mango(800,380,30);
	mango2 = new Mango(720,320,30);
	mango3 = new Mango(800,260,30);
	mango4 = new Mango(880,300,30);
	mango5 = new Mango(950,340,30);
	mango6 = new Mango(930,220,30);
	mango7 = new Mango(1020,260,30);
	mango8 = new Mango(1040,380,30);
	mango9 = new Mango(1120,330,30);


	boy=createSprite(250,600);
	boy.addImage(boyImage);
	boy.scale=0.125;

	launcher = new Launcher(stone.body,{x:180,y:530});

	Engine.run(engine);
  

  
}


function draw() {
  rectMode(CENTER);
  background("white");

  
  boy.display();
  tree.display();
  stone.display();
  ground.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  launcher.display();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    launcher.fly();
}

function detectCollision(mango,stone){
	mangoBodyPosition = mango.body.position;
	stoneBodyPosition = stone.body.position;

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
        if(distance<=mango.r+stone.r){
		Matter.Body.setStatic(mango.body,false);
		}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:180,y:500});
		launcher.attach(stone.body);
	}
}

