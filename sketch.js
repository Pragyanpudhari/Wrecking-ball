const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var rope1;
var ball;
function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(500,700,1000,10);
    box1 = new Boxes(700,650,70,70);
    box2 = new Boxes(700,600,70,70);
    box3 = new Boxes(700,550,70,70);
    box4 = new Boxes(700,500,70,70);
    box5 = new Boxes(700,450,70,70);
    box6 = new Boxes(800,650,70,70);
    box7 = new Boxes(800,600,70,70);
    box8 = new Boxes(800,550,70,70);
    box9 = new Boxes(800,500,70,70);
    box10 = new Boxes(800,450,70,70);
    ball = new Ball(300,450,80,80);
   rope1 = new Rope(ball.body,{x:600, y :200});
}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
  ball.display();
  rope1.display();
}

