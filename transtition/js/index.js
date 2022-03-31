function buscar(){
    var navlupa = document.getElementById("icob");
    navlupa.addEventListener("click", mifuncion);

    function mifuncion(){
        document.getElementById("boxheader").innerHTML = "";
        llamarventana();
    }
    function llamarventana(){
        let contenedor = document.getElementById("boxRemplazo");
        let div =  document.createElement("div");
        let label = document.createElement("label")
        let input= document.createElement("input");
        input.placeholder = "¿Qué estás buscando?";
        let label2 = document.createElement("label")
/*===============hijos y relaciones=============*/
        contenedor.appendChild(div);
        div.appendChild(label);
        div.appendChild(input);
        div.appendChild(label2);
        /*===========clases=========*/
        div.setAttribute("class","boxRemplazo");
        label.setAttribute("class","fa fa-search icob");
        input.setAttribute("class","inputSear");
        label2.setAttribute("class","fa fa-close close");
        label2.setAttribute("id","closes");

        
    }
   
    
}

/*function cerrar(close){
    document.getElementById("boxRemplazo").innerHTML = "";
    llamarventana();
    alert.apply("hello")
    function close(){
        let cerarVentana = document.getElementById("boxheader");
    }*/


