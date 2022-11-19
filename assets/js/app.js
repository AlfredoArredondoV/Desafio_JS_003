document.getElementById("ele1").style.backgroundColor = "red";
document.getElementById("ele2").style.backgroundColor = "blue";
document.getElementById("ele3").style.backgroundColor = "yellow";
document.getElementById("ele4").style.backgroundColor = "aqua";

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        document.getElementById("ele1").style.backgroundColor = "gray";
    } else if (event.key === 's') {
        let x = document.getElementsByClassName("s200");
        for (i = 0; i<x.length; i++) {
        x[i].style.backgroundColor = "red";
        }
    } else if (event.key === 'd') {
        let x = document.getElementsByClassName("s200");
        for (i = 0; i<x.length; i++) {
        x[i].style.backgroundColor = "blue";
        }
    } else if (event.key === 'f') {
        document.getElementById("ele1").style.backgroundColor = "white";
    } else if (event.key === 'g') {
        document.getElementById("ele2").style.backgroundColor = "violet";
    } else if (event.key === 'h') {
        document.getElementById("ele3").style.backgroundColor = "black";
    } else if (event.key === 'j') {
        document.getElementById("ele4").style.backgroundColor = "orange";
    } else if (event.key === 'k') {
        document.getElementById("ele3").style.backgroundColor = "purple";
    } else if (event.key === 'l') {
        document.getElementById("ele2").style.backgroundColor = "teal";
    }
})