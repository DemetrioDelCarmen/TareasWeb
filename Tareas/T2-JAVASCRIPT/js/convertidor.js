
let onReady = ()=>{

    let convertir = ()=>{


        let gradosAConvertir = document.querySelector("#gradosAConvertir").value
        let temperatura = document.querySelector("#temperatura").value
        let aGrados = document.querySelector("#listaGradosParaConvertir").value
        let div = document.createElement("div")
        // let convertir = document.querySelector("#convertir").value
        /*
        1  = celcius 
        2  = faringed 
        3  = centigrados*/

        /*
        1.1  = celcius 
        2.2  = faringed 
        3.3  = centigrados*/

            switch (Number(temperatura)) {
                case 1 :
                    if(aGrados==1.1){
                        // var resultado = (gradosAConvertir-32)*5/9
                        // gradosAConvertir = resultado
                        let texto = document.createTextNode(gradosAConvertir + '°C')
                        let h3 = document.createElement("h3")
                        h3.appendChild(texto)
                        div.appendChild(h3)
                    }else if(aGrados == 2.2){
                        var resultado = (gradosAConvertir*9/5)+32
                        gradosAConvertir = resultado
                        let texto = document.createTextNode(gradosAConvertir +  '°F')
                        let h3 = document.createElement("h3")
                        h3.appendChild(texto)
                        div.appendChild(h3)
                    }else{
                        var resultado = Number(gradosAConvertir)+273.15
                        gradosAConvertir = resultado
                        let texto = document.createTextNode(gradosAConvertir + '°K')
                        let h3 = document.createElement("h3")
                        h3.appendChild(texto)
                        div.appendChild(h3)
                    }
                    break;
                    case 2:
                            if(aGrados==1.1){
                                 var resultado = (gradosAConvertir-32)*5/9
                                 gradosAConvertir = resultado
                                let texto = document.createTextNode(gradosAConvertir + '°C')
                                let h3 = document.createElement("h3")
                                h3.appendChild(texto)
                                div.appendChild(h3)
                            }else if(aGrados == 2.2){
                              /*  var resultado = (gradosAConvertir*9/5)+32
                                gradosAConvertir = resultado*/
                                let texto = document.createTextNode(gradosAConvertir +  '°F')
                                let h3 = document.createElement("h3")
                                h3.appendChild(texto)
                                div.appendChild(h3)
                            }else{
                                var resultado = (gradosAConvertir-32)*5/9+273.15
                                gradosAConvertir = resultado
                                let texto = document.createTextNode(gradosAConvertir + '°K')
                                let h3 = document.createElement("h3")
                                h3.appendChild(texto)
                                div.appendChild(h3)
                            }
                    break;

                    case 3: 
                            //de kelvin a celsius
                            if(aGrados == 1.1){
                                var resultado = (gradosAConvertir-273.15)
                                gradosAConvertir = resultado
                                let h3 = document.createElement("h3")
                                let texto = document.createTextNode(gradosAConvertir +'°C')
                                h3.appendChild(texto)
                                div.appendChild(h3)
                            }else if(aGrados == 2.2){
                                var resultado = (gradosAConvertir-273.15)*9/5+32
                                gradosAConvertir = resultado
                                let h3 = document.createElement("h3")
                                let texto = document.createTextNode(gradosAConvertir + '°F')
                                h3.appendChild(texto)
                                div.appendChild(h3)
                            }else{

                                let h3 = document.createElement("h3")
                                let text = document.createTextNode(gradosAConvertir + '°K')
                                h3.appendChild(text)
                                div.appendChild(h3)

                            }


                    break;
            
                default:
                    break;
            }
            
            document.querySelector("#container").appendChild(div)
    }


    document.querySelector("#convertir").addEventListener("click",convertir)


}

document.addEventListener("DOMContentLoaded",onReady)