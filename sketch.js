var BG;


function preload (){
BG = loadImage ("BG.jpg");
}
function setUp(){
    canvas = createCanvas (800,1200)
}
function draw (){
    background (BG);
}