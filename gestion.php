<?php
    session_start();
    if(isset($_POST["botonsito"])){

    echo $_POST["nombre"];
    echo $_POST["apellido"];

    $_SESSION["nombre"] = $_POST["nombre"];
    $_SESSION["apellido"] = $_POST["apellido"];
    
    }


echo "<a href='subida.php'>LLEVAME A OTRO LAO</a>";
?>