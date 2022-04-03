window.onload = navPrincipal;

function buscar() {

}

function navPrincipal() {
    let contenedorPrincipal = document.getElementById('main-content');

    let boxheader = document.createElement('div');
    boxheader.setAttribute('id', 'boxheader');
    contenedorPrincipal.appendChild(boxheader);

    let navbar = document.createElement('div');
    navbar.setAttribute('id', 'navbar');
    boxheader.appendChild(navbar);

    let lb1 = document.createElement('label');
    lb1.setAttribute('class', "fa fa-bars togels");
    navbar.appendChild(lb1);

    let logo = document.createElement('img');
    logo.setAttribute('src', 'img/logo.PNG');
    logo.setAttribute('class', 'logo');
    navbar.appendChild(logo);

    let inputLogo = document.createElement('input');
    inputLogo.setAttribute('class', 'search');
    inputLogo.setAttribute('id', 'sear');
    inputLogo.setAttribute('placeholder', '¿Que estas buscando?');
    navbar.appendChild(inputLogo);

    let ic = document.createElement('i');
    ic.setAttribute('class', 'fa fa-search');
    ic.setAttribute('id', 'icob');
    navbar.appendChild(ic);

    let a1 = document.createElement('a');
    a1.setAttribute('class', 'homer');
    navbar.appendChild(a1);
    let imgA1 = document.createElement('img');
    imgA1.setAttribute('src', "img/bogota.png");
    a1.appendChild(imgA1);

    let a2 = document.createElement('div');
    a2.setAttribute('class', 'carrito');
    navbar.appendChild(a2);
    let imgA2 = document.createElement('img');
    imgA2.setAttribute('src', "img/carrito.png");
    a2.appendChild(imgA2);

    let a3 = document.createElement('a');
    a3.setAttribute('class', 'cmr');
    navbar.appendChild(a3);
    let imgA3 = document.createElement('img');
    imgA3.setAttribute('src', "img/cmr.png");
    a3.appendChild(imgA3);

    let a4 = document.createElement('a');
    a4.setAttribute('class', 'micuenta');
    navbar.appendChild(a4);
    let imgA4 = document.createElement('img');
    imgA4.setAttribute('src', "img/micuenta.png");
    a4.appendChild(imgA4);

    var navlupa = document.getElementById("icob");
    navlupa.addEventListener("click", mifuncion);

    function mifuncion() {
        document.getElementById("boxheader").innerHTML = "";
        llamarventana();
    }

}


function llamarventana() {
    let contenedor = document.getElementById("main-content");
    let div = document.createElement("div");
    let label = document.createElement("label")
    let input = document.createElement("input");
    input.placeholder = "¿Qué estás buscando?";
    let label2 = document.createElement("label")
        /*===============hijos y relaciones=============*/
    contenedor.appendChild(div);
    div.appendChild(label);
    div.appendChild(input);
    div.appendChild(label2);
    /*===========clases=========*/
    div.setAttribute("class", "boxRemplazo");
    label.setAttribute("class", "fa fa-search icob");
    input.setAttribute("class", "inputSear");
    label2.setAttribute("class", "fa fa-close close");
    label2.setAttribute("id", "closes");

    let navX = document.getElementById('closes');
    navX.addEventListener('click', navStock);

    function navStock() {
        document.getElementById("boxheader").innerHTML = "";
        document.getElementById("main-content").innerHTML = "";

        navPrincipal();
    }
}