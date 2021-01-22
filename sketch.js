var knife,knifeImage,score,fruitGroup,monsterGroup,fruit,monster,fruit1,fruit2,fruit3,fruit4,alien,gameover;

var PLAY = 1;
var END = 0;
var gameState = 1;


function preload(){
  knifeImage=loadImage("sword.png");
  
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  
  alien=loadAnimation("alien1.png","alien2.png");
  
  gameover=loadImage("gameover.png");
  
}

function setup(){
  createCanvas(600,600);
  
  knife = createSprite(40,200,20,20);
  knife.addImage(knifeImage);
  knife.scale = 0.7;
  
  score = 0;
  
  fruitGroup = createGroup();
  monsterGroup = createGroup();
}

function draw(){
  
  background("lightblue");
  
  if(gameState === 1){
  knife.y=World.mouseY;
  knife.x=World.mouseX;
    
     monsters();
     fruits();
    
  if(fruitGroup.isTouching(knife)){
     fruitGroup.destroyEach();
     score=score+1;
     }
     else{  
    if(monsterGroup.isTouching(knife)){
       gameState=0;
       fruitGroup.destroyEach();
       monsterGroup.destroyEach();
       fruitGroup.setVelocityXEach(0);
       monsterGroup.setVelocityXEach(0);
       
       knife.addImage(gameover);
       knife.x = 200;
       knife.y = 200;
       }
       }
   }
  
  
  drawSprites();
  
  text("score:"+score,300,30);
}

function fruits(){
  if(World.frameCount%80===0){
     fruit = createSprite(400,200,20,20);
     fruit.scale=0.2;
     r = Math.round(random(1,4));
     if(r == 1){
        fruit.addImage(fruit1);
       }
     if(r == 2){
        fruit.addImage(fruit2);
       }
     if(r == 3){
        fruit.addImage(fruit3);
       }
     if(r == 4){
        fruit.addImage(fruit4);
       }
    
     fruit.y=Math.round(random(50,340));
    
     fruit.velocityX=-7;
     fruit.setLifetime=100;
    
     fruitGroup.add(fruit);
   } 
}

function monsters(){
  if(World.frameCount%200===0){
     monster= createSprite(400,200,20,20);
     monster.addAnimation("moving",alien);
     monster.Y=Math.round(random(100,300));
     monster.velocityX=-8;
     monster.setLifetime=50;
     monsterGroup.add(monster);
   }
}



