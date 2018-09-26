var gusanos = [];
var fernando;
var david;
var jesus;
var alejandro;

function setup() {
  createCanvas(600, 600);
  ellipseMode(RADIUS)

  for(var i = 0; i<20; i++){
  	gusanos.push(new gusano(random(50, width - 50),
    random(50, height - 50), random(0, 359)))
  }

  fernando = new snek(random(50, width - 50),
    random(50, height - 50), random(0, 359))

  david = new pollito(random(50, width - 50),
    random(50, height - 50), random(0, 359))

  jesus = new tortuga(random(50, width - 50),
    random(50, height - 50), random(0, 359))

  alejandro = new tarantula(random(50, width - 50),
    random(50, height - 50), random(0, 359))
}

function draw() {
  background('DarkGreen');

  for(var i = 0; i<gusanos.length; i++){
    gusanos[i].draw()
  	gusanos[i].moverse()
  }

  fernando.draw()
  fernando.moverse()

  jesus.draw()
  jesus.moverse()
  
  david.draw()
  david.moverse()
  
  alejandro.draw()
  alejandro.moverse()


}

function gusano(x, y, deg) {
  this.x = x;
  this.y = y;
  this.angle = radians(deg)
  this.alive = true;

  this.draw = function() {
    if (this.alive) {
      push()
      translate(this.x, this.y)
      rotate(this.angle)
      noStroke()
      fill('orange')
      ellipse(0, 0, 5, 5)
      ellipse(-5, sin(frameCount / 10), 4, 4)
      ellipse(-9, 1.5 * cos(frameCount / 10), 3, 3)
      ellipse(-12, 0, 2, 2)
      stroke('Cyan')
      line(3, 2, 7, 3 + 0.5 * sin(frameCount / 5))
      line(3, -2, 7, -3 - 0.5 * sin(frameCount / 5))
      pop()

      var dist_pollo = dist(this.x, this.y, david.x, david.y);

      if (dist_pollo < 30) {
        this.alive = false;
      }
    }
  };

  this.moverse = function() {
    var mag = noise(this.x, this.y);
    this.angle = this.angle + random(-0.1, 0.1)
    this.x = this.x + cos(this.angle) * mag;
    this.y = this.y + sin(this.angle) * mag;

    if (this.x < 0) {
      this.x = width
    }
    if (this.x > width) {
      this.x = 0
    }
    if (this.y < 0) {
      this.y = height
    }
    if (this.y > height) {
      this.y = 0
    }
  }

}

function snek(x, y, deg) {
  this.x = x;
  this.y = y;
  this.angle = radians(deg)
  this.alive = true;

  this.draw = function() {
    if (this.alive) {
      push()
      translate(this.x, this.y)
      rotate(this.angle)
      noStroke()
      fill('YellowGreen')
      for (var i = 0; i < 200; i++) {
        ellipse(-i, 3 * sin((i + frameCount) / 10), 4, 4)
        if (i == 1 && second() % 2 == 0) {
          push()
          stroke('violet')
          strokeWeight(2)
          line(4, 3 * sin((i + frameCount) / 10),
            9 + cos(frameCount / 2), 0.5 * cos(frameCount / 2))
          pop()
        }
      }

      pop()
    }
  };

  this.moverse = function() {
    var mag = noise(this.x, this.y);
    this.x = this.x + cos(this.angle) * mag;
    this.y = this.y + sin(this.angle) * mag;

    if (this.x + 200 < 0) {
      this.x = width
    }
    if (this.x - 200 > width) {
      this.x = 0
    }
    if (this.y + 200 < 0) {
      this.y = height
    }
    if (this.y - 200 > height) {
      this.y = 0
    }
  }
}

function pollito(x, y, deg) {
  this.x = x;
  this.y = y;
  this.angle = radians(deg)
  this.alive = true;

  this.draw = function() {
    if (this.alive) {
      push()
      translate(this.x, this.y)
      rotate(this.angle)
      noStroke()
      fill('Gold')
      ellipse(0, 0, 20, 20)
      ellipse(-20, 0.5 * sin(frameCount / 5), 2, 3)
      ellipse(-20, 2 + 0.5 * sin(frameCount / 5), 3, 1)
      ellipse(-20, -2 - 0.5 * cos(frameCount / 5), 3, 1)
      translate(0.5 * sin(frameCount / 5), 0)
      ellipse(18, 0, 10, 10)
      fill('Chocolate')
      triangle(27, 3, 27, -3, 32, 0)
      stroke('Black')
      strokeWeight(2)
      point(24, 5)
      point(24, -5)
      pop()
    }
  };

  this.moverse = function() {
    var ang_mouse = atan2(mouseY - this.y, mouseX - this.x);
    var mag = 0.5;
    if (dist(mouseX, mouseY, this.x, this.y) > 1) {
      this.angle = lerp(this.angle, ang_mouse, 0.1)
      this.x = this.x + mag * cos(this.angle);
      this.y = this.y + mag * sin(this.angle);
    }
  };
}

