  var PLAY=1
  var END=0
  var gameState=1 
var sword,gameover,fruit,monster,score=0;
  var swordImage,gameoverImage,monsterImage,fruit1Image,fruit2Image,fruit3Image,fruit4Image;
  
  function preload(){ 
  swordimage = loadImage ("sword.png"); 
  gameoverImage = loadImage ("gameover.png");
  monsterImage = loadAnimation ("alien1.png","alien2.png");
  fruit1Image = loadImage ("fruit1.png");
  fruit2Image = loadImage ("fruit2.png");
  fruit3Image = loadImage ("fruit3.png");
  fruit4Image = loadImage ("fruit4.png");
  
  }

  function setup(){   
  createCanvas(600,600);
  
  sword = createSprite(300,300,20,20);
  sword.addImage(swordimage);  
  sword.scale = 0.5;
  
  fruitGroup=createGroup();
  enemyGroup=createGroup();  
  }


  function draw(){
  background("lightblue") 
  sword.x=World.mouseX; 
  sword.y=World.mouseY;
    fruits();
    Enemy();
    if(gameState===END){
    sword.destroy();
    fruitGroup.destroyEach();
      enemyGroup.destroyEach();
    gameover=createSprite(300,300,30,30);
    gameover.addImage(gameoverImage) ; 
    }   
  if(sword.isTouching(fruitGroup)){
  fruitGroup.destroyEach();
      score=score+2  
  }
 if(sword.isTouching(enemyGroup)){
  fruitGroup.destroyEach();   
  enemyGroup.destroyEach();
   enemyGroup.setVelocityXEach=(0);
   fruitGroup.setVelocityXEach=(0)
   gameState=END
  }
  drawSprites();
  text("Score :"+score,500,20)
  
  }  
  function fruits (){
  if(World.frameCount%80===0){
  fruit=createSprite(400,200,20,20);
  fruit.scale=0.2;
  r=Math.round(random(1,4))
  if (r===1) {
  fruit.addImage(fruit1Image); 
  } else if(r===2){
  fruit.addImage(fruit2Image);   
  }else if(r===3){
  fruit.addImage(fruit3Image);
  }else if(r===4){
  fruit.addImage(fruit4Image);
  }
  fruit.y=Math.round(random(50,350));
   
  fruit.velocityX=-7;
  fruit.setLifetime=100;
  fruitGroup.add(fruit);  
  }
  }
function Enemy(){
  if(World.frameCount%200===0){
  monster=createSprite(400,200,20,20);
  monster.addAnimation("moving",monsterImage);
  monster.y=Math.round (random(100,300));
  monster.velocityX=-8
  monster.setLifetime=50;
    
  enemyGroup.add(monster);  
  }
  }


  