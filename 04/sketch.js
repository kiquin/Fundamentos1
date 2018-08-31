var xbot1 = 10;
var ybot1 = 10;
var tam = 20;
var figura = 1;
var fondo;

var xbot2 = xbot1 + 2 * tam;
var xbot3 = xbot2 + 2 * tam;
var xbot4 = xbot3 + 2 * tam;
var xbot5 = xbot4 + 2 * tam;
var xbot6 = xbot5 + 2 * tam;
var xbot7 = xbot6 + 2 * tam;
var xbot8 = xbot7 + 2 * tam;
var xbot9 = xbot8 + 2 * tam;
var xbot10 = xbot9 + 2 * tam;
var xbot11 = xbot10 + 2 * tam;

var ybot2 = ybot1 + 2 * tam;
var ybot3 = ybot2 + 2 * tam;
var ybot4 = ybot3 + 2 * tam;
var ybot5 = ybot4 + 2 * tam;
var ybot6 = ybot5 + 2 * tam;
var ybot7 = ybot6 + 2 * tam;
var ybot8 = ybot7 + 2 * tam;
var ybot9 = ybot8 + 2 * tam;
var ybot10 = ybot9 + 2 * tam;
var ybot11 = ybot10 + 2 * tam;

var col;
var c;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('SeaShell');
  fondo = color('SeaShell');
  col = color('Black');
  c = col;
}

