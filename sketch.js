var END = 0;
var PLAY = 1;
var gameState = 1;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  

}



function setup() {
 monkey=createSprite(80,315,20,20);
 monkey.addAnimation("moving", monkey_running);
 monkey.scale=0.1;
  
 ground = createSprite(400,350,900,10);
 
 
  
  
 obstacleGroup = createGroup();
 FoodGroup = createGroup();
}


function draw() {
 background("white");
 createCanvas(600,600);
  
 stroke("white");
 textSize(20);
 fill("white");
 text("score:"+score,500,50); 
  
 stroke("black");
 textSize(20);
 fill("black");
 
  text("Survival Time"+ survivalTime, 100,50);
  if (gameState === 1){
    monkey.velocityY = monkey.velocityY + 0.8
    survivalTime=Math.ceil(frameCount/frameRate());
    
    
  }
    
  
  if (gameState === 0){
    monkey.velocityY = 0;
    obstacleGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    
  }
  if (monkey.isTouching(obstacleGroup)){
    gameState = 0;
  }
  
  
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
    
  
  
  
  monkey.collide(ground)
  spawnFood();
  spawnObstacle();
  drawSprites();
}
function spawnFood(){
  if (frameCount % 100 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -5;
    banana.scale =0.1;
    banana.setLifetime = 100
      
    FoodGroup.add(banana);
 }
}
function spawnObstacle(){
  if (frameCount % 80 === 0){
    obstacle = createSprite(600,315,20,60);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15
    obstacle.velocityX = -8
    obstacle.setLifetime=100
    
    
   obstacleGroup.add(obstacle);
 }
}

