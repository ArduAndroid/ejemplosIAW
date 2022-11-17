function comprobar(){
    var edad = document.getElementById("edad").value;
    //alert(edad);
    if(edad<18){
        //alert("menor de edad");
        return false;
    }
    else{
        //alert("mayor de edad");
        return true;
    }
}

