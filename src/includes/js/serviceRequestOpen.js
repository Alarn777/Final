var createFakeContent = function() {
    if (document.body.id === "serviceRequestOpen")
        fillWithContent();
};

function submitRequest() {
    var form = document.getElementById("actionForm");

    swal({
        icon: "success",
        title: "Event No." + getUrlParam("eventId") + " was sent to Yosi Mazur  (Glassworker) by Moshe Maso for further processing.",
        showConfirmButton: true,
        confirmButtonText: "OK",
        closeOnConfirm: false
    }).then(function(result) {
        // window.location = "index.php?eventId=" + getUrlParam("eventId");
        $("#actionForm").submit();
    })

};




var fillWithContent = function() {

    $.getJSON("includes/data/data.json", function(fb) {
        var userID = getRandomInt(3);
        $('#serviseProvider').val(fb[userID].name);
    });
};

// var setEventId = function() {
//     var eventId = getUrlParam("eventId");
//     for (var eventIdElement of document.querySelectorAll(".eventId"))
//         eventIdElement.innerHTML = eventId;
// };


var getEventId = function () {
    var eventId = getUrlParam("eventId");
    eventId = eventId.replace('event','');
    return eventId;
};
createFakeContent();
setEventId();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}