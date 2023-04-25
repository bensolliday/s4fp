var x=0;
var y=0;
var side= 50;
var offset = 100;
var r = 0;
function preload() { 
  octopusimg = loadImage('octopus.png');
  duckimg = loadImage('duck.png');
  bunnyimg = loadImage('bunny.png');
  catimg = loadImage('cat.png'); 
  turtleimg = loadImage('turtle.png'); 
  ow = loadImage('ow.png');
}


function setup() { 
  createCanvas(windowWidth, windowHeight);
  imagearray = [octopusimg, duckimg, bunnyimg, catimg, turtleimg];
}
  function draw() {
    frameRate(0.25);//Keeps animation less flashy
    background(255);//Black
    //Nested loop creates didstance between shapes
 for (var a=0; a<5; a++){
   for(var b=0; b<5;b++){
     size=random(80,160); // Range of growth/shrinkage
     image(imagearray[b], b * width/5, a * height/5, size, size);
     
     
   }
 } 
}

function mousePressed () {
       image(ow, mouseX, mouseY, 220, 200);
}