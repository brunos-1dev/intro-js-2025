// Arrays

var meses = [
  "Enero","Febrero","Marzo","Abril","Mayo","Junio",
  "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
];

// Mostrar mes 5 y 11
console.log("[3.a]", meses[4], meses[10]);

// Ordenar alfabéticamente 
var mesesOrdenados = [...meses].sort();
console.log("[3.b] Orden alfabético:", mesesOrdenados);

// Agregar al principio y al final
var mesesC = [...meses];
mesesC.unshift("Inicio");
mesesC.push("Fin");
console.log("[3.c] unshift/push:", mesesC);

// Quitar del principio y del final
var mesesD = [...mesesC];
mesesD.shift();
mesesD.pop();
console.log("[3.d] shift/pop:", mesesD);

// Invertir el orden
var mesesE = [...meses].reverse();
console.log("[3.e] reverse:", mesesE);

// Unir con guión
var unidos = meses.join("-");
console.log("[3.f] join con '-':", unidos);

// Copia desde Mayo hasta Noviembre 
var copia = meses.slice(4, 11);
console.log("[3.g] slice Mayo..Noviembre:", copia);
