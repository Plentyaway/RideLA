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

function httpGetAsync(localhost:3000/api/users, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            console.log(xmlHttp.responseText);
            callback(xmlHttp.responseText);
        }
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);

}
