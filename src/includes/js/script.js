function addItemIndexPage(eventId) {
    var div = function() {
        return document.createElement("div");
    };

    var p = function(innerHtml) {
        var result = document.createElement("p");
        result.innerHTML = innerHtml;
        return result;
    };

    var newCell = function() {
        var div = document.createElement("div");
        div.className = "col-md-2";
        return div;
    };

    var createProgressIcon = function() {
        var progressIcon = document.createElement("i");
        progressIcon.className = "fa fa-sync";
        return progressIcon;
    };

    var newIconButton = function(iconClass, onClick) {
        var button = document.createElement("button");
        button.className = "icon-button fas " + iconClass;
        if (onClick)
            button.onclick = onClick;

        return button;
    };

    var row = div();
    row.className = "row one-event";
    row.id = "event" + eventId;

    cell = newCell();
    var eventNum = p(eventId);
    if (getUrlParam("eventId") == eventId) {
        row.classList.add("in-progress");
        eventNum.appendChild(createProgressIcon());
    }

    cell.appendChild(eventNum);
    row.appendChild(cell);
    cell = newCell();

    var date = new Date();
    date.setMonth(date.getMonth() - eventId);
    var value = p(date.toLocaleDateString("en-us"));
    cell.appendChild(value);

    row.appendChild(cell);

    cell = newCell();
    cell.appendChild(p("Pernik building"));
    row.appendChild(cell);

    cell = newCell();
    cell.appendChild(p("Fix"));
    row.appendChild(cell);

    cell = newCell();
    cell.appendChild(p(Math.ceil(Math.random() * 10), 2));
    row.appendChild(cell);

    cell = newCell();
    cell.appendChild(newIconButton("fa-plus-square"));
    cell.appendChild(newIconButton("fa-clipboard-list", function(ev) {
        window.location = "eventDetailsPage.php?eventId=" +
            ev.currentTarget.parentElement.parentElement.id.replace("event", "");
    }));
    cell.appendChild(newIconButton("fa-check-circle"));
    cell.appendChild(newIconButton("fa-trash-alt"));

    row.appendChild(cell);


    var placeToAdd = document.getElementById("addingEventsHere");
    placeToAdd.appendChild(row);
}

getUrlParam("eventId");
fillFakeContent();