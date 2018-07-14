<?php 
$dbhost = "182.50.133.51";
$dbuser = "studDB18A";
$dbpass = "stud18aDB1!";
$dbname = "studDB18A";

$connection = mysqli_connect ($dbhost, $dbuser, $dbpass, $dbname);
//testing connection success
if(mysqli_connect_errno ()) {
die("DB connection failed: " .
    mysqli_connect_error () . " (" .
    mysqli_connect_errno () . ")");
}


?>
