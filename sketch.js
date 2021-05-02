const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world; 

var object;
var stand1,stand2;
var pentagon;
var backgroundImg;
var bg;
 



function preload() {
  getTime();
 
 }

function setup() {
  var canvas = createCanvas(1200,400);
 

  engine = Engine.create();
  world = engine.world;
 ground = new Ground(450,390,900,20);
pentagon = new Pentagon(50,200,20)
launcher = new Launcher(pentagon.body,{x:100,y:200})
 stand1 = new Stand(390,300,250,10)
  stand2 = new Stand(730,200,250,10);
  block1 = new Box(300,275,30,40) ;
  block2 = new Box(330,275,30,40);
  block3 = new Box(360,275,30,40);
  block4  = new Box(390,275,30,40);
  block5  = new Box(420,275,30,40) ;
  block6  = new Box (450,275,30,40);
  block7  = new Box (480,275,30,40)
  block8 = new Box(330,235,30,40) ;
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12= new Box(450,235,30,40) ;
  block13 = new Box(360,195,30,40) ;
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);
  block16 = new Box(390,155,30,40);

//second block

bk1 = new Box(640,175,30,40) ;
bk2 = new Box(670,175,30,40);
bk3 = new Box(700,175,30,40);
bk4  = new Box(730,175,30,40);
bk5  = new Box(760,175,30,40) ;
bk6  = new Box (790,175,30,40);
bk7  = new Box (810,175,30,40)
bk8 = new Box(670,135,30,40) ;
bk9 = new Box(700,135,30,40);
bk10 = new Box(730,135,30,40);
bk11 = new Box(760,135,30,40);
bk12= new Box(790,135,30,40) ;
bk13 = new Box(700,95,30,40) ;
bk14 = new Box(730,95,30,40);
bk15 = new Box(760,95,30,40);
bk16 = new Box(730,55,30,40);


}


function draw() {
  if(backgroundImg) {
    background(backgroundImg);

  } 
  Engine.update(engine);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  bk1.display();
  bk2.display();
  bk3.display();
  bk4.display();
  bk5.display();
  bk6.display();
  bk7.display();
  bk8.display();
  bk9.display();
  bk11.display();
  bk12.display();
  bk10.display();
  bk13.display();
  bk14.display();
  bk15.display();
  bk16.display();
  launcher.display();
  pentagon.display();
ground.display();
stand2.display();
stand1.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(pentagon.body,{x:mouseX,y:mouseY}) 
}

function mouseReleased(){
  launcher.fly();
}

function keyPressed(){
  if(keyCode===RIGHT_ARROW){
      launcher.attach(pentagon)
  }
}



async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON = await response.json();
  console.log(responseJSON );

var datetime = responseJSON.datetime;
var hour = datetime.slice(10,13)
console.log(hour );
if(hour>=06&&hour<=18){
  bg = "bg.png" 
} 
else{
  bg = " bg2.png" 

}
backgroundImg = loadImage(bg)

}








 