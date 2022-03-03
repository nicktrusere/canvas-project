var font;

function preload(){
  font = loadFont()
function setup(){
  createCanvas(800, 300);
  background(51);
  textFont(font);
  textSize(128);
  text('train',10,200);
  fill(255);
  noStroke();
}

function draw
