var geoManImg, spikeImg, tallRectImg, mediumRectImg, smallRectImg, groundImg
var geoMan, ground

function preload() {
  geoManImg = loadImage("Images/GeoMan.png")
  spikeImg = loadImage("Images/spike.png")
  tallRectImg = loadImage("Images/tallRect.jpg")
  mediumRectImg = loadImage("Images/mediumRect.jpg")
  smallRectImg = loadImage("Images/smallRect.jpg")
  groundImg = loadImage("Images/bg.jpg")
}

function setup() {
  createCanvas(1400,800);
  var geoMan = createSprite(50, 430, 10, 10);
  geoMan.addImage(geoManImg)
  geoMan.scale = 0.25

  var ground = createSprite(700, 400, 1400, 800)
  ground.addImage(groundImg)
  ground.scale = 2.5
}

function draw() {
  background(30,260,105);  
  drawSprites();
}