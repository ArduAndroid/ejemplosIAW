<?php
    session_start();
    echo $_SESSION["nombre"];
    echo $_SESSION["apellido"];
    //session_destroy();
    echo "<a href='inicio.html'>volver al inicio</a>";
?>