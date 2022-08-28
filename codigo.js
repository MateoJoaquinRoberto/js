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
    foto:src="./imagenes/thelastof.jpg"
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
    let btn$ =  document.getElementById(`btn${juego.id}`)
    btn$.innerText="Juego ya agregado al carrito"
    let carro = document.getElementById("carro")
    carro.innerText="Este es tu carrito de compras actual ";
    localStorage.setItem("compras",JSON.stringify(compras))
  })
})
let newBtn = document.createElement('button');
newBtn.id = 'newBtn';
newBtn.textContent = 'Finalizar';
 newBtn.style.background="#0d6efd";
 newBtn.style.color="white";
 newBtn.style.borderRadius="solid";
 newBtn.style.marginLeft="76%";
 document.getElementById('listo').append(newBtn)
}

let comprasMemoria = JSON.parse(localStorage.getItem("compras"));

comprasMemoria.forEach(juego=>{
  agregarAlCarrito(juego);
})
//spread 
JuegoPremiado={
  ...Juegos[1],
  premio:"la mejor banda sonora "
}
console.log(JuegoPremiado)

//agregar al carrito
function agregarAlCarrito(juego){
  compras.push(juego);
  console.log(compras)

  
  document.getElementById("inferior").innerHTML+=`
  <tr>
  <td>${juego.nombre}</td>
  <td>${juego.desarrollador}</td>
      <td>${juego.precio}</td>
      </tr> 
      `
     
    }

  
    //Suma final con impuestos 
    document.getElementById('listo').addEventListener("click",function(){
    let total= compras.reduce((ecc, el) => ecc + el.precio *1.71, 0 )
    alert("El total de los juegos más la suma de impuestos es de: " + "$" + total)

    let promocion = (compras.length>2) 

    promocion ? alert("Al tener más de dos juegos en el carrito aplica una promocion") : alert("Agregando más juegos podes tener un descuento")
    if (promocion){
      total*=0.7
    }else if (promocion>3){
      total*=0.9
    }
  })
    
  
    
    
    
    


  











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


