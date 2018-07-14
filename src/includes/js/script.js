function attachEvents() {
    var deleteButtons = $(".fa-trash-alt");
    for (var btn of deleteButtons) {
        $(btn).on('click', function() {
            deleteEvent(+this.id.replace("deleteEvent", ""));
        })
    }
};

getUrlParam("eventId");
attachEvents();

function deleteEvent(id) {
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then(function(result) {
        if (result) {
            $.ajax({
                type: "DELETE",
                url: 'event.php?id=' + id,
                success: function(data) {
                    console.log(data);
                },
                error: function(e) {
                    console.log(e);
                }
            });

        }
    });
};