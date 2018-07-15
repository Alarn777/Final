<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Improvements in Shenkar</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
    <link rel="stylesheet" href="includes/style/style.css">
</head>

<body id="indexPage">
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-size-fix">
        <a class="navbar-brand" href="#"><img src="includes/images/v.png"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#"><img src="includes/images/improve.png"></a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <button class="fa fa-user fa-2x" type="submit"></button>
                <button class="fa fa-cog fa-2x" type="submit"></button>
            </form>
        </div>
    </nav>

    <nav aria-label="breadcrumb" class="breadcrumb-search-container">
        <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">Home</li>
        </ol>
        <div class="container search-fix">
            <div class="input-group stylish-input-group">
                <input type="text" class="form-control" placeholder="Search">
                <button class="fa fa-search fa-2x" type="submit" onclick="addItemIndexPage()"></button>
            </div>
        </div>
    </nav>

    <div class="container" id="addingEventsHere">
        <div class="row col-title-row">
            <div class="col-md-2">
                <p>Event Number</p>
            </div>
            <div class="col-md-2">
                <p>Date Added</p>
            </div>
            <div class="col-md-2">
                <p>Location</p>
            </div>
            <div class="col-md-2">
                <p>Fix/Improve</p>
            </div>
            <div class="col-md-2">
                <p>Confirmed by</p>
            </div>
            <div class="col-md-2">
                <p>Actions</p>
            </div>
        </div>
        <?php
        include("db.php");

        $eventsQuery = "Select * From events_208" ;
        $eventsResult = mysqli_query($connection, $eventsQuery);
        if (!$eventsResult) {
            die("Select Events failed");
        }
        while ($event = mysqli_fetch_assoc($eventsResult)) {
            echo
                "<div class=\"row one-event".($event["status"]=="InProcess"?" in-progress":"")."\" id=\"event" . $event["id"] . "\">
            <div class=\"col-md-2\">
                <p>" . $event["id"] . ($event["status"]=="InProcess"?" <i class=\"fa fa-sync\"></i>":"")."</p>
            </div>
            <div class=\"col-md-2\">
                <p>" . date_format(new DateTime($event["date"]), "m/d/Y") . "</p>
            </div>
            <div class=\"col-md-2\">
                <p>" . $event["location"] . "</p>
            </div>
            <div class=\"col-md-2\">
                <p>" . $event["type"] . "</p>
            </div>
            <div class=\"col-md-2\">
                <p>" . $event["confirmed_count"] . "</p>
            </div>
            <div class=\"col-md-2\">
                <button class=\"icon-button fas fa-plus-square\"></button>
                <a href=\"eventDetailsPage.php?eventId=".$event["id"]."\" class=\"icon-button fas fa-clipboard-list\"></a>
                <button class=\"icon-button fas fa-check-circle\"></button>
                <button id=\"deleteEvent".$event["id"]."\" class=\"icon-button fas fa-trash-alt\"></button>
            </div>
        </div>";
        }
        mysqli_free_result($eventsResult);
        mysqli_close($connection);
        ?>

    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script
            src="https://code.jquery.com/jquery-3.3.1.js"
            integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
            crossorigin="anonymous"></script>
      <script src="includes/js/utils.js"></script>
    <script src="includes/js/script.js"></script>
</body>

</html>