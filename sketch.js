var plane, planeimg;
var cloud1, cloud1img, cloud2,cloud2img;
var bird1img, bird2img;
var invisibleGround;
var gameState="play";
var obstaclesGroup;
var bird1;

function preload(){
 planeimg=loadImage("planecopy.png");
 cloud1img=loadImage("cloud.png");
 cloud2img=loadImage("nubes.png");
 bird1img=loadImage("bird.png");
 bird2img=loadImage("birds2.png");

}

function setup() {
 createCanvas(600,360);
 plane = createSprite(95,150);
 plane.addImage(planeimg);
 plane.scale=0.1;
 invisibleGround = createSprite(270,360,windowWidth,10);
 obstaclesGroup=createGroup();
}

function draw() {
    background("Deepskyblue");
    text("X "+mouseX+","+"Y "+mouseY,mouseX,mouseY);
    invisibleGround.visible=true;

    plane.setCollider("rectangle",0,0,100,200,90);
    plane.debug=true;



    
    
    
    if(invisibleGround.isTouching(plane)){
        gameState = "over";

    }

    if(gameState == "play"){
      plane.y=mouseY;
      plane.visible

    }else if(gameState == "over"){
        //obstaclesGroup.velocityX=0;
        console.log("terminó");
        plane.visible=!false;
    }

    
    obstacles();

    drawSprites();
    
}

function obstacles(){
    
 if(frameCount%65 == 0){
     bird1 = createSprite(550,165,10,30);
    bird1.velocityX=-4;

    var rando = Math.round(random(1,2));
        switch(rando){
        case 1: bird1.addImage(bird1img);
                break;
        case 2: bird1.addImage(bird2img);
                break;

        default:break;
         }
    bird1.lifetime = 250;
    bird1.scale = 0.5;
    bird1.depth = plane.depth+1;
    //plane.depth = plane.depth+1;
    obstaclesGroup.add(bird1);
 }
}

