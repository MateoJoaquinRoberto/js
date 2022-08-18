//Juegos disponobles 
const Juegos=[
  {
    id: 1,
    nombre:" Red dead redemption 2 ",
    tipo:"AAA",
    modo:"Singleplayer y Multiplayer",
    desarrollador:"Rockstar",
    precio:2700,
    foto:"./imagenes/red.jfif"
  },
  
  {
    id: 2,
    nombre:" The last Of Us ",
    tipo:"Aventura",
    modo:"Singleplayer",
    desarrollador:"Nautydog",
    precio:1500,
    foto:src="./imagenes/the last of.jpg"
},

{
  id: 3,
  nombre:" Crushaders Kings III ",
  tipo:"Estrategia",
  modo:"Singleplayer y Multiplayer",
  desarrollador:"Paradox",
  precio:3800,
  foto: src="./imagenes/crushader.jfif"
},

{
  id: 4,
  nombre:" Sims 4",
  tipo:"Simulador",
  modo:"Singleplayer",
  desarrollador:"Ea",                                        
  precio:2000,
  foto:src="./imagenes/sims.jpg"
},

{
  id: 5,
  nombre:" Gta V ",
  tipo:"Aventura",
  modo:"Singleplayer y Multiplayer",
  desarrollador:"Rockstar",
  precio:3000,
  foto:src="./imagenes/gta2.jpg"
},                                                      

{
  id: 6,
  nombre:" NBA 2k23 ",
  tipo:"Deportes",
  modo:"Singleplayer y Multiplayer",
  desarrollador:"2k",
  precio:4000,
  foto:src="./imagenes/nba1.jpg"
},

{
  id: 7,
  nombre:" Hunt ",
  tipo:"Shotter",
  modo:"Singleplayer y Multiplayer",
  desarrollador:"Davon",
  precio:1000,
  foto:src="./imagenes/hunt.jpg"
},

{
  id: 8,
  nombre:" Stray ",
  tipo:"Puzzles",
  modo:"Singleplayer",
  desarrollador:"Momon",
  precio:500,
  foto:"./imagenes/stray.jpg"
},

];

//agregar al carrito y seleccion de productos

let compras=[]



//doom
console.dir(document.body)


renderizarProducto()
//cartas
function renderizarProducto(){ 
let cartas=document.getElementById("cartas");
for(const juego of Juegos){
  let carta=document.createElement("div");
  carta.className="card col-md-3";
  carta.innerHTML=`
  <img src=${juego.foto} class="card-img-top">
  <div class="card-body">
  <h5 class="card-title">${juego.nombre}</h5>
  <p class="card-text">${"$" + juego.precio}</p>
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">${juego.tipo}</li>
  <li class="list-group-item">${juego.modo}</li>
  <li class="list-group-item">${"desarrolador: "+ " "+juego.desarrollador}</li>
  </ul>
  <br>
  <button class="btn btn-primary" id='btn${juego.id}'>Comprar</button>
  `;
  cartas.append(carta);
}


//eventos
Juegos.forEach(juego=>{
  document.getElementById(`btn${juego.id}`).addEventListener("click",function(){
    agregarAlCarrito(juego);
    })

  })

}


//agregar al carrito
function agregarAlCarrito(juego){
  compras.push(juego);
  console.log(compras)

  document.getElementById("inferior").innerHTML+=`
    <tr>
      <td>${juego.nombre}</td>
      <td>${juego.desarrollador}</td>
      <td>${juego.precio}</td>
    </tr>`
    alert("Producto agregado al carrito de compras")
    
    
    //Suma final con impuestos 
    const total = compras.reduce((ecc, el) => ecc + el.precio *1.71, 0 )
    alert("El total de los juegos más la suma de impuestos es de: " + "$" + total)
  }

//cuotas (implimentar al final )
/* alert(JuegosConImpuestos) */

//cuotas y funsion con iva
/*function calcularIva( precio){
  let precioConIva = precio * 1.75;
  return precioConIva
  
  
  
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


