function obtenerpadre(){
    let divconted = document.getElementById("conten-1");
    let padreDIVConted = divconted.parentNode.nodeName;
    alert(padreDIVConted);
}