function hacerCosas(){

    var nombre = document.getElementById("cajaNombre").value;
    var textoNomLargo = "TU NOMBRE ES LARGO";
    var textoNomCorto = "TU NOMBRE ES CORTO";
    if(nombre.length>5){
        //alert(textoNomLargo);
        document.getElementById("resultado").innerHTML = textoNomLargo;
    }
    else{
        //alert(textoNomCorto);
        document.getElementById("resultado").innerHTML = textoNomCorto;
    }

}

/*function mostrarAviso(){

}*/