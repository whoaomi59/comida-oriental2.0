function leerInfo(){
    let info = document.getElementById("content");
    let infochild = info.childNodes[7];
    let contents = infochild.innerHTML;
    alert(contents);
}

function disponibilidad(){
  
    let nodoconter = 0;
    let nodos = document.getElementById("viajes");

    for (let i=0; i < nodos.childNodes.length; i++){
        if(nodos.childNodes[i].nodeType ===1){
            nodoconter++;
        }

        if(nodoconter === 4){
            nodos.childNodes[i].innerHTML = "Agotado";
            nodos.childNodes[i].style.color = "red";
        }
    }

        
}