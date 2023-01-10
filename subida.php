<?php
    session_start();
    
    echo $_SESSION["nombre"];
    echo $_SESSION["apellido"];
    echo "<a href='logout.php'>LLEVAME A CERRAR LA SESIÓN</a>";
?>