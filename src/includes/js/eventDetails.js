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

}