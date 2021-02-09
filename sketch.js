const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic : true
  }

  object = Bodies.rectangle(100,100,100,100,options);
  World.add(world,object);

  //console.log(object);
  console.log(object.position.x);
  console.log(object.position.y);

}

function draw() {
  background(130,211,101); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50); 


}

