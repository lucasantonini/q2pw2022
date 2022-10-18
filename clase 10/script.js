console.log("Hola mundo")

// comentario



// convencion JS: camelCase <-----
// convencion Py: snake_case
// kebab-case
// l33t
// PascalCase



// TIPOS DE DATOS
// NaN = not a number


// int Numero = 10
// str nombre = "Esteban"

// true - false
// truthy - falsy

// + - *

console.log(1+1);
console.log(1-1);
console.log(1*1);
console.log(1/1);

console.log("lucas"+"Antonini");
console.log("11"-1);
console.log("10"+2);   // RARO Y PELIGROSO

console.log("lucas" && "Antonini");   // recorre todo y muestra el ultimo true
console.log("lucas" || "Antonini");   // "lucas" es true y le alcanza con eso

console.log(10/5);
console.log(10%5);
console.log(3**2);

console.log(1==1);
console.log(1!=1);
console.log("1"==1);
console.log("1"===1);
console.log("1"!==1);




/*

1) Pedir dos numeros
2) Pedir una operacion 

*/


let primerNum = prompt("Ingrese el primer numero")
let operacion = prompt("Ingrese el tipo de operacion")
let segundoNum = prompt("Ingrese el segundo numero")

if (operacion == "/" ) alert(primerNum / segundoNum)
if (operacion == "*" ) alert(primerNum * segundoNum)
if (operacion == "+" ) alert( parseInt(primerNum) + parseInt(segundoNum) )
if (operacion == "-" ) alert(primerNum - segundoNum)