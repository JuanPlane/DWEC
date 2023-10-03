window.onload = function() {
    cambiarColor();
};

function cambiarColor() {
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}