var road,runner,rightBoundary,leftBoundary;
var roadImg,runnerImg;
function preload(){
  //pre-load images
  roadImg = loadImage("path.png")
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  road = createSprite(200,200);
  road.addImage(roadImg);
  road.velocityY = 7;
  road.scale = 1.2;



  runner = createSprite(180,340,30,30)
  runner.addAnimation("boyRunning",runnerImg);
  runner.scale = 0.08;
  
  
  edges = createEdgeSprites();

  leftBoundary = createSprite(0,0,100,800);
  leftBoundary.visible = false;

  rightBoundary = createSprite(410,0,100,800);
  rightBoundary.visible = false;
}

function draw() {

  background(0);
  road.velocityY = 4;

  runner.x = World.mouseX;

  
  runner.collide(edges[3]);
  runner.collide(leftBoundary);
  runner.collide(rightBoundary);

  if(road.y<400){
    road.y = height/2;
  }

  drawSprites();
}

