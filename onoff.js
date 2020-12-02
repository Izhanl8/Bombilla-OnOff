function light() {
    var image = document.getElementById('bombilla');
    if (image.src.match("on")) {
        image.src = "images/bombillaoff.png";
    } else {
        image.src = "images/bombillaon.png";
    }
}

function encender() {
    var image = document.getElementById('encender');
    if (image.src.match("arriba")) {
        image.src = "images/abajo.png";
    } else {
        image.src = "images/arriba.png";
    }
}