var movingRect,fixedRect
var car ,car2


function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
movingRect.shapeColor="green"
movingRect.velocityX=-3

fixedRect = createSprite(100, 200, 50, 50);
fixedRect.shapeColor="blue"
fixedRect.velocityX=3

car = createSprite(400,150,50,50)
car.shapeColor="red"
car.velocityY=3

car2 = createSprite(400,350,50,50)
car2.shapeColor="black"
car2.velocityY=-3
}

function draw() {
  background(255,255,255);  

bounce(car,car2)

bounce(movingRect,fixedRect)


  drawSprites();
}
