var a = 8;
var table;
var img;

function preload(){
	table = loadTable('dummy.csv', 'csv', 'header');
  img = loadImage('hoja.png');
}

function setup() {
  createCanvas(1280, 720);
  //print(table.getColumn('year'));
  //print(table.getColumn('value'));
}

function draw() {
  background(220);
  push();
  scale(1);
  //translate(0.5*mouseX,mouseY);
	plot(table,20-1.3*mouseX,400);
  pop();
}

function plot(data,x,y) {
	var years = table.getColumn('year');
  var values = table.getColumn('value');
  
  for (var r = 0; r < table.getRowCount(); r++){
  	boxes(values[r],x + r*9*1.5*a,y);
    text(years[r],x + r*9*1.5*a,y+2*a);
  }
  
  line(x,y+2,x+r*9*1.5*a,y+2);
}

function boxes(num, x, y){
	
	var ancho = min(8,num);
	var filas = floor(num/ancho);
	var ultimaCol = num%ancho;
	
	for(var i=0; i<filas; i++) {
		for(var j=0; j<ancho; j++) {
			//rect(x+j*a*1.5,y-a-1.5*a*i,a,a);
      image(img,x+j*a*1.5,y-a-1.5*a*i,a,a);
		}
		if(i == filas-1){
			i++;
			for(j=0; j<ultimaCol; j++) {
				//rect(x+j*a*1.5,y-a-1.5*a*i,a,a);
        image(img,x+j*a*1.5,y-a-1.5*a*i,a,a);
			}
		}
	}
}