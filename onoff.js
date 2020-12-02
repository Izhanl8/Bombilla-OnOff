function light() {
    var image = document.getElementById('bombilla');
    if (image.src.match("on")) {
        image.src = "images/bombillaoff.png";
    } else {
        image.src = "images/bombillaon.png";
    }
}


