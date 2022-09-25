//api
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "938ff85bd2msh3a2c5158a349111p10615cjsn559d817c2df2",
    "X-RapidAPI-Host": "twitch-game-popularity.p.rapidapi.com",
  },
};

fetch("https://twitch-game-popularity.p.rapidapi.com/games", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
//Juegos disponobles
const Juegos = [
  {
    id: 1,
    nombre: " Red dead redemption 2 ",
    tipo: "AAA",
    modo: "Singleplayer y Multiplayer",
    desarrollador: "Rockstar",
    precio: 2700,
    foto: "./imagenes/red.jfif",
  },

  {
    id: 2,
    nombre: " The last Of Us ",
    tipo: "Aventura",
    modo: "Singleplayer",
    desarrollador: "Nautydog",
    precio: 1500,
    foto: (src = "./imagenes/thelastof.jpg"),
  },

  {
    id: 3,
    nombre: " Crushaders Kings III ",
    tipo: "Estrategia",
    modo: "Singleplayer y Multiplayer",
    desarrollador: "Paradox",
    precio: 3800,
    foto: (src = "./imagenes/crushader.jfif"),
  },

  {
    id: 4,
    nombre: " Sims 4",
    tipo: "Simulador",
    modo: "Singleplayer",
    desarrollador: "Ea",
    precio: 2000,
    foto: (src = "./imagenes/sims.jpg"),
  },

  {
    id: 5,
    nombre: " Gta V ",
    tipo: "Aventura",
    modo: "Singleplayer y Multiplayer",
    desarrollador: "Rockstar",
    precio: 3000,
    foto: (src = "./imagenes/gta2.jpg"),
  },

  {
    id: 6,
    nombre: " NBA 2k23 ",
    tipo: "Deportes",
    modo: "Singleplayer y Multiplayer",
    desarrollador: "2k",
    precio: 4000,
    foto: (src = "./imagenes/nba1.jpg"),
  },

  {
    id: 7,
    nombre: " Hunt ",
    tipo: "Shotter",
    modo: "Singleplayer y Multiplayer",
    desarrollador: "Davon",
    precio: 1000,
    foto: (src = "./imagenes/hunt.jpg"),
  },

  {
    id: 8,
    nombre: " Stray ",
    tipo: "Puzzles",
    modo: "Singleplayer",
    desarrollador: "Momon",
    precio: 500,
    foto: "./imagenes/stray.jpg",
  },
];

//inicio de sesion del usuario
//inicio de sesion del usuario
for(let i= 1;i<=3;i++){
  let Usuario=prompt("Pone tu nombre de usuario")
  let contraseña=prompt("Ingresa tu contraseña")
  let IntentosRestantes=3-i;
  if(Usuario=="Laura"&&contraseña=="coder"){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Bienvenida Laura',
      showConfirmButton: false,
      timer: 1500,

    })
    break;
  }
   while(Usuario!=="Laura"&&contraseña!=="coder"){
     alert("ERROR, te quedan "+ IntentosRestantes +" intentos");
     break;
    } Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'El nombre de usuario o la clave,son incorrectas',
      showConfirmButton: false,
      timer: 2000
    })
  }

//agregar al carrito y seleccion de productos

let compras = [];

//doom
console.dir(document.body);

renderizarProducto();
//cartas
function renderizarProducto() {
  let cartas = document.getElementById("cartas");
  for (const juego of Juegos) {
    let carta = document.createElement("div");
    carta.className = "card col-md-3";
    carta.innerHTML = `
  <img src=${juego.foto} class="card-img-top">
  <div class="card-body">
  <h5 class="card-title">${juego.nombre}</h5>
  <p class="card-text">${"$" + juego.precio}</p>
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">${juego.tipo}</li>
  <li class="list-group-item">${juego.modo}</li>
  <li class="list-group-item">${
    "desarrolador: " + " " + juego.desarrollador
  }</li>
  </ul>
  <br>
  <button class="btn btn-primary" id='btn${juego.id}'>Comprar</button>
  `;
    cartas.append(carta);
  }
  
  //eventos
  Juegos.forEach(juego=>{
  document.getElementById(`btn${juego.id}`).addEventListener("click", function () {
        agregarAlCarrito(juego);
        let btn$ = document.getElementById(`btn${juego.id}`)
        btn$.innerText = "Juego ya agregado al carrito"
        let carro = document.getElementById("carro")
        carro.innerText =  "Este es tu carrito de compras actual ";
        localStorage.setItem("compras", JSON.stringify(compras));
      })
  })
  let newBtn = document.createElement("button");
  newBtn.id = "newBtn";
  newBtn.textContent = "Finalizar";
  newBtn.style.background = "#0d6efd";
  newBtn.style.color = "white";
  newBtn.style.borderRadius = "solid";
  newBtn.style.marginLeft = "76%";
  document.getElementById("listo").append(newBtn);

  let Borrar = document.createElement("button");
  Borrar.id = "trash";
  Borrar.textContent = "Eliminar "
  Borrar.style.background = "red";
  Borrar.style.color = "black";
  Borrar.style.borderRadius = "solid";
  Borrar.style.marginLeft = "76%";
  document.getElementById("borron").append(Borrar)
}

let comprasMemoria = JSON.parse(localStorage.getItem("compras"));

if (comprasMemoria != null && comprasMemoria != undefined) {
  comprasMemoria.forEach((juego) => {
    agregarAlCarrito(juego);
  })
}

//spread
JuegoPremiado = {
  ...Juegos[1],
  premio: "la mejor banda sonora ",
};
console.log(JuegoPremiado);

//agregar al carrito
function agregarAlCarrito(juego) {
  compras.push(juego);
  console.log(compras);

  document.getElementById("inferior").innerHTML += `
  <tr>
  <td>${juego.nombre}</td>
  <td>${juego.desarrollador}</td>
      <td>${juego.precio}</td>
      </tr> 
      `;
}

//eliminar del carrito
document.getElementById("trash").addEventListener("click",function(){
  Swal.fire({
    title: 'Estas seguro?',
    text: "Se eliminara el carrito de compras",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Borrar!'
  }).then((result) => {
    if (result.isConfirmed) { 
      Swal.fire(
        'Deleted!',
        'Tu carrito a sido borrado.',
        'success'
      )
    }
  })
  
})
//Suma final con impuestos
document.getElementById("listo").addEventListener("click", function () {
  let total = compras.reduce((ecc, el) => ecc + el.precio * 1.71, 0);
  swal
    .fire(
      "El total de los juegos más la suma de impuestos es de: ",
      "$" + total,
      "success"
    )
    .then(() => {
      let promocion = compras.length > 2;

      promocion
        ? swal.fire(
            "DESCUENTO",
            "Al tener más de dos juegos en el carrito aplica una promocion"
          )
        : swal.fire(
            "DESCUENTO",
            "Agregando más juegos podes tener un descuento"
          );
      if (promocion) {
        total *= 0.7;
      } else if (promocion > 3) {
        total *= 0.9;
      }
    })
})
