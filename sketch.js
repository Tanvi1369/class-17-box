var Boxie
function setup() 
{
  createCanvas(400, 400);
  Boxie = new Box(25,90,10,10,1);
}

function draw() 
{
  background(220);
Boxie.show();
Boxie.move();
}

