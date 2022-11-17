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
        <h1>Página de cierre de sesión</h1>

        <h2>Usuario: <?php echo $_SESSION["usuario"]; ?></h2>
        <h2>Password: <?php echo $_SESSION["password"]; ?></h2>

        <form action="logout.php" method="post">
            <input type="submit" name="logoff" value="Cerrar sesión"/>
        </form>

        <?php
       
        if (isset($_POST["logoff"])) {  //Se comprueba que se ha enviado el formulario previamente mediante POST.
            //session_unset();
            session_destroy();
            header("Location: login.php"); //Redirección a la página de inicio de sesión
        }
        ?>

    </body>
</html>
