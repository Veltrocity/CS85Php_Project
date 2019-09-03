<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<?php

$user = "caustin";
$password = "MKZpCi5VKn";
$host = "localhost";

$DBConnect = mysqli_connect($host, $user, $password);
if ($DBConnect === FALSE) {
    echo "<p>Unable to connect to the database server.</p>" . "<p>Error code " . mysqli_errno() . ": " . mysqli_error() . "</p>";
} else {
    $DBName = "acast_proj";
    if (!mysqli_select_db($DBConnect, $DBName)) {
        echo "<p>There are no entries in the Database!</p>";
    } else {
        $TableName = "interviews";
        $SQLstring = "SELECT * FROM $TableName";
        $QueryResult = mysqli_query($DBConnect, $SQLstring);
        if (mysqli_num_rows($QueryResult) == 0) {
            echo "<p>There are no entries in the Database!</p>";
        } else {
            echo "<p>The following interviews are in our Database:</p>";
            echo "<table width='100%' border='1'>";
            echo "<tr><th>pc_build_date</th><th>Build_Name</th><th>CPU</th><th>mobo</th><th>ram</th><th>hdd</th><th>psu</th></tr>";
            while ($Row = mysqli_fetch_array($QueryResult)) {
                echo "<tr><td>{$Row['pc_build_date']}</td>";
                echo "<td>{$Row['Build_Name']}</td>";
                echo "<td>{$Row['CPU']}</td>";
                echo "<td>{$Row['mobo']}</td>";
                echo "<td>{$Row['ram']}</td>";
                echo "<td>{$Row['hdd']}</td>";
                echo "<td>{$Row['psu']}</td>";

            }
        }
        mysqli_free_result($QueryResult);
    }
    mysqli_close($DBConnect);
}

?>

</body>
</html>