function calcularIva(precio){
    let precioConIva = precio * 1.75;
    return precioConIva
}
  
  let conIva = calcularIva(parseInt(prompt("valor del juego sin impuestos")));
  alert("el precio con impuestos es $ "+conIva);
  
 
  let cuota=parseInt(prompt("cuantas cuotas"))
    if(cuota==2){
    alert("cada cuota sera de $"+(conIva+(conIva*5/100))/2);
    }else if(cuota==3){ 
    alert("cada cuota sera de $"+(conIva+(conIva*10/100))/3);
    }else if(cuota==4){ 
    alert("cada cuota sera de $"+(conIva+(conIva*15/100))/4);;
    }else if(cuota==5){ 
    alert("cada cuota sera de $"+(conIva+(conIva*20/100))/5);;
    }else if(cuota==6){ 
    alert("cada cuota sera de $"+(conIva+(conIva*25/100))/6);
    }