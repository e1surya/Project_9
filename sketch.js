var box;

function setup() {
  createCanvas(400,400);
  box=createSprite(50,50,100,100)
}

function draw() 
{
  background(30);
  drawSprites()
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x=box.position.x+5
  }
  

}




