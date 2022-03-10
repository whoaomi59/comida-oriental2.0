
function createTable(){
    if(validarForm()== true){
        let container = document.getElementById("tableJS");
        /* tabla */
         let nodeToAddTable = document.createElement("table");
         let nodeToAddTr = document.createElement("tr");
         let nodeToAddTh = document.createElement("th");
         let nodeToAddTh2 = document.createElement("th");
         let nodeToAddTh3 = document.createElement("th");
         let nodeToAddTh4 = document.createElement("th");
         
         /* texto */
         let nodeToAddText1 = document.createTextNode("Codigo");
         let nodeToAddText2 = document.createTextNode("Descripción");
         let nodeToAddText3 = document.createTextNode("Valor Unitario");
         let nodeToAddText4 = document.createTextNode("Unidad en Stock");
         /* llama la tabla */
         container.appendChild(nodeToAddTable);
         nodeToAddTable.appendChild(nodeToAddTr);
         nodeToAddTr.appendChild(nodeToAddTh);
         nodeToAddTr.appendChild(nodeToAddTh2);
         nodeToAddTr.appendChild(nodeToAddTh3);
         nodeToAddTr.appendChild(nodeToAddTh4);
         /* llama el texto */
         nodeToAddTh.appendChild(nodeToAddText1);
         nodeToAddTh2.appendChild(nodeToAddText2);
         nodeToAddTh3.appendChild(nodeToAddText3);
         nodeToAddTh4.appendChild(nodeToAddText4);
        /*  alert("hello word"); */
    }
   
};


function validarForm(){
    var Codigo = document.getElementById("codigo").value;
    var Descripcion = document.getElementById("descripcion").value;
    var Valor= document.getElementById("valor").value;
    var Stock = document.getElementById("stock").value;
    if (Codigo == ""){
        alert("por favor, ingrese informacion ")
        document.getElementById("codigo").focus();
        return false;
    }
    if (Descripcion == ""){
        alert("por favor, ingrese informacion ")
        document.getElementById("descripcion").focus();
        return false;
    }
    if (Valor == ""){
        alert("por favor, ingrese informacion ")
        document.getElementById("valor").focus();
        return false;
    }
    if (Stock == ""){
        alert("por favor, ingrese informacion ")
        document.getElementById("stock").focus();
        return false;
    }
    return true;

}

function agregarcolumna(data){
    var tblBody = document.getElementById("tableJS");
    var hilera = document.createElemarent("tr");
    var celda1 = document.createElement("td");
    var celda2 = document.createElement("td");
    var celda3 = document.createElement("td");
    var celda4 = document.createElement("td");

    var codigoTXT = document.createTextNode(data.Codigo );
    var descripcionTXT = document.createTextNode(data.descripcion);
    var valorTXT = document.createTextNode(data.valor);
    var stockTXT = document.createTextNode(data.stock);

    celda1.appendChild(codigoTXT);
    celda2.appendChild(descripcionTXT);
    celda3.appendChild(valorTXT);
    celda4.appendChild(stockTXT);

    hilera.appendChild(celda1);
    hilera.appendChild(celda2);
    hilera.appendChild(celda3);
    hilera.appendChild(celda4);
    tblBody.appendChild(hilera);
    
}