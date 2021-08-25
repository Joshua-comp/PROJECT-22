const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
let engine
let world
let bob1
let bob2
let bob3
let bob4
let bob5




function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);

	var ball_options = {
		restitution: 0.8,
		isStatic:true
		
	  }

	  bob1 = Bodies.circle(320,350,32,ball_options);
	  World.add(world,bob1);
	  bob2 = Bodies.circle(360,350,32,ball_options);
	  World.add(world,bob2);
	  bob3 = Bodies.circle(400,350,32,ball_options);
	  World.add(world,bob3);
	  bob4 = Bodies.circle(440,350,32,ball_options);
	  World.add(world,bob4);
	  bob5 = Bodies.circle(480,350,32,ball_options);
	  World.add(world,bob5);
	 var con1 = Matter.Constraint.create({
		bodyA:roof,
		pointA:{x:0,y:0},
		bodyB:bob1,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });


	World.add(world,con1);
	var con2 = Matter.Constraint.create({
		bodyA:roof,
		pointA:{x:0,y:0},
		bodyB:bob2,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });


	World.add(world,con2);
	var con3 = Matter.Constraint.create({
		bodyA:roof,
		pointA:{x:0,y:0},
		bodyB:bob3,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });


	World.add(world,con3);
	var con4 = Matter.Constraint.create({
		bodyA:roof,
		pointA:{x:0,y:0},
		bodyB:bob4,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });


	World.add(world,con4);
	var con5 = Matter.Constraint.create({
		bodyA:roof,
		pointA:{x:0,y:0},
		bodyB:bob5,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });


	World.add(world,con5);
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");
  keyPressed()


  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
 
  ellipse(bob1.position.x,bob1.position.y,32);
  ellipse(bob2.position.x,bob2.position.y,32);
  ellipse(bob3.position.x,bob3.position.y,32);
  ellipse(bob4.position.x,bob4.position.y,32);
  ellipse(bob5.position.x,bob5.position.y,32);
//push();
  strokeWeight(2);
  stroke(255);
  line(roof.position.x-80,roof.position.y,bob1.position.x,bob1.position.y);
  line(roof.position.x-40,roof.position.y,bob2.position.x,bob2.position.y);
  line(roof.position.x,roof.position.y,bob3.position.x,bob3.position.y);
  line(roof.position.x+40,roof.position.y,bob4.position.x,bob4.position.y);
  line(roof.position.x+80,roof.position.y,bob5.position.x,bob5.position.y);
  
 // pop();

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.

}
function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(bob1,bob1.position,{x:-50,y:-45});
    }
}

