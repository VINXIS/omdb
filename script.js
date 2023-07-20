$(document).ready(function() {
    $('#osuLink').on('click', function() {
        setGameMode(0)
    });

    $('#taikoLink').on('click', function() {
        setGameMode(1)
    });

    $('#catchLink').on('click', function() {
        setGameMode(2)
    });

    $('#maniaLink').on('click', function() {
        setGameMode(3)
    });
});

function setGameMode(mode) {
    var expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);

    var cookieValue = "mode=" + mode + "; expires=" + expirationDate.toUTCString() + ";path=/;";
    document.cookie = cookieValue;
    location.reload();
}

let debounceTimer;

function showResult(str) {
    if (str.length == 0) {
        document.getElementById("topBarSearchResults").innerHTML = "";
        document.getElementById("topBarSearchResults").style.display = "none";
        return;
    }

    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(function () {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("topBarSearchResults").innerHTML = this.responseText;
                document.getElementById("topBarSearchResults").style.display = "block";
            }
        };
        xmlhttp.open("GET", "/beatmapSearch.php?q=" + str, true);
        xmlhttp.send();
    }, 300);
}

function searchFocus() {
    document.getElementById("topBarSearchResults").style.display="block";
}

function openTab(name) {
    let x = document.getElementsByClassName("tab");
    for (let i = 0; i < x.length; i++)
        x[i].style.display = "none";

    let buttons = document.getElementsByClassName("tabbed-container-nav")[0].getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++)
        buttons[i].classList.remove("active");

    document.getElementById(name).style.display = "block";
    event.target.classList.add("active");
}