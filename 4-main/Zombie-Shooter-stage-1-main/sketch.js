var player, shooterImg, shooter_shooting;
var background, backgroundImg;

function Preload(){
  shooterImg=loadImage("assets/shooter_2.png")
  shooter_shooting=loadImage("assets/shooter_3.png")
  backgroundImg=loadImage("assets/bg.jpeg")
}

function setup(){
  createCanvas(windowWidth, windowHeight);

  background=createSprite(displayWidth/2-20, displayHeight/2-40, 20, 20);
  background.addImage(backgroundImg);
  background.scale=1.1

  player=createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  player.addImage(shooterImg)
  player.scale=0.3

  player.debug=true
  player.setCollider("rectangle", 0, 0, 300, 300)

}

function draw(){
 background(0)
if(KeyDown("UP_Arrow")|| touches.length>0){
  aircraft.y=aircraft.y-30
}
if(KeyDown("DOWN_Arrow") || touches.length>0){
  aircraft.y=aircraft.y+30
}

if(keyWentDown("space")){
  player.addImage(shooter_shooting)
}
else if(keyWentDown("space")){
  player.addImage(shooterImg)

}
 drawSprites()

}
