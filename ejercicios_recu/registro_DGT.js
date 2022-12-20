function validarRegistro() {

    var dniString = document.getElementById("cajaDNIString").value;
    var dniLetra = document.getElementById("cajaDNILetra").value;
    var fechaNac = document.getElementById("cajaFechaEx").value;
    var fechaEx = document.getElementById("cajaFechaNac").value;

    /*alert("Fecha Nacimiento: "+fechaNac);
    alert("Fecha Examen: "+fechaEx);
    alert("Fecha dniString: "+dniString);
    alert("Fecha dniLetra: "+dniLetra);*/

    var condicionDNI=validarDNI(dniString,dniLetra);
    var condicionFechas=validarFechas(fechaNac,fechaEx);
    
    if(condicionDNI&&condicionFechas){
        alert("TODO OK");
        return true;
    }else{
        alert("ALGO FALLA");
        return false;
    }
}

function validarFechas(fechaNacimiento, fechaExamen){
    if(fechaExamen!=fechaNacimiento){
        alert("CORRECTO FECHAS");
        return true;
    }else{
        alert("INCORRECTO FECHAS");
        return false;
    }
}


function validarDNI(stringDNI, letraDNI) {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
//    alert(letras);
    var numero =  parseInt(stringDNI);
  //  alert(numero);
    var letra = letraDNI;
    letra = letra.toUpperCase();

    if (numero < 0 || numero > 99999999) {
        alert("El número proporcionado no es válido");
        return false;
    }
    else {
        var letraCalculada = letras[numero % 23];
        
        if (letraCalculada != letra) {
            alert("La letra o el número proporcionados no son correctos");
            return false;
        }
        else {
            alert("El número de DNI y su letra son correctos");
            return true;
        }
    }
}