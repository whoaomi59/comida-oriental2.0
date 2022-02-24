
var inicio = 0;
var cantidad = "";
var valorTotal  = new Intl.NumberFormat('de-DE').format(112350) ;



function aumentar(){ 
if( inicio <= 9)
{
    cantidad = document.getElementById('cantidad').value = ++inicio; 
    document.getElementById("totalPro").innerHTML = cantidad;
    document.getElementById("cop").innerHTML = cantidad * valorTotal;
   
}

}

function disminuir(){ 
    
if( inicio >= 1) {
     cantidad = document.getElementById('cantidad').value = --inicio;
     document.getElementById("totalPro").innerHTML = cantidad;
     document.getElementById("cop").innerHTML = cantidad * valorTotal;
}

}