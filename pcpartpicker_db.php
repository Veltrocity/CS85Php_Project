<?php
// Filename: addInterview.php
if (empty($_POST['pc_build_date']) || empty($_POST['Build_Name']) || empty($_POST['CPU']) || empty($_POST['mobo']) || empty($_POST['ram']) || empty($_POST['hdd']) || empty($_POST['psu'])) {
    echo "<p>You must enter all form fields! Click your browser's Back button to return to the Add Interview form.</p>";
} else {
    $user = "acast";
    $password = "password";
    $host = "localhost";

    $DBConnect = mysqli_connect($host, $user, $password);
    if ($DBConnect === FALSE) {
        echo "<p>Unable to connect to the database server.</p>" . "<p>Error code " . mysqli_errno() . ": " . mysqli_error() . "</p>";
    } else {
        $DBName = "adl_pcpartpicker";
        if (!mysqli_select_db($DBConnect, $DBName)) {
            $SQLstring = "CREATE DATABASE $DBName";
            $QueryResult = mysqli_query($DBConnect, $SQLstring);
            if ($QueryResult === FALSE) {
                echo "<p>Unable to execute the query.</p>" . "<p>Error code " . mysqli_errno($DBConnect) . ": " . mysqli_error($DBConnect) . "</p>";
            } else {
                echo "<p>You are the first interviewer!</p>";
            }
        }
        mysqli_select_db($DBConnect, $DBName);

        $TableName = "interviews";
        $SQLstring = "SHOW TABLES LIKE '$TableName'";
        $QueryResult = mysqli_query($DBConnect, $SQLstring);

        if (mysqli_num_rows($QueryResult) == 0) {
            $SQLstring = "CREATE TABLE $TableName (InterviewID SMALLINT NOT NULL AUTO_INCREMENT PRIMARY KEY, pc_build_date DATE, Build_Name VARCHAR(50), CPU VARCHAR(50), mobo VARCHAR(50), ram VARCHAR(100), hdd VARCHAR(100),psu  VARCHAR(100))";
            $QueryResult = mysqli_query($DBConnect, $SQLstring);
            if ($QueryResult === FALSE) {
                echo "<p>Unable to create the table.</p>" . "<p>Error code " . mysqli_errno($DBConnect) . ": " . mysqli_error($DBConnect) . "</p>";
            }
        }

        $pc_build_date = stripslashes($_POST['pc_build_date']);
        $Build_Name = stripslashes($_POST['Build_Name']);
        $CPU = stripslashes($_POST['CPU']);
        $mobo = stripslashes($_POST['mobo']);
        $ram = stripslashes($_POST['ram']);
        $hdd= stripslashes($_POST['hdd']);
        $psu = stripslashes($_POST['psu']);
        
        $SQLstring = "INSERT INTO $TableName VALUES (NULL, '$pc_build_date', '$Build_Name', '$CPU', '$mobo', '$ram', '$hdd')";
        $QueryResult = mysqli_query($DBConnect, $SQLstring);

        if ($QueryResult === FALSE) {
            echo "<p>Unable to execute the query.</p>" . "<p>Error code " . mysqli_errno($DBConnect) . ": " . mysqli_error($DBConnect) . "</p>";
        } else {
            echo "<h1>Thanks for Us PC Part Builder</h1>";
        }

        mysqli_close($DBConnect);
    }
}

?>