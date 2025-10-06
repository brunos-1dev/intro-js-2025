// Funciones

// Función validateInteger: devuelve true si es entero
function validateInteger(num) {
  return Number.isInteger(num);
}

// validar enteros separada
function ensureIntegerOrRound(num) {
  if (!validateInteger(num)) {
    alert("El número " + num + " no es entero; se redondeará.");
    return Math.round(num);
  }
  return num;
}

// suma con validación de tipo numérico
function suma(a, b) {
  if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
    alert("Error: uno de los parámetros no es un número.");
    return NaN;
  }
  // validar que sean enteros; si no, avisar y redondear
  a = ensureIntegerOrRound(a);
  b = ensureIntegerOrRound(b);
  return a + b;
}

// ejecutar suma, guardar resultado y mostrar en consola
var res1 = suma(10, 20);
console.log("[6.a/b/d/e] suma(10,20) =", res1);

var res2 = suma(10.7, 2.2);
console.log("[6.d/e] suma(10.7,2.2) con redondeo =", res2);

console.log("[6.c] validateInteger(5) =", validateInteger(5));
console.log("[6.c] validateInteger(5.5) =", validateInteger(5.5));
