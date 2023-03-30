var x, y, z, w;

x = multiplicando(4, 3);
y = dividiendo(8, 4);
z = sumando(7, 3);
w = restando(20, 7);

const multiplicando = (a,b) => (a*b);
const dividiendo = (a,b) => (a/b);
const sumando = (a,b) => (a+b);
const restando = (a,b) => (a-b);

document.getElementById("multiplicando").innerHTML =
  "El resultado de multiplicar 4 * 3 es " + x;
document.getElementById("dividiendo").innerHTML =
  "El resultado de dividir 8 / 4 es " + y;
document.getElementById("sumando").innerHTML =
  "El resultado de sumar 7 + 3 es " + z;
document.getElementById("restando").innerHTML =
  "El resultado de restar 20 - 7 es " + w;