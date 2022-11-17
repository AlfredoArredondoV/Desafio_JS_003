pintar = function(color){
    elemento = document.querySelector("body");
    elemento.style.backgroundColor = color;
}
// pintar("blue");

function agregarBordes(elementId, color = 'blue' ) {
    elemento = document.querySelector('#' + elementId);
    elemento.style.border="dashed 3px " + color;
}

document.addEventListener('keydown', function (event) {
    
    if (event.key === 'a') {
    /* Cambiar a color 1 */
    } else if (event.key === 's') {
    /* Cambiar a color 2 */
    }
})