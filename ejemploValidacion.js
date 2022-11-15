/*
extracto de formulario html
<form name="myForm" onsubmit="return validateMyForm();"> 
*/

//var edad = document.getElementById...
function validateMyForm()
{
  if(edad>18)
  { 
    alert("validación satisfcactoria");
    return true;
  }
  else{
    alert("validación fallida");
    returnToPreviousPage();
    return false;
  }


}
