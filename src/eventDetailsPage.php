<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">

    <link rel="stylesheet" href="includes/style/style.css">


    <title>Improvements in Shenkar</title>
</head>

<nav class="navbar navbar-expand-lg navbar-light bg-light navbar-size-fix">
    <a class="navbar-brand" href="#">
        <img src="includes/images/v.png">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <img src="includes/images/improve.png">
                </a>
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
        <li class="breadcrumb-item active" aria-current="page">
            <a href="index.php">Home</a>
        </li>
        <li class="breadcrumb-item" aria-current="page">Event <span class="eventId"></span></a>
        </li>

    </ol>
    <div class="container search-fix">
        <div class="input-group stylish-input-group">
            <input type="text" class="form-control" placeholder="Search">
            <button class="fa fa-search fa-2x" type="submit" onclick="addItemIndexPage()"></button>
        </div>

    </div>

</nav>

<body class="eventDetailsPage">
    <div class="container">

        <div class="row">
            <main class="col-xl-12">
               
                    <div class="row event-table-row-description">
                    <?php
                    include("db.php");
                    $event_id = preg_replace('/[^0-9]/', '', $_REQUEST['eventId']);
                    $eventsQuery = "Select * From events_208 Where id=" . $event_id;
                    $eventsResult = mysqli_query($connection, $eventsQuery);
                    if (!$eventsResult) {
                        die("Select Event failed");
                    }
                    $event = mysqli_fetch_assoc($eventsResult);

                    echo "<div class=\"col-2\"><span class=\"eventId\">" . $event["id"] . "</span></div>
                        <div class=\"col-2 text-left\">" . date_format(new DateTime($event["date"]), "m/d/Y") . "</div>
                        <div class=\"col-8 text-left\">" . $event["location"] . "</div>
                    </div>
                    <div class=\"row\">
                        <section class=\"col-xl-5 description\">
                            <h3>Event description:</h3>
                            <ul>
                                
                              <li>
                                    <b>Date:</b>" . date_format(new DateTime($event["date"]), "m/d/Y") . "
                                </li>
                                <li>
                                    <b>Time:</b>" . date_format(new DateTime($event["date"]), "h:i") . "
                                </li>
                                <li>
                                    <b>Event Nuber:</b><span class=\"eventId\">" . $event["id"] . "</span>
                                </li>
                                <li>
                                    <b>Status:</b>" . $event["status"] . "
                                </li>
                                <li>
                                    <b>Category:</b>" . $event["type"] . "
                                </li>
                                <li>
                                    <b>Location:</b>" . $event["location"] . "
                                </li>
                                <li>
                                    <b>Reported by:</b>" . $event["reported_by"] . "
                                </li>
                                <li>
                                    <b>Description:</b>" . $event["description"] . "
                                </li>
                                
                            </ul>
                            <form >
                                <h4>Transfer event to:</h4>
                                <div id=\"sentForm\" class=\"form-group\">
                                    <input type=\"text\" name=\"sendEventTo\" class=\"form-control\" placeholder=\"Enter username...\" id=\"event_passed_to\">
                                    <button type=\"button\" class=\"btn btn-primary button-send-fix\" id=\"sendMessage\" onclick=\"sendEvent()\">Send</button>
                                </div>
                            </form>
                        </section>
                        <section class=\"col-xl-3 event-actions\">
                            <ul>
                                <li>
                                    <i class=\"fa-li fa fa-print\"></i>
                                    <a href=\"#\">Print Event</a>
                                </li>
                                <li>
                                    <i class=\"fa-li fa fa-wrench\"></i>
                                    <a id=\"openServiceRequest\" href=\"#\">Open Service Request</a>
                                </li>
                                <li>
                                    <i class=\"fa-li fa fa-paper-plane\"></i>
                                    <a href=\"#\">Email Event</a>
                                </li>
                                <li>
                                    <i class=\"fa-li fa fa-download\"></i>
                                    <a href=\"#\">Download PDF</a>
                                </li>
                                <li>
                                    <i class=\"fa-li fa fa-trash\"></i>
                                    <a href=\"#\">Delete Event</a>
                                </li>
                                <li>
                                    <i class=\"fa-li fa fa-check-circle\"></i>
                                    <a href=\"#\">Close Event</a>
                                </li>
                            </ul>
                        </section>
                        
                        <section class=\"col-xl-4 attach-image\">
                            <h3>Attached picture:</h3>
                            <div class=\"card\">
                                <img class=\"card-img-top\" src=\"includes/images/image-cap.svg\" alt=\"Card image cap\">
                                <div class=\"card-body\">
                                <form action=\"/event.php\" method=\"put\" id=\"updateEvent\"> 
                                <h4>Comments:</h4>
                                    <div class=\"form-group\">
                                        <textarea class=\"form-control\" rows=\"5\" id=\"comments\" name=\"comments\">" . $event["comments"] . "</textarea>
                                    </div>
                                    <div class=\"row\">
                                        <button type=\"button\" class=\"col-xl btn btn-default\">Cancel</button>
                                        <button type=\"submit\" class=\"col-xl btn btn-primary\">Save</button>
                                    </div>
                                    <input name=\"eventId\" value=\"" . $event["id"] . "\" hidden=\"hidden\">
                                </form>
                                </div>
                            </div>
                        </section>"
                    ?>
                    </div>
               
            </main>
        </div>
        <script
                src="https://code.jquery.com/jquery-3.3.1.js"
                integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
                crossorigin="anonymous"></script>
        <script src="includes/js/serviceRequestOpen.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
        <script src="includes/js/utils.js"></script>
        <script src="includes/js/eventDetails.js"></script>
</body>

</html>