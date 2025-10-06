// For

// Crear Array de 5 palabras y recorrerlo 
var palabras = ["javascript", "variables", "funciones", "arreglos", "objetos"];
for (var i = 0; i < palabras.length; i++) {
  alert("[5.a] " + palabras[i]);
}

// Primera letra mayúscula en cada palabra 
for (var j = 0; j < palabras.length; j++) {
  var p = palabras[j];
  var pCap = p.substring(0,1).toUpperCase() + p.substring(1).toLowerCase();
  alert("[5.b] " + pCap);
}

// Crear variabl llamada sentence acumulando palabras y alert final
var sentence = "";
for (var k = 0; k < palabras.length; k++) {
  sentence += (k === 0 ? "" : " ") + palabras[k];
}
alert("[5.c] " + sentence);

// Array vacío y llenarlo con números de 0 hasta 9
var arrNumeros = [];
for (var n = 0; n < 10; n++) {
  arrNumeros.push(n);
}
console.log("[5.d] arrNumeros:", arrNumeros);
