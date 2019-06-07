let onReady = () =>{

        /*let nombre = "Web"
        if(true){

            let nombre = "BD"
            console.log(nombre)

        }
        console.log(nombre)*/

       /* const nombre = "Web"
        if(true){

            nombre = "BD"
            console.log(nombre)

        }

        console.log(nombre)*/


        
}

// let estudiante = {

//     nombre: "Andrea",
//     matricula: "20173ti064",
//     edad: "20",
//     division: "DSM"


// }




// Object.freeze(estudiante)



    var colores = ["Rojo", "Azul", "Morado"]

    colores.forEach((color)=>{
        console.log(color)
    })

    let [color1, color2, color3] = [...colores]


    let telefono  = {
        modelo: "G5 PLUS",
        marca: "motorola",
        precio: 5000.00
    }


    let {modelo, marca, precio} = telefono
    console.log(modelo, marca, precio)


    let mostrarDatos= ()=>{
        return [09, "valor2","valor3"]
    }
    let [var1, var2, var3] = mostrarDatos()

    console.log(var1, var2, var3)

document.addEventListener("DOMContentLoaded",onReady)