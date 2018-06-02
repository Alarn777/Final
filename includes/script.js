
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