<?php
include("db.php");
$method = $_SERVER["REQUEST_METHOD"];

if ($method == "DELETE") {
    if (isset($_REQUEST['id'])) {
        $event_id = preg_replace('/[^0-9]/', '', $_REQUEST['id']);
        $sql = "DELETE FROM events_208 WHERE id=" . $event_id;
        
        $result= mysqli_query($connection, $sql);

        if (!$result) {
            die("Select Events failed");
        }
        mysqli_free_result($result);
        mysqli_close($connection);

    } else {
        die("Bad eventId");
    }
}

?>