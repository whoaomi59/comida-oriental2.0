
var formatear = new Intl.NumberFormat('es-Es');


function Automovil(marca,modelo,valor,anyo,kilometros,ciudad,imagen){
    this.marca = marca;
    this.modelo = modelo;
    this.valor = valor;
    this.anyo = anyo;
    this.kilometros = kilometros;
    this.ciudad = ciudad,
    this.imagen = imagen;
}
/*RAMA MAZDA*/
/*AUTO NUMERO 1°*/
var valor1  = 82500000;
let auto1 = new Automovil("Mazda","3",formatear.format(parseInt(valor1)),2019,65800,"Cali","img/mazda31.jpg");
/*AUTO NUMERO 2°*/
var valor2  = 95500000;
let auto2 = new Automovil("Mazda","Cx-5 Turing",formatear.format(parseInt(valor2)),2015,65800,"Bogota","img/mazda2.jpg");
/*AUTO NUMERO 3°*/
var valor3  = 82500000;
let auto3 = new Automovil("Mazda","Cx-30 Turing",formatear.format(parseInt(valor3)),2018,65800,"Medellin","img/mazda3.jpg");
/*RAMA TOYOTA*/
/*AUTO NUMERO 1°*/
var valort1  = 82500000;
let autot1 = new Automovil("Toyota","3",formatear.format(parseInt(valort1)),2019,65800,"Cali","img/toyota1.jpg");
/*AUTO NUMERO 2°*/
var valort2  = 95500000;
let autot2 = new Automovil("Toyota","Prado",formatear.format(parseInt(valort2)),2022,65800,"Medellin","img/toyota2.jpg");

/*function mostrar(auto){
    mostrarInformacion (auto1)
    mostrarInformacion (auto2)
    mostrarInformacion (auto3)
}*/

function mostrarInformacion(auto){
    /* llamamos al contenedor que creamos en html */
    let contenedor = document.getElementById("main-content");
    
    /* creamos un div y un parrafo  */
    let nodeAddConter = document.createElement("div");
    nodeAddConter.setAttribute('class','boxconter')
    /*div de la imagen*/
    var boximg = document.createElement("div");
    boximg.setAttribute('class','png');
    let nodeImg = document.createElement("img");
    nodeImg.setAttribute('class','imagen');
    /*div del parrafo*/
    var boxparafo = document.createElement("div");
    let nodeAddLabel = document.createElement("p");
    nodeAddLabel.setAttribute('class','parafo1')
    var parrafo1 = document.createElement("p");
    var parrafo2 = document.createElement("p");
   
    boxparafo.setAttribute('class','texto')
     /* llamamos al aunto para poder sacar la marca y el año */
    let TxtMarca = document.createTextNode(auto.marca +" "+ auto.modelo );
    var txtPrecio = document.createTextNode(" $"+auto.valor);
    var txtanyo = document.createTextNode(auto.anyo +"-"+ auto.kilometros+"km-"+auto.ciudad);
    /*let TxtMarca = document.createTextNode(auto.marca +" "+ auto.modelo  + " $"+auto.valor +" "+ auto.anyo);*/
    
    
    /* llamamos el div, label y el texto con el parametro appendChild*/
    contenedor.appendChild(nodeAddConter);
    nodeAddConter.appendChild(boximg);
    boximg.appendChild(nodeImg);
    nodeImg.setAttribute("src", auto.imagen,);


    contenedor.appendChild(nodeAddConter);
    nodeAddConter.appendChild(boxparafo);
    boxparafo.appendChild(nodeAddLabel)
    boxparafo.appendChild(parrafo1);
    boxparafo.appendChild(parrafo2);

    nodeAddLabel.appendChild(TxtMarca);
    parrafo1.appendChild(txtPrecio);
    parrafo2.appendChild(txtanyo);
}

function limpiarVentana() {
    document.getElementById("main-content").innerHTML = "";
}
window.addEventListener("keydown",function(event){
    

    let busqueda = document.getElementById("filtro").value;
    
    if (event.key == "Enter"){
        limpiarVentana();
        if(busqueda == "Mazda"){
        mostrarInformacion (auto1)
        mostrarInformacion (auto2)
        mostrarInformacion (auto3)
        }
        else if(busqueda == "Toyota"){
        mostrarInformacion (autot1)
        mostrarInformacion (autot2)
        }
        else{
            this.alert("No se han encontrado coincidencias.");

        }
    }
 
});
