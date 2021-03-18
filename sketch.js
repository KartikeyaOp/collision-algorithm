var fixedRect,movingRect,test1,test2;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
test1= createSprite(500,100,80,30);
test2= createSprite(300,50,80,30);

}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(touching(movingRect,test1)){
    test1.shapeColor="red";
  }
 else if (touching(movingRect,test2)){
test2.shapeColor="red";
  }
  else if(touching(movingRect,fixedRect)){
    fixedRect.shapeColor= "red"

  }
else{
  movingRect.shapeColor="green";
  test1.shapeColor="green";
  test2.shapeColor="green"
  fixedRect.shapeColor= "green"

}
  drawSprites();
}
