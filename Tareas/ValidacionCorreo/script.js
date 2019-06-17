onReady = ()=>{
    let validar =() =>{
        let inputCorreo = document.querySelector("inputCorreo").value
        let inputPwd = document.querySelector("inputPwd").value
        
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(inputCorreo)=true){
            alert("Inicio de sesión correcto")
        }else{
            alert("Correo invalido o no encontrado")
        }

        
    }
    
    document.querySelector("#iniciarSesion").addEventListener("click",validar)
}

document.addEventListener("DOMContentLoad",onReady)