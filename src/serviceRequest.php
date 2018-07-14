<?php

        include("db.php");
        $eventsQuery = "Select * From events_208 where id=". $_REQUEST["id"] ;
        $eventsResult = mysqli_query($connection, $eventsQuery);
        if (!$eventsResult) {
            die("Select Events failed");
        }
        $event = mysqli_fetch_assoc($eventsResult);
        $id =$_REQUEST["id"];
        $comment = (string)$_REQUEST["comments"];
        $eventHandler =(string) $_REQUEST['recipient'];

        $sql = "UPDATE events_208 SET assigned_worker='".$eventHandler."',status='InProcess' WHERE id=".$id;
        mysqli_query($connection,$sql);
        $requested_by = $_REQUEST["requested_by"];
        $sql="INSERT INTO  service_requests_208 (`id` ,`event_id` ,`comment` ,`requested_by`)VALUES (NULL ,  ".$id.",  '".$comment."',  '".$requested_by."');";
        mysqli_query($connection,$sql);


        mysqli_close($connection);


        header('Location: index.php');

?>