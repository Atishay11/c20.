var car;
var speed,weight;
var wall;

function setup() {
  createCanvas(800,400);
  car = createSprite(50, 100, 50, 50);
  speed=random(10,50)
  car.velocityX=speed;
  wall = createSprite(750,100,20,50);
 
  weight=random(400,1000)
}

function draw() {
  background(780,87,45);
   if(wall.x-car.x<(car.width+wall.width)/2){
      car.velocityX=0;
      var deformation=0.5*weight *speed*speed/22509
      if(deformation>180){
        car.shapeColor=color(255,0,0);
      }
      if(deformation<180 && deformation>100){
        car.shapeColor=color(230,230,0);
      }
      if(deformation<100){
        car.shapeColor=color(0,255,0);
      }
   }

  drawSprites();
}