function obtenerHermanos(){
    let hijosDiv = document.getElementById("hermanos");
    let elemento3 = hijosDiv.childNodes[5];
    /* let nexthermano = elemento3.nextElementSibling.innerHTML; */
    let previosthermano = elemento3.previousElementSibling.innerHTML;
    alert(previosthermano);
    alert(nexthermano);
}