function draw() {
  //Herramientas
  stroke(0);
  strokeWeight(1);
  fill(255);
  rect(xbot1, ybot1, tam, tam);
  rect(xbot2, ybot1, tam, tam);
  rect(xbot3, ybot1, tam, tam);
  rect(xbot4, ybot1, tam, tam);
  rect(xbot5, ybot1, tam, tam);
  rect(xbot6, ybot1, tam, tam);
  rect(xbot7, ybot1, tam, tam);
  rect(xbot8, ybot1, tam, tam);
  rect(xbot9, ybot1, tam, tam);
  rect(xbot10, ybot1, tam, tam);
  rect(xbot11, ybot1, tam, tam);

  fill(col)
  stroke(col)
  //linea
  line(xbot2 + 3, ybot1 + tam - 3, xbot2 + tam - 3, ybot1 + 3);
  //Circulo
  ellipse(xbot3 + tam / 2, ybot1 + tam / 2, 14, 14);
  //Bisel
  quad(xbot4 + tam / 2, ybot1 + 3, xbot4 + tam - 3, ybot1 + 3, xbot4 + tam / 2, ybot1 + tam - 3, xbot4 + 3, ybot1 + tam - 3);
  //Cuadros
  rect(xbot5 + 3, ybot1 + 2 + tam / 2, 5, 5);
  rect(xbot5 + 8, ybot1 + 3, 8, 8);
  //Variable
  ellipse(xbot6 + tam / 2, ybot1 + tam / 2,
    10 + 4 * sin(2 * PI * frameCount / 60), 10 + 4 * sin(2 * PI * frameCount / 60));
  //Acelerada
  strokeWeight(constrain(2 + 0.3 * sqrt(mag(mouseX - pmouseX, mouseY - pmouseY)), 2, 6));
  line(xbot7 + 4, ybot1 + tam - 4, xbot7 + tam - 4, ybot1 + 4);
  strokeWeight(1);
  //Spray
  for (var i = 0; i  < 30; i++) {
    point(xbot8 + 3 + 14 * noise(i + 3), ybot1 + 3 + 14 * noise(i - 3));
  }
  //Punteada
  line(xbot9 + 3, ybot1 + tam - 3, lerp(xbot9 + 3, xbot9 + tam - 3, 0.25), lerp(ybot1 + tam - 3, ybot1 + 3, 0.25));
  line(lerp(xbot9 + 3, xbot9 + tam - 3, 0.4), lerp(ybot1 + tam - 3, ybot1 + 3, 0.4),
    lerp(xbot9 + 3, xbot9 + tam - 3, 0.6), lerp(ybot1 + tam - 3, ybot1 + 3, 0.6));
  line(lerp(xbot9 + 3, xbot9 + tam - 3, 0.75), lerp(ybot1 + tam - 3, ybot1 + 3, 0.75),
    lerp(xbot9 + 3, xbot9 + tam - 3, 1), lerp(ybot1 + tam - 3, ybot1 + 3, 1));
  //Desvaneciente
  strokeWeight(2);
  for (i = 0; i  < tam - 6; i++) {
    c = lerpColor(col, fondo, i / (tam - 6));
    stroke(c)
    line(xbot11 + 3 + i, ybot1 + tam - 3 - i, xbot11 + tam - 5, ybot1 + 5);
  }
  //Transparente
  noStroke()
  fill(red(col), green(col), blue(col), 30);
  ellipse(xbot10 + tam / 2, ybot1 + tam / 2, 14, 14);

  //Colores https://www.w3schools.com/colors/colors_names.asp
  noStroke()
  fill('Black');
  rect(xbot1, ybot2, tam, tam);
  fill('Crimson');
  rect(xbot1, ybot3, tam, tam);
  fill('GoldenRod');
  rect(xbot1, ybot4, tam, tam);
  fill('DarkMagenta');
  rect(xbot1, ybot5, tam, tam);
  fill('DarkBlue');
  rect(xbot1, ybot6, tam, tam);
  fill('CornflowerBlue');
  rect(xbot1, ybot7, tam, tam);
  fill('Coral');
  rect(xbot1, ybot8, tam, tam);
  fill('DarkGreen');
  rect(xbot1, ybot9, tam, tam);
  fill('ForestGreen');
  rect(xbot1, ybot10, tam, tam);
  fill('DeepPink');
  rect(xbot1, ybot11, tam, tam);

  //Mouse
  fill(col)
  stroke(col)
	strokeWeight(1)

  if (mouseIsPressed) {
    if (enCaja(xbot1, ybot1, tam, tam)) {
      background('SeaShell');
    } else if (enCaja(xbot2, ybot1, tam, tam)) {
      figura = 1;
    } else if (enCaja(xbot3, ybot1, tam, tam)) {
      figura = 2;
    } else if (enCaja(xbot4, ybot1, tam, tam)) {
      figura = 3;
    } else if (enCaja(xbot5, ybot1, tam, tam)) {
      figura = 4;
    } else if (enCaja(xbot6, ybot1, tam, tam)) {
      figura = 5;
    } else if (enCaja(xbot7, ybot1, tam, tam)) {
      figura = 6;
    } else if (enCaja(xbot8, ybot1, tam, tam)) {
      figura = 7;
    } else if (enCaja(xbot9, ybot1, tam, tam)) {
      figura = 8;
    } else if (enCaja(xbot10, ybot1, tam, tam)) {
      figura = 9;
    } else if (enCaja(xbot11, ybot1, tam, tam)) {
      figura = 10;
    } else if (enCaja(xbot1, ybot2, tam, tam)) {
      col = color('Black');
    } else if (enCaja(xbot1, ybot3, tam, tam)) {
      col = color('Crimson');
    } else if (enCaja(xbot1, ybot4, tam, tam)) {
      col = color('GoldenRod');
    } else if (enCaja(xbot1, ybot5, tam, tam)) {
      col = color('DarkMagenta');
    } else if (enCaja(xbot1, ybot6, tam, tam)) {
      col = color('DarkBlue');
    } else if (enCaja(xbot1, ybot7, tam, tam)) {
      col = color('CornflowerBlue');
    } else if (enCaja(xbot1, ybot8, tam, tam)) {
      col = color('Coral');
    } else if (enCaja(xbot1, ybot9, tam, tam)) {
      col = color('DarkGreen');
    } else if (enCaja(xbot1, ybot10, tam, tam)) {
      col = color('ForestGreen');
    } else if (enCaja(xbot1, ybot11, tam, tam)) {
      col = color('DeepPink');
    } else {
      switch (figura) {
        case 1: //linea
          line(pmouseX, pmouseY, mouseX, mouseY);
          break;
        case 2: //brocha circulos
          ellipse(mouseX, mouseY, 10, 10);
          break;
        case 3: //Stub Nib
          quad(pmouseX - 5, pmouseY + 5, pmouseX + 5, pmouseY - 5,
            mouseX + 5, mouseY - 5, mouseX - 5, mouseY + 5);
          break;
        case 4: //brocha rectangulos
          rect(pmouseX, pmouseY, mouseX - pmouseX, mouseY - pmouseY);
          break;
        case 5: //punto variable
          strokeWeight(4 + 3 * sin(2 * PI * frameCount / 15));
          point(mouseX, mouseY);
          break;
        case 6: //brocha acelerable
          strokeWeight(sqrt(mag(mouseX - pmouseX, mouseY - pmouseY)));
          line(pmouseX, pmouseY, mouseX, mouseY);
          break;
        case 7: //spray
          point(mouseX + 10 * noise(frameCount), mouseY + 10 * noise(frameCount / 5));
          break;
        case 8: //linea punteada
          line(lerp(pmouseX, mouseX, 0.6), lerp(pmouseY, mouseY, 0.6), mouseX, mouseY);
          break;
        case 9: //brocha transparente
          noStroke()
          fill(red(col), green(col), blue(col), 10);
          ellipse(mouseX, mouseY, 30, 30);
          break;
        case 10: //Marcador desvaneciente
          col = lerpColor(col, fondo, 0.06);
          strokeWeight(3);
          line(pmouseX, pmouseY, mouseX, mouseY);
          break;
      }
    }
  }
}

function enCaja(x, y, w, h) {
  //Funcion que retorna un boolean. Verifica si el mouse se encuentra en el rectangulo
  //definido por los parametros x, y, w y h

  var esta = false

  if (mouseX  > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    esta = true
  }

  return esta
}