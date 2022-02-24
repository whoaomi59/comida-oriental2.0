
var inicio = 0;
var cantidad = "";
var valorTotal  = 112350;
var formatear = new Intl.NumberFormat('es-Es');


function aumentar(){ 
if( inicio <= 9)
{
    cantidad = document.getElementById('cantidad').value = ++inicio; 
    document.getElementById("totalPro").innerHTML = cantidad;
    document.getElementById("cop").innerHTML = formatear.format(parseInt(cantidad * valorTotal)) ;
   
}

}

function disminuir(){ 
    
if( inicio >= 1) {
     cantidad = document.getElementById('cantidad').value = --inicio;
     document.getElementById("totalPro").innerHTML = cantidad;
     document.getElementById("cop").innerHTML = formatear.format(parseInt(cantidad * valorTotal)) ;
}

}