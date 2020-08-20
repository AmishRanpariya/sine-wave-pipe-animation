var spc = 3,
  r, j = 0;
var shift=90.5;

function setup() {
createCanvas(windowWidth, windowWidth);
  //  createCanvas(400,400);
}

function draw() {
  background(200);
 // j=map(mouseX,0,width,0,0.5);
//  spc=map(mouseY,0,height,1,10);
  wavedraw(height/18,width/6*1, height, 180,j);
  wavedraw(height/18,width/6*2,height,shift,j);
  wavedraw(height/18,width/6*3,height,180,j);
  wavedraw(height/18,width/6*4,height,shift,j);
  wavedraw(height/18,width/6*5,height,180,j);
  j-=0.2;
  
}

function wavedraw(strt,strtx, endof, phs, stp = 0.05) {
  stroke(0);
  strokeWeight(3);
  fill(255, 130);
 // var j;
  for (var i = strt; i < endof / 3-height/18; i += spc) {
    r = cos(i*2 + j+phs*2) * width/18+width/9-width/24;

    ellipse(strtx, i * 3, r, r * 0.6);


  }
  //j += stp;
}