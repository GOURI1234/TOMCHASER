var mouse , mouseImg ;
var cheese , cheeseImg,cheeseGroup ;
var backg, backg_Img ;
var cat , cat_Img, catGroup;
var gameSound,whoho_Sound,over_Sound;
var gameState = "play";
var score = 0;

function preload(){
  
  mouseImg= loadImage("jerry.png");
  cheeseImg = loadImage("cheese.png");
  backg_Img = loadImage("bg_1.jpg");
  cat_Img= loadImage("tom.png");
  gameSound = loadSound("Sneaky-cartoon-footsteps.mp3");
  whoho_Sound = loadSound("Cartoon-woohoo.mp3");
  over_Sound = loadSound("Cartoon-game-ending.mp3")
}

function setup() {
  createCanvas(600,600);
  gameSound.loop();
  
  backg = createSprite(300,300,400,400);
  backg.scale = 1.5;
  backg.addImage(backg_Img);
  backg.velocityY = 2;
  
  mouse = createSprite(300,550,20,50);
  mouse.scale = 0.04;
  mouse.addImage("mice",mouseImg );
  
  cheeseGroup = new Group();
  catGroup = new Group();
}

function draw() {
    background("black");
  
  if (mouse.isTouching(cheeseGroup)){
    score = score + 2;
    cheeseGroup.destroyEach();
    whoho_Sound.play();
  }
  
  if (mouse.isTouching(catGroup)){
    gameState = "end";
    over_Sound.play();
  }
  
  if (gameState === "play"){  
       
    if (backg.y>200){
    backg.y = 0;
  }
  
   if (keyDown("left_Arrow")){
        mouse.x = mouse.x -5;
    }
    if (keyDown("right_Arrow")){
        mouse.x = mouse.x +5;
    }
    
  spwanCheese();
  spwanCat();
  drawSprites();
  }
  
  if (gameState === "end"){
    stroke("red");
    fill("white");
    textSize(50);
    text("GAME OVER",200,300);
  }
  stroke ("white");
  fill("white");
  textSize (20);
  text("SCORE: " + score,100,50);
}

function spwanCheese(){
  if (frameCount % 140 === 0){
    cheese = createSprite(100,-10);
    cheese.addImage(cheeseImg);
    cheese.scale = 0.03;
    cheese.x = Math.round(random(120,400));
    cheese.velocityY = 5;
    cheeseGroup.add(cheese);
    cheese.lifetime= 300;
  }
}

function spwanCat(){
  if (frameCount% 140 === 0){
   cat = createSprite(300,-5);
    cat.addImage(cat_Img);
    cat.scale = 0.25;
    cat.x = Math.round(random(220,400));
    cat.velocityY = 6;
    catGroup.add(cat);
    cat.lifetime = 300;
  }
}