var getUrlParam = function(param) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");

    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == param)
            return pair[1];

    }

    return (false);
};

var showLoadingSpinner = function() {
    var spinner = $("<div class=\"spinner\">").append();
    var b1 = $("<div class=\"double-bounce1\"></div>");
    var b2 = $("<div class=\"double-bounce2\"></div>");
    spinner.append(b1, b2);
    $("body").append(spinner);
};

var removeSpinner = function() {
    $(".spinner").remove();
};