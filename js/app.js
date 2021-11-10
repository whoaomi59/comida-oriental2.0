"use strict"

var costo=32000;
var impuesto=3500;

console.log("subTotal: $" + (costo + impuesto));
console.log("el costo del domicilio es de $2.000");
console.log("con domicilio: $" + (costo + impuesto + 2000));
/* hallando el limite con la constante numbre.MAX */
console.log(Number.MAX_SAFE_INTEGER);
/* hallando el limite con una operacion de potencias  */
console.log(Math.pow(2,53)-1);
/* hallando el limite con la convercion de binario a decimal */
let binario="11111111111111111111111111111111111111111111111111111";
let binarioEndecimal=parseInt(binario,2);
console.log(binarioEndecimal);
console.log(Number.MIN_SAFE_INTEGER);

var tryComvertToNumber= parseInt("hola mundo");
console.log(tryComvertToNumber);