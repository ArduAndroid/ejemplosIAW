function validar()
{
    var codigo = document.getElementById("Codigo").value;
    var patronMayus = /[A-Z]/;
    var patronMinus = /[a-z]/;
    var patronNum = /[13579]/;
    var patronNum2 = /[02468]/;
    var resultado1 = patronMayus.test(codigo);
    var resultado2 = patronMinus.test(codigo);
    var resultado3 = patronNum.test(codigo);
    var resultado4 = patronNum2.test(codigo);


    alert("patrón mayusculas"+resultado1);
    alert("patrón minusculas"+resultado2);
    alert("patrón numeros impares"+resultado3);
    alert("patrón numeros pares"+resultado4);

    if(resultado1 && resultado2 && !resultado3 && resultado4 && codigo.length>=8)
    {
        alert("cumple todo papi seguimos para bingo con los descuentos");
        descuento();
    }
    else{
        alert("miaaaau no vale!");
    }

}

function descuento2(){
    var marca = document.getElementById("Marca").value;
    var color = document.getElementById("Color").value;
    var precioInicial = document.getElementById("Precio").value;
    var precioPagar="";
    var descuento="";
    
    if(marca=="ford" && color =="rojo"){
        {
            descuento=precioInicial*(0.05+0.02);
            precioPagar=precioInicial-descuento;
        }
       
    }

    var precioFinal;
}


function descuento(){
    /***
     * Ford: 5%
     * Dacia: 8%
     * Mercedes: 3%
     * 
     * Rojo: 2%
     * Negro: 3%
     * Amarillo: 2%
     */

    var marca = document.getElementById("Marca").value;
    var color = document.getElementById("Color").value;
    var precioInicial = document.getElementById("Precio").value;
    var precioFinal=0;
    if(marca=="ford" && color=="rojo"){
        precioFinal = precioInicial*(1-0.07);
        alert(precioFinal);
        return true;
    }
    if(marca=="ford" && color=="negro"){
        precioFinal = precioInicial*(1-0.08);
        alert(precioFinal);
        return true;
    }
    if(marca=="ford" && color=="amarillo"){
        precioFinal = precioInicial*(1-0.07);
        alert(precioFinal);
        return true;
    }

    if(marca=="mercedes" && color=="rojo"){
        precioFinal = precioInicial*(1-0.05);
        alert(precioFinal);
        return true;
    }
    if(marca=="mercedes" && color=="negro"){
        precioFinal = precioInicial*(1-0.06);
        alert(precioFinal);
        return true;
    }
    if(marca=="mercedes" && color=="amarillo"){
        precioFinal = precioInicial*(1-0.05);
        alert(precioFinal);
        return true;
    }

    if(marca=="dacia"){
        precioFinal = precioInicial*(1-0.08);
        alert(precioFinal);
        return true;
    }
    return false;
}