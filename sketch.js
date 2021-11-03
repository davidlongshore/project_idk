var canvas;
var music;
var edges;
var s1, s2, s3, s4, box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    s1=createSprite(100, 580, 200, 20);
    s1.shapeColor='orange';
    s2=createSprite(300, 580, 200, 20);
    s2.shapeColor='red';
    s3=createSprite(500, 580, 200, 20);
    s3.shapeColor='green';
    s4=createSprite(700, 580, 200, 20);
    s4.shapeColor='blue';
    


    //create box sprite and give velocity
    box=createSprite(400, 300, 30, 30);
    box.velocityX=4;
    box.velocityY=6;

}

function draw() {
    //background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    drawSprites();
    
    
if(box.isTouching(s1) && box.bounceOff(s1)){
        box.shapeColor='orange';
        music.play();
    }
    if(box.isTouching(s2) && box.bounceOff(s2)){
        box.shapeColor='red';
        music.stop();
    }
    if(box.isTouching(s3) && box.bounceOff(s3)){
        box.shapeColor='green';
    }
    if(box.isTouching(s4) && box.bounceOff(s4)){
        box.shapeColor='blue';
    }
    box.bounceOff(edges);
    box.bounceOff(s1);
    box.bounceOff(s2);
    box.bounceOff(s3);
    box.bounceOff(s4);
    //add condition to check if box touching surface and make it box

}