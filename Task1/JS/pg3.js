function check(el) {
    var name = el.name.value;
    var email = el.email.value;
    var message = el.message.value;
    document.getElementById("name-error").innerText = "";
    document.getElementById("email-error").innerText = "";
    document.getElementById("message-error").innerText = "";
    var isValid = true;
    if (name == "") {
        document.getElementById("name-error").innerText = "Please enter your name!";
        isValid = false;
    } else if (name.length <= 1 || name.length >= 50) {
        document.getElementById("name-error").innerText = "Name must be between 2 and 50 characters!";
        isValid = false;
    }
    if (email == "") {
        document.getElementById("email-error").innerText = "Please enter your email!";
        isValid = false;
    } else if (email.split('&').length > 1) {
        document.getElementById("email-error").innerText = "Incorrect email!";
        isValid = false;
    }
    if (message == "") {
        document.getElementById("message-error").innerText = "Please enter a message!";
        isValid = false;
    }
    if (!isValid) {
        return false;
    } else {
        alert("All correct!");
        return true;
    }
}