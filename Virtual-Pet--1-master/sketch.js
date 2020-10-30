//Create variables here
var dog,dogImg1,dogImg2,database,foodstalk,foodVal
function preload()
{
  //load images here
  dogImg1=loadImage("Dog.png")
  dogImg2=loadImage("happydog.png")
}

function setup() {
  database=firebase.database()
  createCanvas(800, 700);
  dog=createSprite(250,300)
  dog.scale=0.15
  dog.addImage(dogImg1)
  foodstalk=database.ref("Food");
  foodstalk.on("value",readStalk)


}


function draw() {  
background("red")
if(keyDown(UP_ARROW)){
  writeStalk(foodVal)
  dog.addImage(dogImg2)
}
  drawSprites();
  //add styles here
  fill(255,255,254); 
  stroke("black"); 
  text("Food remaining : "+foodVal,170,200);
   textSize(13); 
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}

function readStalk(data){
foodVal=data.val()
}
function writeStalk(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref("/").update({Food:x})
}


