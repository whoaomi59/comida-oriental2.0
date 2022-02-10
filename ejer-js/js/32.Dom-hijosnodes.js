function leerInfo(){
    let info = document.getElementById("content");
    let infochild = info.childNodes[7];
    let contents = infochild.innerHTML;
    alert(contents);
}