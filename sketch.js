const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var world, engine;
var t = 10;
var particle1=[];
var plinkos =[];
var divisions = [];

function setup(){
    createCanvas(480, 800);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(240, 795, 480, 10);

    for(var j=40;j<=width;j=j+50){
        plinkos.push(new Plinko(j, 400))
    }

    for(var j=65;j<=width;j=j+50){
        plinkos.push(new Plinko(j, 470))
    }

    for(var k=30;k<=width;k=k+80){
        divisions.push(new Division(k, 725))
    }
}

function draw(){
    background("black");
    Engine.update(engine);
    
    ground1.display();

    if(frameCount%60===0){
        particle1.push(new particle(random(width/2-10, width/2+10), 10, 10));
    }


    for(var i=0;i<particle1.length; i++){
        particle1[i].display();
    }

    for(var j=0;j<plinkos.length;j++){
        plinkos[j].display();
    }

    for(var k=0;k<divisions.length;k++){
        divisions[k].display();
    }

    console.log(divisions[k]);
}