<?php
    session_start();
    
    echo $_SESSION["nombre"];
    echo $_SESSION["apellido"];
    echo $_SESSION["dni"];
    echo "<a href='logout.php'>LLEVAME A CERRAR LA SESIÓN</a>";
?>


