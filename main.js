var imagen = "";
var objeto = [];
var status = ""; 
function setup(){
    canavas = createCanvas(640, 420);
    canvas.center();
}
function preload(){
    imagen = loadImage("dog_cat.jpg")
}
function draw(){
    image(imagen, 0, 0, 650, 420);
    noFill();
    stroke("red");
    Text();
    rect(60, 60, 350, 350);
}