<html>
    <head>
        <title>formulier verwerken</title>
    </head>
    <body>
 
    <?php
echo "<tr><td>Name: </td><td>" . $_POST['name'] . "</td><tr>\n";
echo "<tr><td>Email: </td><td>" . $_POST['email'] . "</td></tr>\n";
echo "<tr><td>Reactie: </td><td>" . $_POST['reactie'] . "</td></tr\n"; ?>
</table>
</body>
</html>