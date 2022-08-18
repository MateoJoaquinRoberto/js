<HTML>
<HEAD>
<TITLE>TEST CARRITO</TITLE>
<script type="text/javascript">
//Tabular todo para que quede mas prolijo y visible.
//Las imagenes nunca dejarlas con espacios, cambiarles el nombre ejemplo: the_last_of.jpg y que todas sean de la misma extensión.

const Juegos=[
	{
		nombre:"Red dead redemption 2",
		tipo:"AAA",
		modo:"Singleplayer y Multiplayer",
		desarrollador:"Rockstar",
		precio:2700,
		foto:"./imagenes/red.jfif"
	}
	{
		nombre:"Hunt",
		tipo:"Shotter",
		modo:"Singleplayer y Multiplayer",
		desarrollador:"Davon",
		precio:1000,
		foto:src="./imagenes/hunt.jpg"
	},
	{
		nombre:"Stray",
		tipo:"Puzzles",
		modo:"Singleplayer",
		desarrollador:"Momon",
		precio:500,
		foto:"./imagenes/stray.jpg"
	}
];

let compras=[];
let gastoAcumulado;

//creamos la funcion Comprar

function Comprar () {
	success=false;
	posicion=0;
	precioActual=0;
	gastoAcumulado=0;
	//mientras no ponga cancelar seguira agregando juegos.
	//esto esta hecho medio rustico, pero para q se entienda, porque deberia llamar al array directamente.
	while (Carrito = prompt("Agrega Juego al Carrito")) {
		switch(Carrito) {
			case "Hunt":
				success=true;
				precioActual=1000;
				posicion+=1;
			break;
			case "Stray":
				success=true;
				precioActual=500;
				posicion+=1;
			break;
			default:
				success=false;
				alert("Ese Juego no esta en nuestro catalogo");
			break;
		}
		if (success) {
			alert("Juego "+posicion+" Agregado Correctamente.");
			gastoAcumulado+=precioActual;
			compras.push({Carrito,precioActual}); 
		}
	}
	
	// Cuando el While se cancela.
	console.log(compras);
	alert("Gasto un total: "+gastoAcumulado);

}

//para que quede mas visible cerrar todos los parametros con ;

//el primer confirm pregunta si quiere ver el catalogo de juegos, si lo quiere ver lo lista.
//sino lo quiere ver le pregunta si quiere comprar algún juego (dando por hecho que conoce la lista)


let VideosJuegos = confirm("Queres ver el catalogo de juegos?");
if (VideosJuegos) {

	Juegos.forEach((juego) => {
		alert('Nombre del Juego: ' + juego.nombre + ' Valor: ' + juego.precio);
	});
	
	Comprar();

} else {
	
	let Comprar = confirm("Deseas comprar un Juego?");
	
	//en este caso hacemos el paso inverso para que quede mas prolijo, sino quiere comprar lo despedimos del sitio. d
	//de lo contrario hacemos que arme el carrito.
	
	if (!Comprar) {
		alert("Gracias por Visitar nuestro Sitio.");
	} else {
	
		Comprar();
		
	}
	
}

</script>
</HEAD>

<BODY>
<H1>TEST CARRITO</H1>

<div id="Lista"></div>
<script type="text/javascript">
	var Lista = document.getElementById("Lista");
	compras.forEach((compra) => {
		Lista.innerHTML +='<li>Nombre del Juego: ' + compra.Carrito + ' Valor: ' + compra.precioActual+ ' </li>';
	});
	Lista.innerHTML +='<h2>Gasto Total: '+gastoAcumulado+'</h2>'
</script>

</BODY>
</HTML>