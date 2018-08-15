function setup() {
  createCanvas(600, 600);
	ellipseMode(RADIUS);
	angleMode(DEGREES);
	
}

function draw() {
  background(235,229,207);
	strokeWeight(2);
	stroke(40);
	
	//colores fondo
	noStroke();
	fill(130,170,195);
	beginShape(); //el azul
	vertex(272,180);
	vertex(550,420);
	vertex(272,480);
	vertex(53,410);
	vertex(108,342);
	endShape(CLOSE);
	
	fill(234,218,233,200);
	beginShape(); //el rosado
	vertex(582,0);
	vertex(590,0);
	vertex(600,40);
	vertex(600,465);
	vertex(483,361);
	endShape(CLOSE);
	
	//arco derecha
	noFill();
	stroke(206,103,106);
	strokeWeight(3);
	arc(584,328,34,34,137,360);
	stroke(40);
	strokeWeight(1);
	arc(584,328,32,32,135,360) //borde negro
	
	// Lineas derecha
	strokeWeight(3);
	stroke(206,103,106);
	line(600,244,480,306); //gruesa y roja 3p
	
	strokeWeight(1);
	stroke(40);
	line(600,246,480,308); //negra y justo debajo a la roja

	
	//figuras derecha
	noStroke();
	
	fill(40);
	beginShape(); //cosa negra
	vertex(600,220);
	vertex(581,210);
	vertex(458,377);
	vertex(581,218);
	vertex(600,228);
	endShape(CLOSE);
	
	fill(65,107,59);
	beginShape(); //cosa verde
	vertex(600,228);
	vertex(581,218);
	vertex(458,377);
	vertex(583,226);
	vertex(600,234);
	endShape(CLOSE);
	
	fill(127,109,45);
	beginShape(); //triangulo dorado
	vertex(600,356);
	vertex(508,419);
	vertex(600,420);
	endShape(CLOSE);
	
	
	//arcos abajo
	fill(249,246,248);
	strokeWeight(3);
	stroke(130,126,166);
	arc(430,529,49,49,180,0,OPEN); //morado
	stroke(204,188,43);
	arc(534,526,49,49,176,5,OPEN); //amarillo
	stroke(222,172,176);
	
	noFill();
	arc(483,583,49,49,175,-5); //rosado
	
	strokeWeight(4);
	stroke(186,25,17);
	arc(638,526,49,49,176,5); //rojo
	
	stroke(40);
	strokeWeight(1);
	noFill();
	arc(534,526,51,51,176,5); //amarillo

	strokeWeight(2);
	arc(430,529,50,50,180,0); //morado
	arc(483,583,51,51,175,-5); //rosado
	arc(585,585,51,51,188,-5); //solo
	
	
	//curvas de arriba
	strokeWeight(2);
	beginShape(); //la de arriba
	curveVertex(400,600);
	curveVertex(370,214);
	curveVertex(506,15);
	curveVertex(650,150);
	endShape();
	
	strokeWeight(1);
	beginShape(); //la de abajo
	curveVertex(400,500);
	curveVertex(375,225);
	curveVertex(485,82);
	curveVertex(600,150);
	endShape();
	
	// Lineas centro
	line(270,40,270,260);
	line(240,122,306,120);
	line(244,136,312,134);
	line(220,50,376,118);
	line(272,180,84,364);
	line(272,180,596,462);
	line(0,370,424,258);
	
	// Lineas derecha
	strokeWeight(2);
	stroke(40);
	line(420,600,582,0); //mas grosor triangulo 3p
	line(590,0,600,40); //mas grosor triangulo 3p
	line(600,224,496,279); //segunda de la doble, mas grosor 2p
	line(600,541,543,600); //2da abajo 2p

	strokeWeight(1);
	line(600,124,470,42); //diangonal 1
	line(600,140,488,95); //diagonal 2
	line(600,220,494,276); //primera de la doble
	line(600,534,535,600); //primera abajo
	line(600,549,553,600); //3ra abajo 
	line(394,585,372,600); //suelta de abajo
	line(600,282,587,293); //linea arco 1
	line(600,305,551,350); //linea arco 2
	
	
	// circulos top-right
	noStroke();
	fill(187,198,184,200);
	ellipse(585,173,22,22); //aura verde de la blanca
	fill(234,218,233);
	stroke(40);
	ellipse(585,173,16,16); //blanca en triangulo
	fill(189,17,57);
	ellipse(463,133,10,10); //roja
	fill(131,127,142);
	stroke(89);
	ellipse(527,41,16,16); //gris
	
	//trio de circulos centro
	stroke(140);
	fill(249,246,248);
	ellipse(466,219,41,41); //externa
	fill(24);
	noStroke();
	ellipse(466,219,28,28); //negra
	fill(249,246,248);
	stroke(168,42,63);
	strokeWeight(2);
	ellipse(466,219,22,22); //borde rojo
		
	//circulo amarillo bot-left
	noStroke();
	fill(178,175,196,200);
	ellipse(-10,555,75,75); //aura1 morada
	fill(97,145,183,200);
	ellipse(-10,555,58,58); //aura2 azulverdoso
	fill(231,206,60);
	stroke(0);
	strokeWeight(3);
	ellipse(-10,555,40,40); //amarillo
	
	// circulos top-left
	noStroke();
	fill(227,190,60,200);
	ellipse(104,250,60,60); //aura amarilla
	fill(214,107,93,200);
	ellipse(18,126,160,160); //aura roja	
	fill(178,2,4);
	ellipse(104,250,46,46); //elipse roja
	fill(8);
	ellipse(18,126,120,120); //parte negra
	fill(80,41,104);
	ellipse(18,126,57,57); //centro morado
		
	//la curva loca
	stroke(40);
	noFill();
	strokeWeight(4);
	beginShape(); 
	curveVertex(200,500);
	curveVertex(65,411);
	curveVertex(33,359);
	curveVertex(68,328);
	curveVertex(134,356);
	curveVertex(193,293);
	curveVertex(261,315);
	curveVertex(301,290);
	curveVertex(357,260);
  curveVertex(433,251);
	curveVertex(435,251);
	endShape();
			
	//figura central
	stroke(40);
	strokeWeight(1);
	fill(220,212,201);
	beginShape(); 
	vertex(213,591);
	vertex(24,480);
	vertex(28,473);
	vertex(135,530);
	vertex(210,343);
	vertex(273,402);
	vertex(306,352);
	vertex(343,390);
	vertex(410,322);
	vertex(419,330);
	vertex(481,259);
	vertex(490,268);
	endShape(CLOSE);
		
	//Cuadros de color
	noStroke();
	fill(40); //negros
	
	beginShape();
	vertex(24,480);
	vertex(28,473);
	vertex(226,577);
	vertex(213,591);
	endShape(CLOSE);

	beginShape();
	vertex(210,343);
	vertex(274,402);
	vertex(257,426);
	vertex(192,385);
	endShape(CLOSE);
	
	beginShape();
	vertex(306,352);
	vertex(343,390);
	vertex(328,406);
	vertex(292,374);
	endShape(CLOSE);
	
	beginShape();
	vertex(284,385);
	vertex(317,417);
	vertex(303,430);
	vertex(273,402);
	endShape(CLOSE);
	
	beginShape();
	vertex(219,484);
	vertex(236,498);
	vertex(210,525);
	vertex(198,514);
	endShape(CLOSE);
	
	beginShape();
	vertex(410,322);
	vertex(418,330);
	vertex(402,348);
	vertex(394,339);
	endShape(CLOSE);
	
	beginShape();
	vertex(328,406);
	vertex(340,418);
	vertex(328,429);
	vertex(316,417);
	endShape(CLOSE);
	
	beginShape();
	vertex(481,259);
	vertex(490,268);
	vertex(477,282);
	vertex(468,274);
	endShape(CLOSE);
	
	beginShape();
	vertex(457,285);
	vertex(467,295);
	vertex(456,307);
	vertex(446,297);
	endShape(CLOSE);
	
	beginShape();
	vertex(432,314);
	vertex(442,323);
	vertex(428,340);
	vertex(418,330);
	endShape(CLOSE);
	
	beginShape();
	vertex(402,348);
	vertex(413,357);
	vertex(392,381);
	vertex(382,369);
	endShape(CLOSE);
	
	beginShape();
	vertex(328,427);
	vertex(342,440);
	vertex(330,456);
	vertex(316,442);
	endShape(CLOSE);
	
	//cuadros de colores
	fill(135,88,18); //cafes
	
	beginShape();
	vertex(157,473);
	vertex(198,514);
	vertex(174,550);
	vertex(135,530);
	endShape(CLOSE);
	
	beginShape();
	vertex(353,401);
	vertex(365,413);
	vertex(350,430);
	vertex(340,417);
	endShape(CLOSE);
	
	fill(50,86,24); //verdes
	
	beginShape();
	vertex(179,418);
	vertex(239,451);
	vertex(218,484);
	vertex(168,445);
	endShape(CLOSE);
	
	beginShape();
	vertex(303,431);
	vertex(315,441);
	vertex(303,454);
	vertex(289,445);
	endShape(CLOSE);
	
	fill(114,146,49);
	beginShape();
	vertex(226,541);
	vertex(243,556);
	vertex(225,577);
	vertex(202,564);
	endShape(CLOSE);
	
	fill(70,129,163); //azules
	beginShape();
	vertex(257,427);
	vertex(286,445);
	vertex(266,466);
	vertex(240,451);
	endShape(CLOSE);
	
	fill(180,183,202);
	beginShape();
	vertex(199,514);
	vertex(208,524);
	vertex(180,553);
	vertex(173,549);
	endShape(CLOSE);
		
	fill(254,148,152); //rosado
	beginShape();
	vertex(304,456);
	vertex(320,465);
	vertex(303,485);
	vertex(285,475);
	endShape(CLOSE);
	
	//lineas figura horz
	stroke(40);
	strokeWeight(1);
	line(135,530,222,579);
	line(157,473,242,556);
	line(168,445,269,525);
	line(179,418,302,485);
	line(192,385,320,465);
	line(273,402,329,455);
	line(284,385,341,440);
	line(292,372,350,428);
	line(343,390,365,412);
	line(373,359,392,381);
	line(394,339,413,357);
	line(419,330,428,338);
	line(432,314,442,323);
	line(447,297,456,307);
	line(457,285,466,295);
	line(468,273,477,282);
	
	//lineas vert figura
	strokeWeight(2);
	line(173,551,272,402);
	line(180,555,342,390);
	line(202,566,418,330);
	
	//figuras derecha
	strokeWeight(1);
	fill(40);
	beginShape(); //negro
	vertex(600,412);
	vertex(248,479);
	vertex(248,485);
	vertex(600,418);
	endShape(CLOSE);
	
	strokeWeight(2);
	stroke(40);
	fill(150,1,10);
	beginShape(); //rojo
	vertex(562,432);
	vertex(237,527);
	vertex(237,532);
	vertex(566,435);
	endShape(CLOSE);
	
	fill(89,86,69);
  beginShape();
	vertex(576,534,566);
	vertex(579,539);
	vertex(600,524);
	vertex(600,514);
	endShape();
	
	//linea final
	strokeWeight(2);
	line(582,492,582,600); //vertical cruz 2p
	strokeWeight(3);
	line(600,530,254,527); //horizontal cruz 3p
	
	//figura como una C
	noStroke();
	fill(40);
	
	beginShape(); 
	curveVertex(-250,00);
	curveVertex(203,225);
	curveVertex(314,146);
	curveVertex(203,245);
	curveVertex(-300,0);
	endShape();
	
	//regla abajo derecha
	stroke(40)
	line(600,514,514,578);
	line(600,524,518,583);
	
	beginShape();
	vertex(530,566);
	vertex(514,578);
	vertex(518,583);
	vertex(534,572);
	endShape();
	
	line(551,551,555,556);
	line(555,548,559,553);
	line(559,545,563,550);
	line(563,542,567,547);
	line(567,539,571,544);
	line(571,536,575,541);
	
	
}