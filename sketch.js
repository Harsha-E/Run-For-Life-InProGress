var canvas, bgImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0
var database;

var form, player, game;
var cars, car1, car2, car3, car4;
var car1Img, car2Img, car3Img, car4Img;
var track;
var carsAtEnd;
var swimmer, swimmerImg;
var bg1, bg2, water_img;
var bg1img, bg2img, bg3img;
var water = [];
var length = 13500;
var PIX_PER_M = 250
var POOL_LENGTH = 50 * PIX_PER_M // Pool length in pixels
var 
function preload(){

  bg1 = loadImage("Images/2Full_Background2.png");
  bg2 = loadImage("Images/Full_Background.png");
  water_img = loadImage("Images/water.png");

  swimmerImg =loadAnimation("Images/tile000.png","../Images/tile001.png","../Images/tile002.png","../Images/tile003.png")

  

}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  
  database = firebase.database();
  
  swim_distance = 0;
  background('rgba(86, 210, 255, 0.4)');
  game = new Game();
  game.getState();
  game.start();
}

function draw() {

  createCanvas(13500, 600);

  if(playerCount === 4){
    game.update(1);
  } 
  if(gameState === 1){
    clear();
    game.play();
  }
    
  if(gameState === 2 && carsAtEnd === 4){
    clear();
    game.displayRanks();
  }

  drawSprites();
}


function spawnLetters(){
  if (frameCount % 60 === 0){
    var letters = createSprite(600,165,10,40);
    letters.velocityX = -6;
    letters.scale = 0.5;
    letters.lifetime = 300;
 
    
     // //generate random letterss
     var rand = Math.round(random(1,26));
     switch(rand) {
       case 1: letters.addImage(letters1);
               break;
       case 2: letters.addImage(letters2);
               break;
       case 3: letters.addImage(letters3);
               break;
       case 4: letters.addImage(letters4);
               break;
       case 5: letters.addImage(letters5);
               break;
       case 6: letters.addImage(letters6);
               break;
       case 7: letters.addImage(letters7);
               break;
       case 8: letters.addImage(letters8);
               break;
       case 9: letters.addImage(letters9);
               break;
       case 10: letters.addImage(letters10);
               break;
       case 11: letters.addImage(letters11);
               break;
       case 12: letters.addImage(letters12);
               break;
       case 13: letters.addImage(letters13);
               break;
       case 14: letters.addImage(letters14);
               break;
       case 15: letters.addImage(letters15);
               break;
       case 16: letters.addImage(letters16);
               break;
       case 17: letters.addImage(letters17);
               break;
       case 18: letters.addImage(letters18);
               break;
       case 19: letters.addImage(letters19);
               break;
       case 20: letters.addImage(letters20);
               break;
       case 21: letters.addImage(letters21);
               break;
       case 22: letters.addImage(letters22);
               break;
       case 23: letters.addImage(letters23);
               break;
       case 24: letters.addImage(letters24);
               break; 
       case 25: letters.addImage(letters22);
               break;
       case 26: letters.addImage(letters23);
               break;                                      
       default: break;
     }
    
     //assign scale and lifetime to the letters           
     
    
    //add each letters to the group
    letterssGroup.add(letters);
  }
}