function tortuga(x, y, deg) {
  this.x = x;
  this.y = y;
  this.angle = radians(deg)
  this.alive = true;

  this.draw = function() {
    if (this.alive) {
      push()
      translate(this.x, this.y)
      rotate(this.angle)
      noStroke()

      fill('SpringGreen ')
      ellipse(38 + 2 * sin(frameCount / 100 + PI / 4), 0, 10, 8)

      push()
      rotate(PI / 4 + 0.1 * sin(frameCount / 100))
      ellipse(36, 0, 8, 7)
      rotate(PI)
      ellipse(38, 0, 9, 7)
      pop()

      push()
      rotate(-PI / 4 + 0.1 * cos(frameCount / 100))
      ellipse(36, 0, 8, 7)
      rotate(-PI)
      ellipse(38, 0, 9, 7)
      pop()

      triangle(-38, 6, -38, -6, -48, 0)

      fill('Sienna')
      ellipse(0, 0, 40, 30)

      stroke('Black')
      strokeWeight(2)
      point(46, 4)
      point(46, -4)

      stroke('FireBrick')
      strokeWeight(2)
      noFill()
      line(15, 8, 30, 19)
      line(15, -8, 30, -19)
      line(-15, 8, -30, 19)
      line(-15, -8, -30, -19)
      line(0, 15, 0, 29)
      line(0, -15, 0, -29)
      beginShape()
      vertex(15, 8)
      vertex(15, -8)
      vertex(0, -15)
      vertex(-15, -8)
      vertex(-15, 8)
      vertex(0, 15)
      endShape(CLOSE)
      pop()
    }
  };

  this.moverse = function() {
    var ang_mouse = atan2(mouseY - this.y, mouseX - this.x);
    var mag = 0.1;
    if (dist(mouseX, mouseY, this.x, this.y) > 1) {
      this.angle = lerp(this.angle, ang_mouse, 0.001)
      this.x = this.x + mag * cos(this.angle);
      this.y = this.y + mag * sin(this.angle);
    }
  }
}

function tarantula(x, y, deg) {
  this.x = x;
  this.y = y;
  this.angle = radians(deg)
  this.alive = true;

  this.draw = function() {
    if (this.alive) {
      push()
      translate(this.x, this.y)
      rotate(this.angle)
      noStroke()
      fill(40)
      ellipse(0, 0, 10, 10)
      ellipse(-17, 0, 14, 12)
      ellipse(10, 2, 3, 2)
      ellipse(10, -2, 3, 2)
      noFill()
      stroke(40)
      strokeWeight(2)

      //Patas 1
      push()
      rotate(0.1 * cos((this.x + this.y)))
      //Patas frente
      beginShape()
      vertex(3, 8)
      vertex(13, 13)
      vertex(16, 15)
      vertex(18, 20)
      endShape(OPEN)
      beginShape()
      vertex(3, -8)
      vertex(13, -13)
      vertex(16, -15)
      vertex(18, -20)
      endShape(OPEN)
      //Patas medio
      beginShape()
      vertex(-1, 8)
      vertex(0, 18)
      vertex(-3, 24)
      vertex(-3, 25)
      endShape(OPEN)
      beginShape()
      vertex(-1, -8)
      vertex(0, -18)
      vertex(-3, -24)
      vertex(-3, -25)
      endShape(OPEN)

      //Patas 2
      push()
      rotate(0.1 * sin(this.x + this.y))
      //Patas medio    
      beginShape()
      vertex(2, 8)
      vertex(4, 17)
      vertex(8, 20)
      vertex(10, 25)
      endShape(OPEN)
      beginShape()
      vertex(2, -8)
      vertex(4, -17)
      vertex(8, -20)
      vertex(10, -25)
      endShape(OPEN)
      //Patas atras
      beginShape()
      vertex(-2, 8)
      vertex(-6, 15)
      vertex(-18, 19)
      vertex(-20, 23)
      endShape(OPEN)
      beginShape()
      vertex(-2, -8)
      vertex(-6, -15)
      vertex(-18, -19)
      vertex(-20, -23)
      endShape(OPEN)

      pop()
      pop()
    }
  };

  this.moverse = function() {
    var dist_pollo = dist(this.x, this.y, david.x, david.y);
    var ang_pollo = atan2(david.x - this.y, david.y - this.x);
    var ang_origen = atan2(width / 2 - this.y, height / 2 - this.x);
    var ang_mouse = atan2(mouseY - this.y, mouseX - this.x);

    var mag
    if (dist_pollo < 90) {
      mag = 6;
      this.angle = lerp(this.angle, ang_pollo + PI / 2 + PI / 4, 0.5);
      this.x = this.x + mag * cos(this.angle);
      this.y = this.y + mag * sin(this.angle);
    } else if (dist_pollo > 250) {
      mag = 0.1;
      this.angle = lerp(this.angle, ang_mouse, 0.005)
      this.x = this.x + mag * cos(this.angle);
      this.y = this.y + mag * sin(this.angle);
    }
  }
}