function setup() {
  

	var a = 19;
  
	createCanvas(a*32, a*32);

	background(60);
    
  //Cuadrado de color
	noStroke();
  fill(243,197,61);
  rect(8*a,8*a,16*a,16*a);
  
	//Triangulos
  fill(255,254,248);
  //Filas 1 y 3 del patron general
  for(var x=0; x<4; x++){
    for(var y=0; y<2; y++){
      //offsets
    	ox = 8*a*x;
    	oy = 2*8*a*y;
      //modulo para la direccion de la ultima punta
      	/*
        Al darme cuenta como cambian los circulos horizontalmente
        creé esto para modelar el comportamiento
        */
      m = (x)%2;
      
      
      //filas impares
  		for(var j=0; j<4; j++){
    		for(var i=j; i<4+j; i++){
				//movimiento de la punta
          /*
          Estas cosas me permiten hacer los giros, los triangulos
          se rotan al pasar de un cumulo a otro, necesito p para los 
          normales y q para los reflejados con el modulo
          */
        p = ((i+1)%2)*a*m;
        q = ((i)%2)*a*m;
          
				triangle(ox+a*(2*i-2*j), oy+a*2*j+p+q,
								 ox+a*(2*i-2*j+1-(i%2))-p+q, oy+a*(2*j+(i%2)),
								 ox+a*(2*i-2*j+1), oy+a*(2*j+1)-p-q);

        triangle(ox+a*(2*i-2*j+1), oy+a*2*j+p+q,
								 ox+a*(2*i-2*j+2-(i%2))-p+q, oy+a*(2*j+(i%2)),
								 ox+a*(2*i-2*j+2), oy+a*(2*j+1)-p-q);
				}
			}
  
   		//filas pares
			for(var j=0; j<4; j++){
 	  		for(var i=j; i<4+j; i++){
				//movimiento de la punta
        p = ((i+1)%2)*a*m;
        q = ((i)%2)*a*m;
       
				triangle(ox+a*(2*i-2*j)+p+q, oy+a*(2*j+1),
								 ox+a*(2*i-2*j+1-(i%2)), oy+a*(2*j+(i%2)+1)+p-q,
								 ox+a*(2*i-2*j+1)-p-q, oy+a*(2*j+2));
      
    	  triangle(ox+a*(2*i-2*j+1)+p+q, oy+a*(2*j+1),
								 ox+a*(2*i-2*j+1+(i%2)), oy+a*(2*j+2-(i%2))-p+q,
								 ox+a*(2*i-2*j+2)-p-q, oy+a*(2*j+2));
				}
			}
 		}
  }
  
  //Filas 2 y 4 del patron general
  for(var x=0; x<4; x++){
    for(var y=0; y<2; y++){
      //offsets
    	ox = 8*a*x;
    	oy = 8*a + 2*8*a*y;
      //modulo para la direccion de la ultima punta
      m = (x)%2;
      
      
      //filas impares
  		for(var j=0; j<4; j++){
    		for(var i=j; i<4+j; i++){
				//movimiento de la punta
        p = ((i+1)%2)*a*m;
        q = ((i)%2)*a*m;
          
				triangle(ox+a*(2*i-2*j+1)-p-q, oy+a*2*j,
								 ox+a*(2*i-2*j+1-(i%2)), oy+a*(2*j+1-(i%2))-p+q,
								 ox+a*(2*i-2*j)+p+q, oy+a*(2*j+1));

        triangle(ox+a*(2*i-2*j+1)+p+q, oy+a*(2*j+1),
								 ox+a*(2*i-2*j+1+(i%2)), oy+a*(2*j+(i%2))+p-q,
								 ox+a*(2*i-2*j+2)-p-q, oy+a*(2*j));
				}
			}
  
   		//filas pares
			for(var j=0; j<4; j++){
 	  		for(var i=j; i<4+j; i++){
				//movimiento de la punta
        p = ((i+1)%2)*a*m;
        q = ((i)%2)*a*m;
       
				triangle(ox+a*(2*i-2*j+1), oy+a*(2*j+1)+p+q,
								 ox+a*(2*i-2*j+1-(i%2))-p+q, oy+a*(2*j-(i%2)+2),
								 ox+a*(2*i-2*j), oy+a*(2*j+2)-p-q);
      
    	  triangle(ox+a*(2*i-2*j+1), oy+a*(2*j+2)-p-q,
								 ox+a*(2*i-2*j+2-(i%2))-p+q, oy+a*(2*j+2-(i%2)),
								 ox+a*(2*i-2*j+2), oy+a*(2*j+1)+p+q);
				}
			}
 		}
  }
  
  
	}
