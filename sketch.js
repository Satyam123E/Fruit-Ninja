var knife,knifeImage;
var PLAY =1;
var END =0;
var gameState = PLAY;
var score;
var fruit1,fruit2,fruit3,fruit4;
var fruit1Image,fruit2Image,fruit3Image,fruit4Image
var monster,monster_Moving;
var gameOver,gameOverImage;
var gameOverSound;
var knifeSound;
score = 0;
var fruit;

function preload(){
 knifeImage = loadImage("sword.png");
 fruit1Image = loadImage("fruit1.png"); 
 fruit2Image = loadImage("fruit2.png");
 fruit3Image = loadImage("fruit3.png"); 
 fruit4Image = loadImage("fruit4.png");
 monster_Moving = loadAnimation("alien1.png","alien2.png")
 gameOverImage = loadImage("gameover.png") 
 knifeSound = loadSound("knifeSwooshSound.mp3")
 //gameOverSound = loadSound("gameover.mp3")
}

function setup(){
createCanvas (400,400);

  knife = createSprite(200,200,10,10) 
  knife.addImage(knifeImage)
  knife.scale=0.4;
  
textSize = 20; 
  
fruitGroup = createGroup();
oppGroup = createGroup();
}



function draw(){

background("lightBlue") 
text("Score : " + score , 300,30);  

  
  if(gameState === PLAY){
  knife.x = World.mouseX;
  knife.y = World.mouseY;
  
 
  enemy();
  
  var select_fruit=Math.round(random(1,4));
    
      if(World.frameCount % 80 ===0){
    if (select_fruit == 1){
         fruit1();
    }
     else if(select_fruit == 2){
        fruit2()
  }
     else if(select_fruit == 3){
       fruit3()
     }               
     else{
       fruit4()
     } 
  }
   
  if(knife.isTouching(fruitGroup)){
    fruitGroup.destroyEach();
    score=score+1;
    knifeSound.play();
  }
  
  
  if(knife.isTouching(oppGroup)){
    gameState = END;
  }
}
  
 else if (gameState === END){
   fruitGroup.destroyEach();
   oppGroup.destroyEach();
   fruitGroup.setVelocityXEach(0);
   oppGroup.setVelocityXEach(0);
   knife.addImage(gameOverImage);
   knife.x = 200;
   knife.y = 200;
  // gameOverSound.play();
 } 
  
  drawSprites();
}

function enemy(){
if(World.frameCount % 200 === 0){
  monster = createSprite(400,200,20,20);
  monster.addAnimation("Moving",monster_Moving)
  monster.y=Math.round(random(100,300));
  monster.velocityX = -8;
  monster.setLifeTime=150;
  oppGroup.add(monster);
}    
}


function fruit1(){
  var fruit1 = createSprite(400,0,10,10)
  fruit1.addImage(fruit1Image);
  fruit1.y = Math.round(random(50,350));
  fruit1.velocityX = -6;
  fruit1.lifetime = 100;
  fruit1.scale = 0.2;
  fruitGroup.add(fruit1);
}


function fruit2(){
  var fruit2 = createSprite(400,20,10,10)
  fruit2.addImage(fruit2Image);
  fruit2.y = Math.round(random(50,350));
  fruit2.velocityX = -6;
  fruit2.lifetime = 100;
  fruit2.scale = 0.2;
  fruitGroup.add(fruit2)

}


function fruit3(){
  var fruit3 = createSprite(400,20,10,10)
  fruit3.addImage(fruit3Image);
  fruit3.y = Math.round(random(50,350));
  fruit3.velocityX = -6;
  fruit3.lifetime = 100;
  fruit3.scale = 0.2;
  fruitGroup.add(fruit3)
}


function fruit4(){
  var fruit4 = createSprite(400,20,10,10)
  fruit4.addImage(fruit4Image);
  fruit4.y = Math.round(random(50,350));
  fruit4.velocityX = -6;
  fruit4.lifetime = 100;
  fruit4.scale = 0.2;
  fruitGroup.add(fruit4)
}