var ground;
var Plinko;
var particles;
var divisions;


function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  ground = new Ground(600,height,1200,20);
  divisions = new Divisions(200,100,20,200);

  var divisionHeight=300;

for(var k=0; k<=innerWidth; k=k+80){
  divisions.push(new Divisions(k, height-divisionheight/2,10,divisionHeight));
}

for (var j=40; j<=width; j=j+50)
{
  plinko.push(new Plinko(j,75));
}
for (var j=15; j<=width-10; j=j+50) 
{
  plinko.push(new Plinko(j,175));
}
for (var j=20; j<=width-10; j=j+50) 
{
  plinko.push(new Plinko(j,250));
}
for (var j=30; j<=width-10; j=j+50) 
{
  plinko.push(new Plinko(j,325));
}


}
var particles=[];
var plink=[];
var divisions=[];



function draw() {
  background(255,255,255);  
  drawSprites();

  ground.display();
  divisions.display();
}
