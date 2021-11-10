/* mostrando los elementos de un arreglo atraves de un for */
var aprendices=["david","daniela","alejandro","carlos"]
for (i = 0; i <= 3; i++){
    console.log("aprendiz N." + (i + 1) + " : " + aprendices[i]);
}
/* cargar informacion a un arreglo */
var producto1 = new  Array();
var producto2 = new  Array();
var producto3 = new  Array();

var productos = new Array();


for(var i=  0; i <= 2; i++){
    alert("ingrese el registro numero N." +(i + 1));
    if(i === 0){
        for(var j=0; j <= 4; j++){
            producto1[j] = prompt("producto N." + (i + 1)+"_" + (j+ 1) + " : ")
        }
        productos[i] = producto1;
    }

    if(i === 1){
        for(var j=0; j <= 4; j++){
            producto2[j] = prompt("producto N." + (i + 1)+"_" + (j+ 1) + " : ")
        }
        productos[i] = producto2;
    }

    if(i === 2){
        for(var j=0; j <= 4; j++){
            producto3[j] = prompt("producto N." + (i + 1)+"_" + (j+ 1) + " : ")
        }
        productos[i] = producto3;
    }

    alert(productos + "\n");
}
