const listadoDeJuegos=["","Red dead redemption 2 " ,
" The last Of Us ", 
" Crushaders Kings III"]


let pasadoAString=listadoDeJuegos.join(" \n ");
alert("Los juegos en stock son: "+pasadoAString)

function Juegos(nombre, tipo, modo, desarrollador, precio){
  this.nombre = nombre;
  this.tipo = tipo;
  this.modo = modo;
  this.desarrollador = desarrollador;
  this.precio = precio;
  this.info = function(){ alert(this.nombre +  this.tipo +  this.modo +  this.desarrollador + this.precio )};
  this.Info2 = function(){alert("El precio final con Iva sera de "+precio*1.75)}
}

const juego1 = new Juegos ("Red Dead Redemption 2 ; ","AAA ; ","Singleplayer y Multiplayer ; ","Rockstar ; ",2700)
const juego2 = new Juegos ("The last Of Us ; ","Aventura ; ","Singleplayer ; ","Nautydog ; ",1500)
const juego3 = new Juegos ("Crushaders Kings III ; ","Estrategia ; ","Singleplayer y Multiplayer ; ","Paradox ; ",2000)

juego1.info();
juego1.Info2();
juego2.info();
juego2.Info2();
juego3.info();
juego3.Info2();




//cuotas y funsion con iva
/*function calcularIva( precio){
  let precioConIva = precio * 1.75;
  return precioConIva
}
  
  
  let conIva = calcularIva(parseInt(prompt("valor del juego sin impuestos")));
  alert("el precio con impuestos es $ "+conIva);
  

  let cuota=parseInt(prompt("cuantas cuotas"))
  if(cuota==2){
    alert("cada cuota sera de $"+(precio+(precio*5/100))/2);
  }else if(cuota==3){ 
    alert("cada cuota sera de $"+(conIva+(conIva*10/100))/3);
    }else if(cuota==4){ 
    alert("cada cuota sera de $"+(conIva+(conIva*15/100))/4);;
    }else if(cuota==5){ 
    alert("cada cuota sera de $"+(conIva+(conIva*20/100))/5);;
    }else if(cuota==6){ 
    alert("cada cuota sera de $"+(conIva+(conIva*25/100))/6);
    }*/


