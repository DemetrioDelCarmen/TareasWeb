let onReady = () =>{

      /*   let btnDelete = document.getElementsByClassName("btn btn-danger m-2").onclick = function eliminar(){
            console.log('HOLA')
            eliminar()
        } */
    
    let agregarItems = ()=>{

            let fila  = document.createElement("tr")

            let cCodigo = document.createElement("td")
            let iCodigo = document.createElement("input")
            iCodigo.type = "text"    
            iCodigo.className = "form-control m-2"
            cCodigo.appendChild(iCodigo)


            let cNombre = document.createElement("td")
            let iNombre = document.createElement("input")
            iNombre.type = "text"
            iNombre.className = "form-control m-2"
            cNombre.appendChild(iNombre)


            let cCantidad = document.createElement("td")
            let iCantidad = document.createElement("input")
            iCantidad.type  = "number"
            iCantidad.className = "form-control m-2"
            cCantidad.appendChild(iCantidad)

            let cPrecio = document.createElement("td")
            let iPrecio = document.createElement("input")
            iPrecio.type = "number"
            iPrecio.className = "form-control m-2"
            cPrecio.appendChild(iPrecio)


            let cTotal = document.createElement("td")
            let iTotal = document.createElement("input")
            iTotal.type = "number"
            iTotal.className = "form-control m-2"
            cTotal.appendChild(iTotal)


         
            let cBtnAgregar = document.createElement("td")
            let iBtnAgregar = document.createElement("input")
            iBtnAgregar.type = "button"
            iBtnAgregar.value = "Agregar"
            iBtnAgregar.className = "btn btn-success m-2"
            iBtnAgregar.onclick = agregarItems
            cBtnAgregar.appendChild(iBtnAgregar)

            
            let cBtnEliminar = document.createElement("td")
            let iBtnEliminar = document.createElement("input")
            iBtnEliminar.value = "Eliminar"
            iBtnEliminar.type = "button"
            iBtnEliminar.className = "btn btn-danger m-2" 
            iBtnEliminar.setAttribute("id","eliminar")
            iBtnEliminar.onclick = deleteItems
            cBtnEliminar.appendChild(iBtnEliminar)


            fila.appendChild(cCodigo)
            fila.appendChild(cNombre)
            fila.appendChild(cCantidad)
            fila.appendChild(cPrecio)
            fila.appendChild(cTotal)
            fila.appendChild(cBtnAgregar)
            fila.appendChild(cBtnEliminar)

            document.querySelector("tbody").appendChild(fila)

        }
        
      
      function deleteItems (){
        
            var index, table = document.querySelector('table');
            for(var i = 1; i < table.rows.length; i++)
            {
                table.rows[i].cells[6].onclick = function()
                {
                    let cEliminar = confirm("¿Deseas eliminar este producto de tu compra?");
                    if(cEliminar === true)
                    {
                        index = this.parentElement.rowIndex;
                        table.deleteRow(index);
                    }
                    
                    console.log(index);
                };
                
            }

            console.log("hola")
        }
            
        

   
    
    document.querySelector("#agregar").addEventListener("click",agregarItems)
    document.querySelector("#eliminar").addEventListener("click",deleteItems) 
      
     
}

document.addEventListener("DOMContentLoaded",onReady)