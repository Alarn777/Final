

function fillWithContent() {
    document.getElementById("serviseProvider").innerHTML = "Yosi Mazur  (Glassworker)";
    $('#serviseProvider').val("Yosi Mazur  (Glassworker)");
    document.getElementById("description").innerHTML = "The glass window is broken in the classroom";
    $('#description').val("The glass window is broken in the classroom");
    document.getElementById("location").innerHTML ="Classroom 224,floor 2, Engineering building, Shenkar";
    $('#location').val("Classroom 224,floor 2, Engineering building, Shenkar");
    document.getElementById("comment").innerHTML ="I add some comment here";
    $('#comment').val("I add some comment here");
    document.getElementById("requestedBy").innerHTML ="Moshe Maso";
    $('#requestedBy').val("Moshe Maso");
}


window.onload = function (ev) { fillWithContent() };



function success() {
    swal({
        icon: "success",
        title:  "Event No.3 was sent to Yosi Mazur  (Glassworker) by Moshe Maso for further processing.",
        showConfirmButton: true,
        confirmButtonText: "OK",
        closeOnConfirm: false
    }). then(function(result){
        window.location = "http://localhost:63342/Final/index.html";
    })


}

function addItem(){

        var newDiv = document.createElement("div");        // Create a <div> element
        var eventNum = document.createElement("p");
        eventNum.innerHTML = "1";
        var date  = document.createElement("p");
        date.innerHTML = "21.1.14";
        var location = document.createElement("p");
        location.innerHTML = "Pernik building";
        var fix_improve  = document.createElement("p");
        fix_improve.innerHTML = "Fix";
        var confirmed_by  = document.createElement("p");
        confirmed_by.innerHTML = "5";
        newDiv.appendChild(eventNum);
        newDiv.appendChild(location);
        newDiv.appendChild(date);
        newDiv.appendChild(fix_improve);
        newDiv.appendChild(confirmed_by);
        newDiv.className = "eventAdded";
        var openButton = document.createElement("button");
        openButton.innerHTML = '<img src="images/icons/open_event.png" />';
        openButton.className = "eventButtons";
        newDiv.appendChild(openButton);
        var eventButton = document.createElement("button");
        eventButton.innerHTML = '<img src="images/icons/event_in_new_tab.png" />';
        eventButton.className = "eventButtons";
        newDiv.appendChild(eventButton);
        var closeEventButton = document.createElement("button");
        closeEventButton.innerHTML = '<img src="images/icons/check.png" />';
        closeEventButton.className = "eventButtons";
        newDiv.appendChild(closeEventButton);
        var deleteEventButton = document.createElement("button");
        deleteEventButton.innerHTML = '<img src="images/icons/delete.png" />';
        deleteEventButton.className = "eventButtons";
        newDiv.appendChild(deleteEventButton);
        var placeToAdd = document.getElementById("eventsAdded");
        document.body.appendChild(newDiv);
}
//
// $( document ).ready(addItem());