// JavaScript source code
function toggleHiddenE(x408) {
    var x = document.getElementById("HiddenE" + String(x408));
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function sendAlert() {
    alert("Request fulfilled!");
}