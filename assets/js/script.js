
const element1 = document.getElementById("ele1");
const element2 = document.getElementById("ele2");
const paint = function ( element, color) {
    element.setAttribute('style', 'background-color:' + color)
}
element1.addEventListener('click', () => paint(element1, 'yellow'));
element2.addEventListener('click', () => paint(element2, 'yellow'));

// // Creamos un array vacio
// const ElementosClick = new Array();
// // Capturamos el click y lo pasamos a una funcion
// document.onclick = captura_click;
// function captura_click(e) {
// 	// Funcion para capturar el click del raton
// 	let HaHechoClick;
// 	if (e !== null) {
// 		// Si ha hecho click sobre un destino, lo leemos
// 		HaHechoClick = e.target;
// 	}
// 	// Añadimos el elemento al array de elementos
// 	ElementosClick.push(HaHechoClick);
// 	// Una prueba con salida en consola
//     console.log(HaHechoClick.id);
//     if (HaHechoClick.id !== '') {
//         ele = document.getElementById(HaHechoClick.id);
//         ele.setAttribute('style', 'background-color: blue') 
//     }
// }