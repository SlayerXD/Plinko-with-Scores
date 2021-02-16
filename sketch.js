const Engine = Matter.Engine
const World = Matter.World
const Events = Matter.Events
const Bodies = Matter.Bodies;

var gameState = "start";
var PLAY = 1;
var START = 2;
 
var particles = [];
var plinkos = [];
var divisions =[];

var score = 0;
var particle;
var turn = 0;
var count = 0;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  textSize(30);
  fill("blue")

  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");

  textSize(25)
  fill("yellow");
  text("500", 20, 500);

  textSize(25)
  fill("yellow");
  text("500", 100, 500);

  textSize(25)
  fill("yellow");
  text("500", 180, 500);

  textSize(25)
  fill("yellow");
  text("200", 260, 500);

  textSize(25)
  fill("yellow");
  text("200", 340, 500);

  textSize(25)
  fill("yellow");
  text("200", 420, 500);

  textSize(25)
  fill("yellow");
  text("200", 500, 500);

  textSize(25)
  fill("yellow");
  text("100", 580, 500);

  textSize(25)
  fill("yellow");
  text("100", 660, 500);

  textSize(25)
  fill("yellow");
  text("100", 740, 500);


  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
 
if(particle!=null) {
  particle.display();
  if (particle.body.position.y>600) {

    if(particle.body.position.x < 180) {
      score=score+500;
      particle=null;
      if (count>= 5) gameState = "end";
    }
    
}
}

if(particle!=null) {
  particle.display();
  if (particle.body.position.y>600) {

    if(particle.body.position.x > 180 && particle.body.position.x < 500) {
      score=score+200;
      particle=null;
      if (count>= 5) gameState = "end";
    }
    
}
}
if(particle!=null) {
  particle.display();
  if (particle.body.position.y>600) {

    if(particle.body.position.x > 180 && particle.body.position.x > 500) {
      score=score+100;
      particle=null;
      if (count>= 5) gameState = "end";
    }
    
}
}



   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
}

function mousePressed() {
  if(gameState!=="end") {
    text("Game Over", 200,200)


  
    count++;
    particle=new Particle(mouseX, 10, 10, 10);
  }
}