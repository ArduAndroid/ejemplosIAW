<?php
    session_start();
    echo $_SESSION["nombre"];
    echo $_SESSION["apellido"];
    echo $_SESSION["dni"];
    //session_destroy();
    echo "<a href='inicio.html'>volver al inicio</a>";

    echo "<br>";
?>