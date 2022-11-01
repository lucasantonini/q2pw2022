// let edad = parseFloat(prompt("Ingrese su edad: "))
// console.log(typeof(edad))

// function condicional(parametro){
//     if (parametro > 18){
//         alert("puede ingresar")
//     }else{
//         alert("no puede ingresar")
//     }
// }

// condicional(edad)


if(1){
    console.log("Hola")
}

// edad > 18 ? console.log("puede pasar") : console.log("no puede pasar")

function IMC(peso,altura){
    let indiceMasaCorporal = peso / (altura**2)
    if (indiceMasaCorporal < 18,5){
        console.log("Su IMC es Peso inferior al normal")
    } else if
        (indiceMasaCorporal < 25){
            console.log("Su IMC es normal")
    }else if
        (indiceMasaCorporal < 30){
            console.log("Su IMC es superior al normal")
    } else
        console.log("Su IMC es obesidad")
    }

function queHagoDias(dia){
    switch(dia){
        case "Monday":
            console.log("Party (Lunes)")
            break;
        case "Tuesday":
            console.log("Party (Martes)")
            break;
        case "Saturday":
            console.log("Weekend Party (Sabado)")
            break;
    }
}

queHagoDias("Monday")