var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 var background_Img, man_img, man_dying, man_attack, man,invis_sprite,question,questionI;
var snake, snakeImg, minotour, minotourImg;
var key1, key2, key3, key4;
var key1Img, key2Img, key3Img, key4Img;
var form;
var gameState = "start";
var score =0;

var m1,m2,m3,m4,m5,m6,m7,m8,m10,m11,m12;

function preload(){



  background_Img=loadImage("images/download.jpeg");
 man_img=loadImage("images/knight.png");
  man_dying=loadImage("images/knight.png");
  man_attack=loadImage("images/knight.png");
questionI = loadImage("images/question.png");

key1Img = loadImage("images/key.png");

key2Img = loadImage("images/key.png");

key3Img = loadImage("images/key.png");

key4Img = loadImage("images/key.png");


snakeImg = loadImage("images/snake.png");
minotourImg = loadImage("images/minotour.png");

}

function setup() {
  createCanvas(displayWidth*2,displayHeight*2);
  engine = Engine.create();
  world = engine.world;
  form  = new Form();


m1 = createSprite(800,300,10,500);
m2 = createSprite(450,700,700,10);
m3 = createSprite(450,50,700,10);
m4 = createSprite(100,450,10,500);
m5 = createSprite(600,600,10,200);
m6 = createSprite(400,550,10,300);
m7 = createSprite(200,600,10,200);
m8 = createSprite(350,400,100,10);
m10 = createSprite(550,500,100,10);
m11 = createSprite(750,400,100,10);
m12 = createSprite(750,150,100,10);
m13= createSprite(500,400,10,400);
m14= createSprite(550,300,100,10);
m15= createSprite(350,600,100,10);
m16= createSprite(400,150,10,200);
m17= createSprite(350,250,100,10);
m18= createSprite(300,225,10,50);
m19= createSprite(150,200,100,10);
m20= createSprite(150,300,100,10);
m21= createSprite(750,150,100,10);
m22= createSprite(750,150,100,10);
m23= createSprite(750,150,100,10);
m24= createSprite(750,150,100,10);
m25= createSprite(750,150,100,10);
m26= createSprite(750,150,100,10);
m27= createSprite(750,150,100,10);


key1  = createSprite(45,90,10,10);
key1.addImage("Key1", key1Img);
key1.scale = 0.10;
key2  = createSprite(3000,90,10,10);
key2.addImage("Key2", key2Img);
key2.scale = 0.10;
key3  = createSprite(45,1750,10,10);
key3.addImage("Key3", key3Img);
key3.scale = 0.10;
key4  = createSprite(3000,1750,10,10);
key4.addImage("Key4", key4Img);
key4.scale = 0.10;




invis_sprite = createSprite(3000,0,500,500);
invis_sprite.visible=false;
snake = createSprite();
minotour = createSprite();
question = createSprite(2800,200,500,500);
question.addImage("questioning", questionI);
question.visible = false;
question.scale = 2;

//var background_display = createSprite(750,400,20,20);
 man = createSprite(1000,100,20,20);



  //background_display.addImage("Thebackground",background_Img);
  //background_display.scale = 2;
  man.scale = 0.10;
 man.addImage("walking",man_img);
  
  
}
 


function draw() {
  background("black");
 
  Engine.update(engine);
  
if(keyDown(39))
{
man.x += +5;

}

if(keyDown(37))
{
man.x += -5;

}
if(keyDown(40))
{
man.y += +5;

}
if(keyDown(38))
{
man.y += -5;

}



man.collide(m1);
man.collide(m2);
man.collide(m3);
man.collide(m4);
man.collide(m5);
man.collide(m6);
man.collide(m7);
man.collide(m8);
man.collide(m14);
man.collide(m10);
man.collide(m11);
man.collide(m12);
man.collide(m13);
man.collide(m15);
man.collide(m16);
man.collide(m17);
man.collide(m18);
man.collide(m19);
man.collide(m20);
man.collide(m21);
man.collide(m22);
man.collide(m23);
man.collide(m24);
man.collide(m25);
man.collide(m26);
man.collide(m27);

man.setCollider("circle",0,0,500);

if(man.isTouching(key4)){

score++;
console.log(score);
  }
  if(man.isTouching(key2)){

    score++;
    console.log(score);
    }
    if(man.isTouching(key1)){

      score++;
      console.log(score);
      
      }

      if(man.isTouching(key3)){

        score++;
        console.log(score);
        }
  if(man.isTouching(invis_sprite)){

  question.visible = true;
gameState = "answer";
console.log(gameState);
  }
  fill("red");
  textSize(30);
text("Score: " +score, 1000,20);
form.display();
drawSprites();
}