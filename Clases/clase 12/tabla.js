let onReady = () => {

    let pintarTabla = () => {

        let filas = document.getElementById("filas").value
        let columnas = document.getElementById("columnas").value
        let tabla = document.createElement("table")
        let attr = document.createAttribute("border")
        attr.value = 1;
        tabla.setAttributeNode(attr)
        for (i = 0; i < filas; i++) {

            let fila = document.createElement("tr")
            for (j = 0; j < columnas; j++) {
                let columna = document.createElement("td")
                let texto = document.createTextNode("Valor")
                columna.appendChild(texto)
                fila.appendChild(columna)
                
            }
         
            tabla.appendChild(fila)
        }

        document.querySelector("#contenedor").appendChild(tabla)

    }

    document.getElementById("mostrar").addEventListener("click", pintarTabla)
}

document.addEventListener("DOMContentLoaded", onReady)