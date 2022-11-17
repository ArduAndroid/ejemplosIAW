<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
            session_start();
        ?>
        <h1>Página de inicio de sesión</h1>
        <?php
            $usuario = $_POST["usuario"];
            $_SESSION["usuario"] = $usuario;
            
            $password = $_POST["password"];
            $_SESSION["password"] = $password; 
        ?>
        
        <h2>Usuario: <?php echo $_SESSION["usuario"];  ?></h2>
        <h2>Password: <?php echo $_SESSION["password"];  ?></h2>
        
        <a href="logout.php">Enlace a la página donde se puede cerrar sesión</a>
        
    </body>
</html>
