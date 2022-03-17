class vuelos{
    constructor(horaSalida,horaLlegada,destino,duracion,ciudad,directo,cop){
        this.horaSalida = horaSalida;
        this.horaLlegada = horaLlegada;
        this.destino = destino;
        this.duracion = duracion;
        this.ciudad = ciudad;
        this.directo = directo;
        this.cop = cop;
    }
}
var formatear = new Intl.NumberFormat('es-Es');

var cop = 375000;
let horaSalida1 = new Date(2022,03,18,10,15,0);
let horaSalida1str = horaSalida1.getHours().toString() + ":" + horaSalida1.getMinutes().toString();

let horaLlegada1 = new Date(2022,03,18,2,15,0);
let horaLlegada1str = horaLlegada1.getHours().toString() + ":" + horaLlegada1.getMinutes().toString();


let vuelo = [{
    "horaSalida" : horaSalida1str,
    "horaLlegada" : horaLlegada1str,
    "ciudad" :"BGT",
    "duracion" : "1h 20Min",
    "destino" : "ADZA",
    "directo" : "Directo",
    "cop" : cop
}];

/* alert("El viaje con destino"+" "+ vuelo[0].destino +" "+ "sale a :" +" "+ vuelo[0].horaSalida +" AM "+ "la Hora de llegada" +" "+ vuelo[0].horaLlegada+" PM"); */
for (let i = 0; i< vuelo.length; i++){
    let horaSalidaVuelo = vuelo[i].horaSalida;
    let horaLlegadavuelo = vuelo[i].horaLlegada;
    let destinoviaje = vuelo[i].destino;

    cargar(horaSalidaVuelo,horaLlegadavuelo,destinoviaje);
}



function cargar(){
    /* varables */
    var contenedor = document.getElementById("container");
    /* creacion de las herramientas */
    var box = document.createElement("div");
    var Titulo = document.createElement("h1");
    var horasalidav = document.createElement("h2");

    var txttitulo = document.createTextNode("Mas Económico");
    var txtParafovi = document.createTextNode(horaSalida +" AM "+ vuelo[0].duracion+" : "+ vuelo[0].horaLlegada+" PM" +" "+ vuelo[0].ciudad +" cop"+ formatear.format(parseInt(vuelo[0].cop)));

    /* contenedor */
    contenedor.appendChild(box);
    /* cajas */
    box.appendChild(Titulo);
    box.appendChild(horasalidav);
    /* contenido */
    Titulo.appendChild(txttitulo);
    horasalidav.appendChild(txtParafovi);
}

window.onload = function(){
    cargar()
}



