var miMinuto;
var miSegundo;
var miDia;
var miMes;
var colorSeg;
var colorMin;
var hora;
function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 100);
  background(hueMonth());
  frameRate(60)
}

function draw() {

  miMinuto = minute() + norm(second(), 0, 60);
  miSegundo = second();
  miDia = day();
  miMes = month();
  colorSeg = colorSecond(miSegundo);
  colorMin = colorMinute(miMinuto);
	colorMes = hueMonth(miMes, miDia);
  
  //Hora y minuto tomada del ejemplo
  //https://p5js.org/examples/input-clock.html
  hora = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;
  
  background(colorMes);
  push()
  translate(width / 2, height / 2)

  //bola segundos

  push()
  blendMode(SCREEN)
  noStroke()

  //Circulo fondo
  fill(0, 0, 30, 10)
  ellipse(0, 0, 3 * width / 4, 3 * height / 4);

  //Anillo horas
  push()
  stroke(colorMes)
  noFill()
  strokeWeight(4)
  strokeCap(SQUARE)
  arc(0, 0,
      -5+2*sin(2 * PI * frameCount / (4 * 60) + PI / 2) + width / 3,
    -5+2*sin(2 * PI * frameCount / (4 * 60) + PI / 2) + height / 3,
      -PI/2, hora)
  pop()
  
  //centro
  colorMin.setAlpha(50)
  fill(colorMin)
  ellipse(0, 0,
    2*sin(2 * PI * frameCount / (4 * 60) + PI / 2) + width / 3,
    2*sin(2 * PI * frameCount / (4 * 60) + PI / 2) + height / 3);

  //anillo minutos
  colorMin.setAlpha(30)
  noFill()
  stroke(colorMin)
  strokeWeight(sin(2 * PI * frameCount / (2 * 60) + PI / 4) + width / 16)
  ellipse(0, 0, width / 2, height / 2);

  //anillo segundos
  colorSeg.setAlpha(20)
  stroke(colorSeg)
  strokeWeight(sin(2 * PI * frameCount / 60) + width / 30)
  ellipse(0, 0, 2 * width / 3, 2 * height / 3);

  //bola minutos
  push()
  noStroke()
  blendMode(BURN)
  colorMin.setAlpha(80)
  fill(colorMin)
  rotate(radians(map(miMinuto, 0, 60, 0, 359)))
  ellipse(0, -width / 4, width / 16, height / 16);
  pop()
  pop()

  //bola segundos
  push()
  blendMode(BURN)
  noStroke()
  colorSeg.setAlpha(80)
  fill(colorSeg)
  rotate(radians(map(miSegundo, 0, 60, 0, 359)))
  ellipse(0, -width / 3, width / 30, height / 30);
  pop()
  pop()
}

function brightnessHour() {
  var hora = hour()

  var alpha = map(hora, 0, 23, 0, 2 * PI);
  return 70 + 30 * sin(alpha - PI / 2);
}

function colorSecond(segundo) {
  var hue = map(segundo, 0, 59, 0, 100);
  return color(hue, 50, 100, 100);
}

function colorMinute(minuto) {
  var hue = map(minuto, 0, 59, 0, 100);
  return color(hue, 50, 100, 100);
}

function hueMonth(mes, dia) {

  var mesSig
  if (mes >= 12) {
    mesSig = 1
  } else {
    mesSig = mes + 1
  }

  var thisMonth = map(mes, 1, 13, 0, 100);
  var nextMonth = map(mesSig, 1, 13, 0, 100);

  var colorA = color(thisMonth, 70, brightnessHour());
  var colorB = color(nextMonth, 70, brightnessHour());

  var dayOfMonth = map(dia, 0, 31, 0, 1);

  return lerpColor(colorA, colorB, dayOfMonth);
}