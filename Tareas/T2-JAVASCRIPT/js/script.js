let onReady = () =>{     
    
    let validarCampos =  ()=>{

        let nombre  = document.getElementById("nombre").value
        let apellidos = document.getElementById("apellidos").value
        let edad = document.getElementById("edad").value
        let nuevaEdad = Number(edad)
        let errorSave = ` 

            <h1 style="color: #B61F48"> Tuvimos problemas al registrarte, debido a que:  </h1>
        
        `
        let saveConfirm = `
                    <h4> Hola ${nombre}  ${apellidos}  ya estás registrado</h4>
        `   


                if(nombre!=='' && apellidos!=='' && nuevaEdad!=0){
                  /*   if(!isNaN(edad)){
                        alert('correcto')
                    } */

                    document.getElementById("container").innerHTML = saveConfirm
                   
                }else {
                        if(nombre ==''){
                            errorSave+= "<h5>El campo Nombre no puede estár vacío </h5>"
                        }else if(apellidos ==''){
                            errorSave+= "<h5>El campo Apellidos no puede estár vacío </h5>"
                        }else if(nuevaEdad==0){
                            errorSave+= "<h5>El campo  Edad no puede estar vacío </h5>"
                        }
                    document.getElementById("container").innerHTML = errorSave
                }
        }

            document.getElementById("enviarDatos").addEventListener("click",validarCampos)

}

document.addEventListener("DOMContentLoaded",onReady)