function fillWithContent() {
    document.getElementById("serviseProvider").innerHTML = "Yosi Mazur  (Glassworker)";
    $('#serviseProvider').val("Yosi Mazur  (Glassworker)");
    document.getElementById("description").innerHTML = "The glass window is broken in the classroom";
    $('#description').val("The glass window is broken in the classroom");
    document.getElementById("location").innerHTML = "Classroom 224,floor 2, Engineering building, Shenkar";
    $('#location').val("Classroom 224,floor 2, Engineering building, Shenkar");
    document.getElementById("comment").innerHTML = "I add some comment here";
    $('#comment').val("I add some comment here");
    document.getElementById("requestedBy").innerHTML = "Moshe Maso";
    $('#requestedBy').val("Moshe Maso");
}


window.onload = function (ev) {

    if (document.body.id === "serviceRequestOpen")
        fillWithContent();

    if (document.body.id === "indexPage")
        for (var i = 4; i > 0; i--) {
            addItemIndexPage();
        }

};


function success() {
    swal({
        icon: "success",
        title: "Event No.3 was sent to Yosi Mazur  (Glassworker) by Moshe Maso for further processing.",
        showConfirmButton: true,
        confirmButtonText: "OK",
        closeOnConfirm: false
    }).then(function (result) {
        window.location = "http://localhost:63342/Final/index.html";
    })


}

function addItemIndexPage() {
    console.log("Entered");
    //creating new row
    var newRow = document.createElement("div");
    newRow.className = "row one-event";
    newRow.id = "event";
    //filling it with content
    var newDiv = document.createElement("div");        // Create a <div> element
    newDiv.className = "col-md-2";
    var eventNum = document.createElement("p");
    eventNum.innerHTML = "1";
    newDiv.appendChild(eventNum);

    newRow.appendChild(newDiv);

    newDiv = document.createElement("div");        // Create a <div> element
    newDiv.className = "col-md-2";
    var date = document.createElement("p");
    date.innerHTML = "21.1.14";
    newDiv.appendChild(date);

    newRow.appendChild(newDiv);

    newDiv = document.createElement("div");        // Create a <div> element
    newDiv.className = "col-md-2";
    var location = document.createElement("p");
    location.innerHTML = "Pernik building";
    newDiv.appendChild(location);

    newRow.appendChild(newDiv);

    newDiv = document.createElement("div");        // Create a <div> element
    newDiv.className = "col-md-2";
    var fix_improve = document.createElement("p");
    fix_improve.innerHTML = "Fix";
    newDiv.appendChild(fix_improve);

    newRow.appendChild(newDiv);

    newDiv = document.createElement("div");        // Create a <div> element
    newDiv.className = "col-md-2";
    var confirmed_by = document.createElement("p");
    confirmed_by.innerHTML = "5";
    newDiv.appendChild(confirmed_by);

    newRow.appendChild(newDiv);

    newDiv = document.createElement("div");
    newDiv.className = "col-md-2";
    var openButton = document.createElement("button");
    openButton.className = "far fa-plus-square";
    newDiv.appendChild(openButton);

    newRow.appendChild(newDiv);

    var eventButton = document.createElement("button");
    eventButton.className = "fas fa-clipboard-list";
    var x = window.location.hostname + "eventDetailsPage.html";
    eventButton.onclick = function () {
        window.location = "eventDetailsPage.html"
    };
    newDiv.appendChild(eventButton);

    var closeEventButton = document.createElement("button");
    closeEventButton.className = "fas fa-check-circle";
    newDiv.appendChild(closeEventButton);

    var deleteEventButton = document.createElement("button");
    deleteEventButton.className = "fas fa-trash-alt";
    newDiv.appendChild(deleteEventButton);
    deleteEventButton.onclick = function () {
        deleteEventOnIndex();
    };

    newRow.appendChild(newDiv);

    var placeToAdd = document.getElementById("addingEventsHere");
    placeToAdd.appendChild(newRow);
}


function deleteEventOnIndex() {

    // $(this).delete();


    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this event!",
        icon: "warning",
        buttons: true,
        dangerMode: true
    })
        .then(function (willDelete) {
            if (willDelete) {
                var childs = document.getElementById('addingEventsHere').childNodes;
                var len = childs.length;

                if (len--) do {
                    console.log('node: ', childs[len]);
                    if (childs[len].id === "node") {
                        document.getElementById('addingEventsHere').removeChild(childs[len])
                    }
                } while (len--);
                swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success"

                    }
                );
            } else {
                swal("Your imaginary file is safe!");
            }
        });

}