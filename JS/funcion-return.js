//Declarar
var x, y, z, w;

//Asignar
x = multiplicar(4, 3);
y = dividir(8, 4);
z = sumar(7, 3);
w = restar(20, 7);

//Acciones
document.getElementById("mult").innerHTML =
  "El resultado de multiplicar 4 * 3 es " + x;
document.getElementById("div").innerHTML =
  "El resultado de dividir 8 / 4 es " + y;
document.getElementById("suma").innerHTML =
  "El resultado de sumar 7 + 3 es " + z;
document.getElementById("resta").innerHTML =
  "El resultado de restar 20 - 7 es " + w;

//Funciones
function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}
