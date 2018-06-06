var createFakeContent = function() {

    if (document.body.id === "serviceRequestOpen")
        fillWithContent();
};


function success() {
    swal({
        icon: "success",
        title: "Event No.3 was sent to Yosi Mazur  (Glassworker) by Moshe Maso for further processing.",
        showConfirmButton: true,
        confirmButtonText: "OK",
        closeOnConfirm: false
    }).then(function(result) {
        window.location = "http://localhost:63342/Final/index.html?eventId=2";
    })


}
var fillWithContent = function() {
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
};


createFakeContent();