var a = 14;
var table;
var img;
var trans = 0;
var fil = 0;
var fil1 = 0;
var h_bar = 0;
var h_bar1 = 0;
var wait = 120;

function preload() {
	table = loadTable('coca.csv', 'csv', 'header');
}

function setup() {
	createCanvas(1280, 720);

}

function draw() {
	background(0);
	if (frameCount > wait) {

		push();
		translate(-trans, 0);
		plot(table, width, 600);
		pop();
		if (trans < 2200) {
			trans = lerp(trans, 2200, 0.01)
		}

		if (frameCount > 12 * 60 + wait) {
			trans = lerp(trans, 6000, 0.01)
		}
	}
}

function plot(data, x, y) {
	var years = table.getColumn('year');
	var values = table.getColumn('value');
	var largoLinea = x + (table.getRowCount() - 2) * 9 * 1.5 * a;

	fill(255)
	for (var r = 0; r < table.getRowCount() - 2; r++) {
		var altura = map(values[r], 0, max(values), 0, 500);
		rect(x + r * 9 * 1.5 * a, y - 5, 150, -altura);

		textFont('Helvetica');
		textAlign(LEFT);
		textSize(20);
		fill(255);
		text(years[r], x + r * 9 * 1.5 * a, y + 2 * a);
	}

	if (frameCount > 180 + wait) {
		largoLinea += 250;
		var altura = map(values[r], 0, max(values), 0, 500);
		push()
		fill('DarkOliveGreen')
		rect(x + r * 9 * 1.5 * a, y - 5, 200, -h_bar);
		pop()
		//texto
		textFont('Helvetica');
		textAlign(LEFT);
		textSize(20);
		textStyle(BOLD);

		push()
		fill(fil);
		text(years[r], x + r * 9 * 1.5 * a, y + 2 * a);
		pop()
		//animacion
		if (h_bar < altura) {
			h_bar = lerp(h_bar, altura, 0.05)
			fil = lerp(fil, 255, 0.1)
		}
	}

	if (frameCount > 190 + wait) {
		textFont('Helvetica');
		textAlign(LEFT);
		textSize(20);
		textStyle(NORMAL);
		push()
		fill(fil);
		text(values[r], x + r * 9 * 1.5 * a, y - 10 - h_bar);
		pop()
	}

	if (frameCount > 300 + wait) {
		largoLinea += 250;

		var altura = map(values[r + 1], 0, max(values), 0, 500);
		push()
		fill('DarkGreen')
		rect(x + 250 + (r) * 9 * 1.5 * a, y - 5, 200, -h_bar1);
		pop()
		//texto
		textFont('Helvetica');
		textAlign(LEFT);
		textSize(20);
		textStyle(BOLD);

		push()
		fill(fil1);
		text(years[r + 1], x + 250 + r * 9 * 1.5 * a, y + 2 * a);
		pop()
		//animacion
		if (h_bar < altura) {
			h_bar1 = lerp(h_bar1, altura, 0.05)
			fil1 = lerp(fil1, 255, 0.1)
		}
	}

	if (frameCount > 310 + wait) {
		textFont('Helvetica');
		textAlign(LEFT);
		textSize(20);
		textStyle(NORMAL);
		push()
		fill(fil1);
		text(values[r + 1], x + 250 + (r) * 9 * 1.5 * a, y - 10 - h_bar1);
		pop()
	}
	stroke(255)
	line(x, y + 2, largoLinea, y + 2);
}