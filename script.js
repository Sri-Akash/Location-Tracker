let content = document.querySelector('.content')
let btn_navigate = document.getElementById('btn_navigate')
btn_navigate.style.display = "none"
content.style.display = "none"

document.getElementById('btn_tracker').addEventListener('click', function () {

    content.style.display = "block"

    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        content.innerHTML = "Geolocation is not supported by this browser.";
    }
})

var coordi = null

function showPosition(position) {
    coordi = position
    content.children[0].innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
    btn_navigate.style.display = "block"
}

btn_navigate.addEventListener('click', function () {
    var url = "https://www.google.com/maps/@" + coordi.coords.latitude + "," + coordi.coords.longitude + ",1513m/data=!3m1!1e3?entry=ttu"
    window.open(url, "_blank")
})

var btn_search = document.getElementById('btn_search')
var txt_search = document.getElementById('txt_search')

btn_search.addEventListener("click", function search() {
    var txt_search = document.getElementById('txt_search').value
    if (txt_search != "") {
        var url = "https://www.google.com/maps/place/" + txt_search
        window.open(url, "_blank")
    }
})

txt_search.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        var txt_search = document.getElementById('txt_search').value
        if (txt_search != "") {
            var url = "https://www.google.com/maps/place/" + txt_search
            window.open(url, "_blank")
        }
    }
})