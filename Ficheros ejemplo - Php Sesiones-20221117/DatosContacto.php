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
        <h1>Página secundaria</h1>
        
        <h2>Usuario: <?php echo $_SESSION["usuario"];  ?></h2>
        <h2>Password: <?php echo $_SESSION["password"];  ?></h2>
        
    </body>
</html>
