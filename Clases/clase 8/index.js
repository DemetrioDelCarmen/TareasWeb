// var guardar = document.getElementById("btnGuardar")

// addEventListener("click",guardar, ()=>{
//         alert('Guardado')
// })


                // let n1 = prompt("Numero 1:")
                // let n2 = prompt("Numero 2:")
                // let n3 = prompt("Numero 3:")

                //       let resultado = Number(n1) + Number(n2) + Number(n3)

                //      alert(n1 + "+" + n2 + "+ " + n3 + "=" + resultado)

        let result
        let fecha = new Date()
        

                        if(fecha.getHours() >=0 && fecha.getHours() <=12){

                                result = alert('Hola, es de día')
                        }else if (fecha.getHours() >=12 && fecha.getHours() <=19){
                                result = alert('Hola es de tarde')
                        }else {
                                result = alert('Ya viene el coco men')
                        }
        
        