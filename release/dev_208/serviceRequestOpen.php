<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Improvements in Shenkar</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">`
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">

    <link rel="stylesheet" href="includes/style/style.css">
</head>

<body class="serviceRequestOpen" id="serviceRequestOpen">

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
                <a href="index.html">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
                <a href="eventDetailsPage.html">Event <span class="eventId"></span></a>
            </li>
            <li class="breadcrumb-item" aria-current="page">Service Request</li>
        </ol>
        <div class="container search-fix">
            <div class="input-group stylish-input-group">
                <input type="text" class="form-control" placeholder="Search">
                <button class="fa fa-search fa-2x" type="submit" onclick="addItemIndexPage()"></button>
            </div>
        </div>
    </nav>

    <div class="container">
        <div class="row">
            <main class="col-xl-12">
                <div class="row event-table-row-description">
                    <div class="col-2"><span class="eventId"></span></div>
                    <div class="col-2 text-left">21/1/2018</div>
                    <div class="col-8 text-left">Classroom 224,floor 2, Engineering building</div>
                </div>
            </main>
            <section class="col-xl-8">
                <form action="post">
                    <div class="input-group mb-3">
                        <label for="serviseProvider" class="col-lg-4">Recipient's username:</label>
                        <input id="serviseProvider" type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button">Change</button>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <label for="description" class="col-lg-4">Description:</label>
                        <input id="description" type="text" class="form-control" aria-label="Description" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button">Change</button>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <label for="location" class="col-lg-4">Location:</label>
                        <input id="location" type="text" class="form-control" aria-label="Location" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button">Change</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="comment">Comment:</label>
                        <textarea class="form-control" rows="5" id="comment"></textarea>
                    </div>

                    <div class="form-group">
                        <label for="requestedBy">Requested By:</label>
                        <input type="text" class="form-control" id="requestedBy">
                        <button type="button" class="btn btn-default submission-buttons">Cancel</button>
                        <button type="button" onclick="submitRequest()" class="btn btn-primary submission-buttons">Submit Request
                        </button>
                    </div>
                </form>
            </section>
            <section class="col-xl-4">
                <h3>Attached picture:</h3>
                <div class="card">
                    <img class="card-img-top" src="includes/images/image-cap.svg" alt="Card image cap">
                </div>
            </section>
        </div>

        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
        <script src="includes/js/utils.js"></script>
        <script src="includes/js/serviceRequestOpen.js"></script>
</body>

</html>