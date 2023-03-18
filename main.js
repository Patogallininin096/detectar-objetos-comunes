var imagen = "";
var objeto = [];
var status = "";
function setup() {
    canavas = createCanvas(640, 420);
    canvas.center();
    detector = ml5.objectDetector("cocossd", listo);
}
function preload() {
    imagen = loadImage("dog_cat.jpg")
}
function draw() {
    image(imagen, 0, 0, 650, 420);
    if (status != "") {
        for (i = 0; i < objetos.legth; i++) {
            objetoActual = objetos[i];
            probabilidad = floor(objetoActual.confidence * 100);
            mensaje = objetoActual.label + " " + probabilidad + "%";
            noFill();
            stroke("red");
            text(mesaje, objetoActual.x + 15, objetoActual.y + 15);
            rect(objetoActual.x, objetoActual.y, objetoActual.width, objetoActual.height);
        }
        document.getElementById("status").innerHTML = "Objetos detectados"
    }

}
function listo() {
    status = true;
    detector.detect(imagen, obtenerResultados);
}
function obtenerResultados(error, resultados) {
    if (!error) {
        objetos = resultado;
        console.log(resultados);
    }
}