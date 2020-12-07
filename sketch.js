//Create variables here
var dog,dogImg,happyDogImg,happyDog,database,foodS,foodStock;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  dog = createSprite(250,250,20,20);
  dog.addImage(dogImg);

  foodStock = databse.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }

  drawSprites();

  //add styles here

  textSize(30);
  fill(255);
  text("Note: Press UP_ARROW Key to Feed Drago Milk",150,25);

  textSize(25);
  fill(255);
  text("Food Remaining: "+Food,100,100);
}

function readStock(data) {
  foodS = data.val();
}

function writeStock(x) {

  if(x<=0) {
    x=0;
  }
  else {
    x = x-1;
  }
  database.ref('/').update({
    Food:x
  })
}