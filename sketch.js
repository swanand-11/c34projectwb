const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(1900,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(800,height,2150,20);  
    box1 = new box(1250,200,250,250)
    box2 = new box(1250,450,250,250)
    box3 = new box(1250,700,250,250)
    Ball = new ball(200,200,80,80)
    Rope = new rope(Ball.body,{x:700,y:50})
    
}

function draw(){
    background("white");  
    Engine.update(engine);
    ground.display();  
    box1.display();
    box2.display();
    box3.display();
    Rope.display();
    Ball.display();

}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(Ball.body, {x: mouseX , y: mouseY});
}