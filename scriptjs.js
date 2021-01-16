function myEnter() {
    if (document.getElementById("motorChangeColor").style.display === 'none',
        document.getElementById("main").style.display === 'block') {
        document.getElementById("motorChangeColor").style.display = 'block';
        document.getElementById("main").style.display = 'none';
    } else {
        document.getElementById("motorChangeColor").style.display = 'none';
        document.getElementById("main").style.display = 'block';
    }
}

function myGSFshow() {
    var x = document.getElementById("selectId");
    var bgcolor = x.options[x.selectedIndex].value;
    document.getElementById("image").style.backgroundColor = bgcolor;
}

function myGRC() {
    var symbols, color;
    symbols = "0123456789ABCDEF";

    color = "#";
    for (var i = 0; i < 6; i++) {
        color = color + symbols[Math.floor(Math.random() * 16)];
    }
    document.getElementById("image").style.backgroundColor = color;
}

function myGSCReset() {
    document.getElementById("image").style.backgroundColor = 'white';
}