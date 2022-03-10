function createTable(){
    if(validarInfo() == false) return false; 
    let tabla = document.getElementById('tabla-principal');
    if(!tabla) crearTabla();
    agregarFila();
}
function crearTabla (){  
 let nodeAddTable = document.createElement("tables");
    let contenedor = document.getElementById("tablesJS");
   
    let nodeAddtr = document.createElement("tr");
    let nodeAddth = document.createElement("th");
    let nodeAddth2 = document.createElement("th");
    let nodeAddth3= document.createElement("th");
    let nodeAddth4 = document.createElement("th");
    let nodeAddTexto = document.createTextNode("Codigo");
    let nodeAddTexto2 = document.createTextNode("Descripcion");
    let nodeAddTexto3 = document.createTextNode("Valor Unitario");
    let nodeAddTexto4 = document.createTextNode("Unidades en Stock");

    contenedor.appendChild(nodeAddTable);
    nodeAddTable.appendChild(nodeAddtr);
    nodeAddtr.appendChild(nodeAddth);
    nodeAddtr.appendChild(nodeAddth2);
    nodeAddtr.appendChild(nodeAddth3);
    nodeAddtr.appendChild(nodeAddth4);
    nodeAddth.appendChild(nodeAddTexto);
    nodeAddth2.appendChild(nodeAddTexto2);
    nodeAddth3.appendChild(nodeAddTexto3);
    nodeAddth4.appendChild(nodeAddTexto4); 

    nodeAddTable.setAttribute("class", "tablacreate");
    nodeAddTable.setAttribute("id", "tabla-principal");
};

function validarInfo(){
    let Codigo = document.getElementById('codigo');
    let Descripcion = document.getElementById('descripcion');
    let ValorUnit = document.getElementById('valor');
    let Stock = document.getElementById('stock');

    if(Codigo.value == '') {
        Codigo.focus();
        alert('Codigo no puede estar vacio')
        return false;
    }
    if(Descripcion.value == '') {
        Descripcion.focus();
        alert('Descripcion no puede estar vacio')
        return false;
    }
    if(ValorUnit.value == '') {
        ValorUnit.focus();
        alert('ValorUnit no puede estar vacio')
        return false;
    }
    if(Stock.value == '') {
        Stock.focus();
     
        alert('Stock no puede estar vacio')
        return false;
    }
    return true;
}

function agregarFila(){
    let Codigo = document.getElementById('codigo');
    let Descripcion = document.getElementById('descripcion');
    let ValorUnit = document.getElementById('valor');
    let Stock = document.getElementById('stock');

    let tabla = document.getElementById('tabla-principal');
    let fila = document.createElement('tr');
    let celda1 = document.createElement('td');
    let celda2 = document.createElement('td');
    let celda3 = document.createElement('td');
    let celda4 = document.createElement('td');

    let info1 = document.createTextNode(Codigo.value);
    let info2 = document.createTextNode(Descripcion.value);
    let info3 = document.createTextNode(ValorUnit.value);
    let info4 = document.createTextNode(Stock.value);

    celda1.appendChild(info1);
    celda2.appendChild(info2);
    celda3.appendChild(info3);
    celda4.appendChild(info4);

    fila.appendChild(celda1);
    fila.appendChild(celda2);
    fila.appendChild(celda3);
    fila.appendChild(celda4);
    tabla.appendChild(fila)
}
