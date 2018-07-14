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
// fillFakeContent();

// var set = false;
//
// window.onload = function (ev) {
//     if(set === false) {
//         set = true;
//         var trushButton;
//         var children = document.getElementById("addingEventsHere").children;
//         var i1 = 1;
//         while (children[i1] != null) {
//             var name = children[i1].id;
//             var idNum = name.replace('event', '');
//             idNum = "trashButton " + idNum;
//             trushButton = document.getElementById(idNum);
//             trushButton.onclick = function () {
//                 var parent = trushButton.parentElement;
//                 parent = parent.parentElement;
//                 console.log(parent.id);
//                 deleteEvent(parent.id);
//             };
//             i1++;
//         }
//     }
// };


// document.getElementById("trashButton").addEventListener("click", deleteEvent);



function deleteEvent() {
    var clickedElement = event.target;

    // var trushButton = document.getElementById("trashButton");
    var parent = clickedElement.parentElement;
    parent = parent.parentElement;
    console.log(parent.id);
    var idNum = parent.id.replace('event', '');
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then(function(result) {
        if(result){
           var resoulat = '<?php deleteEvent('+idNum+');?>';
            jQuery.ajax({
                type: "POST",
                url: 'deleteEvent.php',
                data: {functionname: 'deleteEvent', arguments: [idNum]},
                success:function(data) {
                    // alert(data);
                }
            });

        }
    })
};

