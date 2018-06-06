function sendEvent() {
    var inputValue = document.querySelector('input[name="sendEventTo"]').value;
    var newTextFromInput = document.createElement("div");

    var message = document.createElement("p");
    message.classList.add("message-sent-confirm");
    message.innerHTML = "The event was transferred to" + inputValue + " for further processing.";
    newTextFromInput.appendChild(message);
    document.getElementById("sentForm").appendChild(newTextFromInput);

    var button = document.getElementById("sendMessage");
    button.disabled = true;
    button.classList.remove("btn-primary");
    button.classList.add("btn-disabled");
};

var setEventId = function() {
    var eventId = getUrlParam("eventId");
    for (const eventIdElement of document.querySelectorAll(".eventId"))
        eventIdElement.innerHTML = eventId;

    document.getElementById("openServiceRequest")
        .attributes["href"].value = "serviceRequestOpen.html?eventId=" + eventId;
};

setEventId();