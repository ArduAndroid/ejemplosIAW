function validarRegistro(){

    var password1 = document.getElementById("cajaPassword").value;
    var password2 = document.getElementById("cajaPassword2").value;
    

    if(password1==password2){
        alert("CORRECTAS LAS CONTRASEÑAS");
        return true;
    }
    else{
        alert("INCORRECTO EL EMAIL");
        return false;
    }

    
}

function suma(a, b){
    return a+b;
}