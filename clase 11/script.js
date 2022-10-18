



let alumno1 = {
    nombre : "Lucas",
    apellido : "Antonini",
    rol : "Alumno",
    Edad : 20,
    enActividad : true

    // par clave:valor,
    //


}

let usuarioInstagram = {
    id:"",
    mail: "",
    telefono: "",
    usuario: "",
    contraseña: "",
    nombre:"",
    apellido:"",
    fechaDeNacimiento:"",
    cantidadDeFotos:"",
    usuariosQueSigue:"",
    usuariosSeguidores:"",
}

let usuarioLinkedin = {
    id:"",
    nombre:"",
    apellido:"",
    experienciaLaboral:"",
    formacionAcademica:"",
}


console.log(alumno1.nombre)
console.table(alumno1)


// Arrays - vector - lista

const NOMBRES = ["Lucas", "Willy", "Mate","Pedro"]
console.log(NOMBRES)
console.log(NOMBRES[1]) // los arrays empiezan en 0
console.log(NOMBRES[0])


const CARRITO = []    // const supuestamente no se puede cambiar pero aca si se puede porque no cambias el cajon, solo su contenido
console.log(CARRITO)
CARRITO.push("hola")
console.log(CARRITO)
CARRITO.push("chau")
console.log(CARRITO)
CARRITO.pop() //elimina un elemento
console.log(CARRITO) // LAST IN - FIRST OUT
CARRITO.unshift("unshift") //agrega un elemento al principio
console.log(CARRITO)
CARRITO.shift() //elimina el primer elemento
console.log(CARRITO) //FIRST IN - FIRST OUT
console.log(CARRITO.length)

const ARRAYDEVARIASCOSAS = ["Esteban",29,true]
console.log(ARRAYDEVARIASCOSAS)

const INDICES = [0,1,2]
const NOMBREUSUARIOS = ["asd", "wasd", "gefd"]
const APELLIDOSUSUARIOS = ["gutierrez", "perez", "antonini"]

// push - pop
// shift - unshift
// splice - slice
// join - toString
// indexOf - lastIndexOf - includes