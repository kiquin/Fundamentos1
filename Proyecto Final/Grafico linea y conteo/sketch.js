var numero = 0;
var cut = 0;
var a = 0;
var b = 0;

function preload() {
	desp = loadTable('desplazados.csv', 'csv', 'header');
	acc = loadTable('acumulados.csv', 'csv', 'header');

}

function setup() {
	createCanvas(1280, 720);
	frameRate(60);
}

function draw() {
	background(0);

	switch (cut) {
		case 0:
			if(frameCount > 120){
			//Grafica
			linePlot(desp, 290, 550, 0.6)

			//Texto
			push()
			textFont('Helvetica');
			textAlign(CENTER);
			textSize(144);
			fill(255);

			text(numero, width / 2, 300)
			if (numero < 253000) {
				numero += 1138
				if (numero > 253000) {
					numero = 253000
				}
			}
			pop()
			
			//Slide in
			push()
			fill(0)
			rect(290+a,430,720,120)
						if(b>700){
			a+=7}
			
			rect(290+b,550,720,120)
			b+=30
			pop()
			}
			break;
			
		case 1:
			if(frameCount > 120){
//Grafica
			linePlot(acc, 290, 550, 0.6)
			push()
			textFont('Helvetica');
			textAlign(CENTER);
			textSize(144);
			fill(255);
			
			//Texto
			text(numero, width / 2, 300)
			if (numero < 7582085) {
				numero += 21588
				if (numero > 7582085) {
					numero = 7582085
				}
			}
			pop()
			
						//Slide in
			push()
			fill(0)
			rect(290+a,430,720,120)
						if(b>700){
			a+=7}
			
			rect(290+b,550,720,120)
			b+=30
			pop()
			}
	}
}

function linePlot(data, x, y, scaley) {
	var years = data.getColumn('year');
	var values = data.getColumn('value');
	var ancho = 700;
	var step = ancho / (data.getRowCount() - 1);

	stroke(255)
	line(x, y + 20, x + ancho, y + 20)

	fill(255)
	noStroke()
	textFont('Helvetica');
	textSize(20);
	textAlign(LEFT);
	text(years[0], x, y + 50);
	textAlign(RIGHT);
	text(years[data.getRowCount() - 1], x + ancho, y + 50)

	noStroke()
	fill('rgba(139, 0, 0, 0.5)')
	beginShape()
	vertex(x, y)
	for (var r = 0; r < data.getRowCount(); r++) {
		var valor = map(values[r], 0, max(values), 0, 110);
		vertex(x + step * r, y - valor);
	}
	vertex(x + step * (r - 1), y)

	endShape()
}