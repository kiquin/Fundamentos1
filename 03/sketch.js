var x = -20;
var y = 200;
var t = 0;
var r = 0;
var s = 0;
var y1 = 0;
var r1 = 0;
var r2 = 0;
var r3 = 0;
var r4 = 0;


function setup() {
  createCanvas(500, 400);
  frameRate(12);
  ellipseMode(RADIUS);
}

function draw() {
  background(255);
  strokeWeight(2);
  stroke(180);
  line(0,y+130,width,y+130);
  //cohete
  fill('red');
  noStroke();
  ellipse(245,335+y1,10,15);
  
  
  //caja
  fill(255);
  stroke(0);
  strokeWeight(4);
  rect(235,y+120,20,30);
  
  //piernas
  beginShape()
	vertex(x+15*cos(PI*t/6),y+150)
  vertex(x,y+30)
  vertex(x-15*cos(PI*t/6),y+150)
  endShape()
  
  //cuerpo
  beginShape()
  vertex(x+5,y+20)
	vertex(x+9,y+100)
  vertex(x-9,y+100)
  vertex(x-5,y+20)
  endShape()
  
  //animación  
  if(frameCount<22) {
    //cabeza
 		ellipse(1+x+2*cos(PI*t/3),y,20,20);
    //CAMINA
    x = x+10;
    t++;
  } else if(frameCount<28){
    //QUIETO
    ellipse(1+x,y,20,20)
  } else if (frameCount<32){
    //MIRA ABAJO
    ellipse(1+x+r,y+r,20,20);
    r=r+2;
  } else if(frameCount<38){
    //QUIETO
    ellipse(1+x+r,y+r,20,20);
  } else if(frameCount<43){
    //WINDUP
    ellipse(1+x+r,y+r,20,20)
    bezier(x,y+100,
           x,y+120,
           x,y+140,
           x-s,y+150)
    s=s+4;
  } else if(frameCount<49){
    //KICK
    ellipse(1+x+r,y+r,20,20)
    bezier(x,y+100,
           x-s/2,y+120,
           x-s/3,y+140,
           x-s,y+150);
    s=s-10;
  } else if(frameCount<55){
    //PAN UP
    ellipse(1+x+r,y+r,20,20)
    bezier(x,y+100,
           x-s/4,y+120,
           x-s/2,y+140,
           x-s,y+150);
    y=y+40;
  } else if(frameCount<60){
    //ROCKET UP
    y1 = y1 - 20;
  } else {
    //BOOM
    background(255)
    noFill();
    strokeWeight(20+15*sin(PI*frameCount/4));
    
    stroke('red');
  	ellipse(width/2,height/2,r1,r1);
    r1 = r1 + 40;
    
    if(frameCount>64){
      stroke('green');
  		ellipse(width/2,height/2,r2,r2);
    	r2 = r2 + 40;
    }
    
    if(frameCount>68){
      stroke('blue');
  		ellipse(width/2,height/2,r3,r3);
    	r3 = r3 + 40;
    }
    
    if(frameCount>72){
      stroke('yellow');
  		ellipse(width/2,height/2,r4,r4);
    	r4 = r4 + 40;
    }
  }
  
  /*
  if (frameCount < 84){
  	saveCanvas("miFlipbooksito_" + frameCount, 'png');
 	}
  */
    
  if(frameCount == 84){noLoop()}
  
}