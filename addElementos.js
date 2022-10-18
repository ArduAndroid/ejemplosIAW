var limite = 0;
function addElementos() {

    if (limite < 2) {
        // Crear nodo de tipo Element
        var parrafo = document.createElement("p");
        // Crear nodo de tipo Text
        var contenido = document.createTextNode("ELEMENTO AÑADIDO!");
        // Añadir el nodo Text como hijo del nodo Element 
        parrafo.appendChild(contenido);
        // Añadir el nodo Element como hijo de la pagina
        document.body.appendChild(parrafo);
        limite = limite + 1;
    }
    else {
        alert("¡PESADO!");
        var listaParrafos = document.getElementsByTagName("p");
        for(var i=0;i<listaParrafos.length;i++){
            listaParrafos[i].innerHTML="";
        }
    }
}