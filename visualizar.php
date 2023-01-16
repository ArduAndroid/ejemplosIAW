<?php
    session_start();
    echo $_SESSION["nombre"];
    echo $_SESSION["apellido"];
    echo $_SESSION["dni"];

    echo "<img src='".$_SESSION["rutafoto"]."'>";
    session_destroy();
    echo "<a href='inicio.html'>volver al inicio</a>";

    echo "<br>";
?>