function saludar(){
    console.log("Hola")
} //Declaracion de una funcion

saludar() //Invocacion de una funcion

function sumar(num1,num2){
    console.log(num1+num2)
}

sumar(6,2)

function restar(num1,num2){
    return num1 - num2
}

restar(10,3)

function mostrarPorConsola(string, dato){
    console.log(`${string} ${dato}`)
}

mostrarPorConsola("El resultado es: ", restar(10,3)) //callback


function multiplicar(a,b){
    return `El resultado de la multiplicacion entre ${a} y ${b} es ${a*b}`
    //template literal (backticks)
}


mostrarPorConsola(multiplicar(2,2))


let sumarFlecha = (a, b) => a + b + 100;

mostrarPorConsola(sumarFlecha(10,190))


saludar()
function saludar(){
    console.log("Hola")
}


let saludarFlecha = () => console.log("Hola en flecha")
saludarFlecha() // si o sí despues.

let sumarEnFlecha = (a,b) => { //cuando es más de un renglon, usar llave y return.
    let c = a + b
    return c
}


let restar1 = (a,b) => a-b // return automatico
console.log(restar1(2,1)) 

let producto = {
    id: "1",
    nombre: "chipá",
    precioPorCuarto: 800,
    incluirIva: function(){
        return this.precioPorCuarto * 1.21 // this.x es una variable local, dentro del objeto
    }

}

console.log(producto.incluirIva())