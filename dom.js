function inicializar()
{
    var mensaje;
    var valorEntrada = prompt("Introduzca su nombre");
    if(valorEntrada==null || valorEntrada=="")
    {
        mensaje = "No has introducido información";
    }
    else{
        mensaje = "Hola holita vecinito/a: " + valorEntrada;
    }
    var nelementos = document.getElementsByClassName('encabezado').length;
    alert("TENGO ESTOS ELEMENTOS: "+nelementos);
    /*for(i=0;i<=nelementos;i++){
        document.getElementsByClassName('encabezado')[i].innerHTML=mensaje;
    }*/
    document.getElementsByClassName('encabezado')[0].innerHTML=mensaje;
    document.getElementsByClassName('encabezado')[1].innerHTML=mensaje;
    document.getElementsByClassName('encabezado')[2].innerHTML=mensaje;
    document.getElementsByClassName('encabezado')[3].innerHTML=mensaje;
}

