<?php
    session_start();
    if(isset($_POST["botonsito"])){

    echo $_POST["nombre"];
    echo $_POST["apellido"];
    echo $_POST["dni"];

    $_SESSION["nombre"] = $_POST["nombre"];
    $_SESSION["apellido"] = $_POST["apellido"];
    $_SESSION["dni"] = $_POST["dni"];
    
    }


echo "<a href='form_subida.php'>LLEVAME A OTRO LAO</a>";
?>