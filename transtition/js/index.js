function buscar(){
    var navlupa = document.getElementById("icob");
    navlupa.addEventListener("click", mifuncion);

    function mifuncion(){
        document.getElementById("header").innerHTML = "";
        llamarventana();
    }
    function llamarventana(){
        let contenedor = document.getElementById("header");
        let div =  document.createElement("div");
        let iconolupa= document.createElement("input");
        
        contenedor.appendChild(div);
        div.setAttribute("class","box")
        vid.appendChild(iconolupa);
        iconolupa.setAttribute("class","inputSear")
    }
    
}