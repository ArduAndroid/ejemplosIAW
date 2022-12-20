function validarRegistro(){

    var email1 = document.getElementById("cajaEmail").value;
    var email2 = document.getElementById("cajaEmail2").value;
    

    if(email1==email2){
        alert("CORRECTAS LOS EMAILS");
        return true;
    }
    else{
        alert("INCORRECTO EL EMAIL");
        return false;
    }

    
}
