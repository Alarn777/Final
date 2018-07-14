var createFakeContent = function() {
    if (document.body.id === "serviceRequestOpen")
        fillWithContent();
};

$("#serviceRequest").submit(function(e) {
    swal({
        icon: "success",
        title: "Event No." + getUrlParam("eventId") + " was sent to " + this.recipient.value + "  by " + this.requested_by.value + " for further processing.",
        showConfirmButton: true,
        confirmButtonText: "OK",
        closeOnConfirm: false
    }).then(function(result) {
        this.submit();
    });

});

var fillWithContent = function() {

    $.getJSON("includes/data/data.json", function(fb) {
        var userID = getRandomInt(3);
        $('#serviseProvider').val(fb[userID].name);
    });
};



var getEventId = function() {
    var eventId = getUrlParam("eventId");
    eventId = eventId.replace('event', '');
    return eventId;
};
createFakeContent();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}