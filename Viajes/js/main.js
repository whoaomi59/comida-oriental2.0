window.onload = function () {
    recorrer();
}
class Vuelos {
    constructor(horaSalida,cuidadSal,duracion, horaLlegada, destino,valor,vuelo){
        this.horaSalida = horaSalida;
        this.cuidadSal=cuidadSal;
        this.duracion=duracion;
        this.horaLlegada = horaLlegada;
        this.destino = destino;
        this.valor = valor;
        this.vuelo = vuelo;
    }
}
let horaSalida1 = new Date(2022,03,18,10,15,0);
let horaSalida1Str= horaSalida1.getHours().toString() + ":" + horaSalida1.getMinutes().toString();

let horaLlegada1 = new Date(2022,03,18,2,25,0);
let horaLlegada1Str= horaLlegada1.getHours().toString() + ":" + horaLlegada1.getMinutes().toString();

let horaSalida2 = new Date(2022,03,18,8,10,0);
let horaSalida2Str= horaSalida2.getHours().toString() + ":" + horaSalida2.getMinutes().toString();

let horaLlegada2 = new Date(2022,03,18,10,20,0);
let horaLlegada2Str= horaLlegada2.getHours().toString() + ":" + horaLlegada2.getMinutes().toString();

let horaSalida3 = new Date(2022,03,18,6,10,0);
let horaSalida3Str= horaSalida2.getHours().toString() + ":" + horaSalida2.getMinutes().toString();

let horaLlegada3 = new Date(2022,03,18,11,20,0);
let horaLlegada3Str= horaLlegada3.getHours().toString() + ":" + horaLlegada3.getMinutes().toString();

let Vuelo =[
    {
        "horaSalida" : horaSalida1Str,
        "cuidadSal": "BOG",
        "duracion": "4 h 10 min",
        "horaLlegada" : horaLlegada1Str,
        "destino" : "ADZ",
        "vuelo" : "directo",
        "valor" : "1.057.600,00"
    },
    {
        "horaSalida" : horaSalida2Str,
        "cuidadSal": "BOG",
        "duracion": "2 h 10 min",
        "horaLlegada" : horaLlegada2Str,
        "destino" : "CTG",
        "vuelo" : "directo",
        "valor" : "405.600,00"
    },
    {
        "horaSalida" : horaSalida3Str,
        "cuidadSal": "BOG",
        "duracion": "5 h 10 min",
        "horaLlegada" : horaLlegada3Str,
        "destino" : "NYC",
        "vuelo" : "directo",
        "valor" : "3.499.000,00"
    }
];

function recorrer() {
    for(let i = 0; i < Vuelo.length; i++){
        let horaSalidaVuelo = Vuelo[i].horaSalida;
        let ciudadSalVuelo = Vuelo[i].cuidadSal;
        let duracionVuelo = Vuelo[i].duracion;
        let horaLlegadaVuelo = Vuelo[i].horaLlegada;
        let destinoVuelo = Vuelo[i].destino;
        let infoVuelo = Vuelo[i].vuelo;
        let valorVuelo = Vuelo[i].valor;
        mostrarInfo(horaSalidaVuelo,ciudadSalVuelo,duracionVuelo,horaLlegadaVuelo,destinoVuelo,infoVuelo,valorVuelo)
    }
}
function mostrarInfo(horaSalidaVuelo,ciudadSalVuelo,duracionVuelo,horaLlegadaVuelo,destinoVuelo,infoVuelo,valorVuelo) {
    let contenedorPrincipal = document.getElementById("main-content");
    let contenedorInfoVuelos = document.createElement("div");

contenedorPrincipal.appendChild(contenedorInfoVuelos);

let spantitulo = document.createElement("span")
let textSpantitulo = document.createTextNode("Más rápido")
let labelhoraSal = document.createElement("label");
let textoHoraSal = document.createTextNode(horaSalidaVuelo);
let labeltext = document.createElement("label");
let texto = document.createTextNode("duración");
let labelCiuSal = document.createElement("label");
let textoCiuSal = document.createTextNode(ciudadSalVuelo);
let labelDurSal = document.createElement("label");
let textoDurSal = document.createTextNode(duracionVuelo);
let labelhoraLleg = document.createElement("label");
let textoHoraLleg = document.createTextNode(horaLlegadaVuelo);
let labelDestino = document.createElement("label");
let textoDestino = document.createTextNode(destinoVuelo);
let separador = document.createElement("hr");
let labelInfoVuelo = document.createElement("label");
let textInfoVuelo = document.createTextNode(infoVuelo);
let labeltextvalor = document.createElement("label");
let textvalor = document.createTextNode("Adulto desde");
let labelvalorVuelo = document.createElement("label");
let textvalorVuelo = document.createTextNode(valorVuelo);

contenedorInfoVuelos.appendChild(spantitulo);
spantitulo.appendChild(textSpantitulo);
contenedorInfoVuelos.appendChild(labelhoraSal);
labelhoraSal.appendChild(textoHoraSal);
contenedorInfoVuelos.appendChild(labeltext);
labeltext.appendChild(texto);
contenedorInfoVuelos.appendChild(labelCiuSal);
labelCiuSal.appendChild(textoCiuSal);
contenedorInfoVuelos.appendChild(labelDurSal);
labelDurSal.appendChild(textoDurSal);
contenedorInfoVuelos.appendChild(labelhoraLleg);
labelhoraLleg.appendChild(textoHoraLleg);
contenedorInfoVuelos.appendChild(labelDestino);
labelDestino.appendChild(textoDestino);
contenedorInfoVuelos.appendChild(separador);
contenedorInfoVuelos.appendChild(labelInfoVuelo);
labelInfoVuelo.appendChild(textInfoVuelo);
contenedorInfoVuelos.appendChild(labeltextvalor);
labeltextvalor.appendChild(textvalor);
contenedorInfoVuelos.appendChild(labelvalorVuelo);
labelvalorVuelo.appendChild(textvalorVuelo);

contenedorInfoVuelos.setAttribute("class", "style-contentInfo");
spantitulo.setAttribute("class","tituloSpan");
labelhoraSal.setAttribute("class","horaSal");
labelCiuSal.setAttribute("class","ciudadSal");
labeltext.setAttribute("class","txtduracion");
labelDurSal.setAttribute("class","duracion");
labelhoraLleg.setAttribute("class","horaLleg");
labelDestino.setAttribute("class","destino");
separador.setAttribute("class","lineaDiv");
labelInfoVuelo.setAttribute("class","info");
labeltextvalor.setAttribute("class","infoValor");
labelvalorVuelo.setAttribute("class","valor");
}
