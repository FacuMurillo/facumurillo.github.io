// Cambio de Tamaño//
let cambio = window.document.getElementById('tamaño');
cambio.addEventListener('input', cambioTam);

function cambioTam(){
    let miTexto = window.document.getElementById('miParrafo');
    miTexto.style.fontSize = cambio.value + "em";
}
// fin//

window.onload = function cambiarFuente(){
    let fontSelect = document.getElementById('fuente');
    let textElement = document.getElementById('miParrafo');

    fontSelect.addEventListener('change' , function cambiarFuente() {
        let selectedFont = fontSelect.value;
        textElement.style.fontFamily = selectedFont;
    });
};

window.onload = function cambiarColor(){
    let color = document.getElementById('color');
    let colorParrafo = document.getElementById('miParrafo');

    color.addEventListener('change' , function cambiarColor
    () {
        let colorElegido = color.value;
        colorParrafo.style.color = colorElegido;
    });
};

window.onload = function cambiarFondo(){
    let fondo = document.getElementById('fondo');

    fondo.addEventListener('change' , function cambiarFondo
    () {
        let colorElegido = fondo.value;
        document.body.style.backgroundColor = colorElegido;
    });
};