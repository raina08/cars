var car1, car2,car3,car4;
var wall1,wall2,wall3,wall4;
function setup() {
  createCanvas(800,400);
  car1 = createSprite(400, 200, 27, 27);
  car1.shapeColor = "green";
  car2 = createSprite(400, 150, 27, 27);
  car2.shapeColor = "red";
  car3 = createSprite(400, 100, 27, 27);
  car3.shapeColor = "yellow";
  car4 = createSprite(400, 50, 27, 27);
  car4.shapeColor = "blue";
   
  wall1 = createSprite(425, 50, 5,40);
  wall2 = createSprite(425, 100, 5, 40);
  wall3 = createSprite(425, 150, 5, 40);
  wall4 = createSprite(425, 200, 5, 40);
}

function draw() {
  background(255,255,255);  
  
  drawSprites();
}