const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var myEngine, myWorld;
var ground;
var ball;
var box1;
var box;

function setup(){
  var canvas=createCanvas(400,400);
  myEngine=Engine.create();
  myWorld=myEngine.world;

 
 /*var ball_options={
    
    restitution:2.0
  }
  ball= Bodies.rectangle(200,100,20,20, ball_options);
  World.add(myWorld,ball);*/

  box=new Box(100, 100, 50, 50);
  box2=new Box(120, 200, 20, 70);

  ground=new Ground(200 , 390 , 400 , 20);
//  console.log(object);
  //console.log(object.position.x);
  //console.log(object.position.y);

}
function draw()
{
  background(0);
  rectMode(CENTER);
  Engine.update(myEngine);
   
  
  box.display();
  box2.display();
  ground.display();
 //rect(ball.position.x,ball.position.y,20,20)
}
