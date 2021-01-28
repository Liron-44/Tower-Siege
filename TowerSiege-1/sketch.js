const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
const World= Matter.World;
const Bodies = Matter.Bodies;
var stand;
var box1, box2, box3, box4, box5, box6, box7, box8, box9;




function setup(){
stand = new Ground()
box1 = new Box(330, 235, 30, 40);
box2 = new Box(360, 235, 30, 40);
box3 = new Box(390, 235, 30, 40);
box4 = new Box(420, 235, 30, 40);
box5 = new Box(450, 235, 30, 40);
box6 = new Box(360, 190, 30, 40);
box7 = new Box(390, 190, 30, 40);
box8 = new Box(420, 190, 30, 40);
box9 = new Box(390, 155, 30, 40);

slingshot = new SlingShot(this.polygon, {x:100, y:200});
}
