function obtener(){
    let parent = document.getElementById("nombreNodo");
    let etiqueta = parent.firstChild;
    alert("El contenido del elemento es " + etiqueta.nodeName);
    let etiquetados = parent.firstElementChild;
    alert("El contenido de elemento es " + etiquetados);
}