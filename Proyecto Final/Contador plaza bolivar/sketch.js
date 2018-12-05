var scal = 0.42;
var a = scal * 198;
var b = scal * 132;
var num = 0;

function preload() {
	plaza = loadImage('plaza.jpeg');
	iglesia = loadImage('iglesia.png');
}

function setup() {
	createCanvas(1280, 720);
	frameRate(60);
}

function draw() {

	background(0);
	image(plaza, 0, 0, width, height);

	if (frameCount > 120) {
		boxes(num, 50, 0);

		if (num < 136) {
			if (frameCount % 3 == 0) {
				num++
			}
		}
	}
}

function boxes(num, x, y) {

	var ancho = min(12, num);
	var filas = floor(num / ancho);
	var ultimaCol = num % ancho;

	for (var i = 0; i < filas; i++) {
		for (var j = 0; j < ancho; j++) {
			image(iglesia, x + j * a * 1.2, y + b + 0.9 * b * i, a, b);
		}
		if (i == filas - 1) {
			i++;
			for (j = 0; j < ultimaCol; j++) {
				image(iglesia, x + j * a * 1.2, y + b + 0.9 * b * i, a, b);
			}
		}
	}
}