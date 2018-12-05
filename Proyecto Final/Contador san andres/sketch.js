var scal = 0.08;
var a = scal * 563;
var b = scal * 1374;
var num = 0;

function preload() {
	sat = loadImage('san_andres.jpeg');
	isla = loadImage('isla.png');
}

function setup() {
	createCanvas(1280, 720);
	frameRate(60);
}

function draw() {

	background(0);
	image(sat, 0, 0, width, height);
	
	//boxes(72, 80, -70);

	
	if (frameCount > 120) {
		boxes(num, 80, -70);

		if (num < 72) {
			if (frameCount % 3 == 0) {
				num++
			}
		}
	}
	
}

function boxes(num, x, y) {

	var ancho = min(16, num);
	var filas = floor(num / ancho);
	var ultimaCol = num % ancho;
	var x_spa = 1.6;
	var y_spa = 1.2;
	
	for (var i = 0; i < filas; i++) {
		for (var j = 0; j < ancho; j++) {
			image(isla, x + j * a * x_spa, y + b + y_spa * b * i, a, b);
		}
		if (i == filas - 1) {
			i++;
			for (j = 0; j < ultimaCol; j++) {
				image(isla, x + j * a * x_spa, y + b + y_spa * b * i, a, b);
			}
		}
	}
}