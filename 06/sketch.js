var cancion
var fft
var amplitude

function preload() {
  cancion = loadSound('greenery_rain.m4a')

}

function setup() {
  colorMode(HSB)
  createCanvas(600, 600);
  cancion.play()
  fft = new p5.FFT(0.8, 128);
  amplitude = new p5.Amplitude();
  amplitude.setInput(cancion);
}

function draw() {
  background(60, 5, 100); //pearly gates


  //Setup
  var spectrum = fft.analyze();
  var level = amplitude.getLevel();
  var size = map(level, 0, 1, 0, height / 5);
  var hue_playback = map(cancion.currentTime(),
    0, cancion.duration(),
    0, 360)
  var dis = dist(width / 2, height / 2, mouseX, mouseY);

  //volumen
  var miVol = map(dis, 0, sqrt(2) * height / 2, 1.2, 0)
  cancion.setVolume(miVol)

  //Angulo y rate

  var v1 = createVector(width / 2, 0);

  var v2 = createVector(mouseX - width / 2, mouseY - height / 2);

  var angleBetween = v1.angleBetween(v2);

  var pbRate = map(cos(angleBetween/2), 0, 1, 0.99, 1.01, true)

  if (isFinite(pbRate)) { //solucion que encontre a para evitar que crasheara por valores infinitos
    cancion.rate(pbRate)
  }

  /*
  //debug de grados
  fill('black')
  text( 
    'angle between: ' +
    degrees(angleBetween).toFixed(2) +
    ' degrees ' +
    pbRate.toFixed(2) +
    ' rate',
    10,
    50,
    90,
    50
  );*/

  //Circulos frecuencia
  push()

  translate(width / 2, height / 2)
  if (mouseY > height / 2) {
    angleBetween = angleBetween * -1
  }
  rotate(PI - angleBetween)
  var offset = constrain(1000 / (dis + 1), 0, 60)

  fill(0, 0, 0, 0.02);
  for (var i = 0; i < spectrum.length; i++) {
    var d = map(spectrum[i], 0, 255, 0, sqrt(2) * height);
    var ruidoX = random(-size, size)
    var ruidoY = random(-size, size)

    stroke(hue_playback + random(15), 80,
      map((spectrum[i]), 0, 255, 0, 100), 0.05)
    strokeWeight(map((spectrum[i]), 0, 255, 0, height / 10))
    ellipse(ruidoX + offset, ruidoY, d, d)
  }
  pop()

  //Circulos luz
  push()
  translate(width / 2, height / 2)
  noStroke()
  fill(hue_playback + random(50), 80,
    80, 0.05)
  for (var i = 0; i < 200 * level; i = i + 1) {
    var posX = random(-width / 2, width / 2);
    var posY = random(-height / 2, height / 2);
    ellipse(posX, posY, 30, 30);
  }
  pop()

  /* Linea con onda
  var waveform = fft.waveform();
  push()
  translate(width/2,height/2)
  rotate(PI/2)
  beginShape();
  fill(0,120); 
  noStroke()
  vertex(-width,2*height)
  for (var i = 0; i< waveform.length; i++){
    var x = map(i, 0, waveform.length, -width, width);
    var y = map( waveform[i], -1, 1, -20, 20);
    vertex(x,y);
  }
  vertex(width,2*height)
  endShape(CLOSE);
  pop()
  */


}