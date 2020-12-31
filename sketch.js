var car,wall;
var weight,speed;



function setup() {
  createCanvas(1600,400);
  
  car=createSprite(200,200,50,50);
  car.shapeColor=color('grey');

  wall=createSprite(1200,200,60,100);

  speed=random(25,31);
  
  car.velocityX=speed;

  
  weight=random(400,1500);


}

function draw() {
  background('black');  

  if(wall.x-car.x < (car.width+wall.width) /2)
  {

    //car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      car.shapeColor=color('yellow');
      wall.shapeColor=color('white');
    }
    else if(deformation<180 && deformation>100){
      car.shapeColor=color('green');
      wall.shapeColor=color('white');
    }
    
    else if(deformation<100){
      car.shapeColor=color('red');
      wall.shapeColor=color('white');
    }
  }
  if(car.isTouching(wall)){
    car.velocityX=0;
  }

  
  drawSprites();
}