let onReady = () => {

    let pintarTabla = () => {

        let filas = document.getElementById("filas").value
        let columnas = document.getElementById("columnas").value

        let html = "<table border='1'>"
        for (i = 0; i < filas; i++) {

            html += "<tr>"
            for (j = 0; j < columnas; j++) {

                html += "<td> Texto </td>"

            }
            html += "</tr>"
        }

        html += "</table>"
        document.getElementById("contenedor").innerHTML = html

    }

    document.getElementById("mostrar").addEventListener("click", pintarTabla)
}

document.addEventListener("DOMContentLoaded", onReady)