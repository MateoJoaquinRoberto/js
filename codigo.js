//Objetos
const Juegos=[
  {
    nombre:" Red dead redemption 2 ",
    tipo:"AAA",
    modo:"Singleplayer y Multiplayer",
    desarrollador:"Rockstar",
    precio:2700
  },
  
  {
    nombre:" The last Of Us ",
    tipo:"Aventura",
    modo:"Singleplayer",
    desarrollador:"Nautydog",
    precio:1500
},

{
  nombre:" Crushaders Kings III ",
  tipo:"Estrategia",
  modo:"Singleplayer y Multiplayer",
  desarrollador:"Paradox",
  precio:3800
},

{
  nombre:" Sims 4",
  tipo:"Simulador",
  modo:"Singleplayer",
  desarrollador:"Ea",                                        
  precio:2000
},

{
  nombre:" Gta V ",
  tipo:"Aventura",
  modo:"Singleplayer y Multiplayer",
  desarrollador:"Rockstar",
  precio:3000
},                                                      

{
  nombre:" NBA 2k23 ",
  tipo:"Deportes",
  modo:"Singleplayer y Multiplayer",
  desarrollador:"2k",
  precio:4000
},

{
  nombre:" Hunt ",
  tipo:"Shotter",
  modo:"Singleplayer y Multiplayer",
  desarrollador:"Davon",
  precio:1000
},

{
  nombre:" Stray ",
  tipo:"Puzzles",
  modo:"Singleplayer",
  desarrollador:"Momon",
  precio:500
},

];

//agregar al carrito

let compras=[]

let VideosJuegos = prompt("Queres ver el catalogo de juegos?(Si o No) ")

while(VideosJuegos!="Si" && VideosJuegos!="No"){
  alert("Ingresa Si o No")
  VideosJuegos = prompt("Queres ver el catalogo de juegos?(Si o No) ")
}

if(VideosJuegos=="Si"){
  alert("Lista de Videojuegos disponibles a continuacion")
  let TodosLosJuegos = Juegos.map((Juego)=>Juego.nombre + " " + "$" +Juego.precio  );
alert(TodosLosJuegos.join("-"))
} else if (VideosJuegos =="No"){ 
alert("Gracias por visitarnos")
}

while(VideosJuegos!= "No"){
  let juego = prompt("Agrega un Videojuego de la lista que quieras")
  let precio = 0

  if(juego == "Red dead redemption 2" || juego == "The last Of Us" || juego == "Crushaders Kings III"  || 
  juego == "Sims 4" || juego == "Gta V" || juego == "NBA 2k23" || juego == "Hunt" || juego == "Stray") {  
    switch(juego) { 
    case "Red dead redemption 2":
      precio = 2700
      break;
    case "The last Of Us":
      precio = 1500;
      break;
    case "Crushaders Kings III":
      precio = 3000;
      break;
    case "Sims 4":
      precio = 2000;
      break;
    case "Gta V":
      precio = 3000;
      break;
    case "NBA 2k23":
      precio = 4000;
      break;
    case "Hunt":
      precio = 1000;
      break;
    case "Stray":
      precio = 500;
      break;    
    default:
      break;          
      
    } 
  compras.push({juego, precio}); 
  console.log(compras)
  } else{
    alert("Juego no disponible")
  }
  VideosJuegos = prompt("Queres agregar otro juego al carrito?(Si o No)")

  while(VideosJuegos == "No"){
    alert("Gracias por tu compra,tu juego esta en tu carrito")
    compras.forEach((CompraTerminada)=>{
      console.log("Juego: " + CompraTerminada.juego + " " + "precio: " + "$" + CompraTerminada.precio)
    })
  break;
  }
}

const total = compras.reduce((ecc, el) => ecc + el.precio *1.71, 0 )
console.log("El total de los juegos más la suma de impuestos es de: " + "$" + total)


/* const JuegosConImpuestos=Juegos.map(juego => {
  return {
      nombre: Juego.nombre,
      tipo: Juego.tipo,
      precio: Juego.precio * 1.71
  }
/* ); */ 

/* alert(JuegosConImpuestos) */

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


