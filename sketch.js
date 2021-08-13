var boy,path,leftboundary,rightboundary;
var boyImage,pathImage;
var i;
function preload(){
  //pre-load images
  RunnerImage=loadAnimation("Runner-1.png","Runner-2.png");
  pathImage=loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage("path",pathImage);
  path.velocityY=4;
  path.scale=1.2

  boy=createSprite(180,340,30,30);
  boy.scale=0.08;
  boy.addAnimation("JakeRunning",boyImage);
  
  leftboundary=createSprite(0,0,100,800);
  leftboundary.visible=false;

  rightboundary=createSprite(410,0,100,800);
  rightboundary.visible=false;
}

function draw() {
  background(0);
  path.velocityY=4;

  boy.x= World.mouseX;

  edges=createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftboundary);
  boy.collide(rightboundary);

  if(path.y>400){
    path.y=height/2;
    }

  drawSprites();
}
