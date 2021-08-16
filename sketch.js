const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var ground,circle;

function setup()
{
var canvas =createCanvas(800,800)
engine=Engine.create()
world=engine.world;

ground=new Ground(300,500,600,30);

circle=new Circle(20,20,5);

}

function draw()
{

background("lightBlue");
rectMode(CENTER)


Engine.update(engine);
ground.display();
circle.display();
}