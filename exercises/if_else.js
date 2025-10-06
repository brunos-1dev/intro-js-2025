// If Else

// Número aleatorio 0..1
var r = Math.random();
if (r >= 0.5) {
  alert("Greater than 0,5");
} else {
  alert("Lower than 0,5");
}
console.log("[4.a] random:", r);

// Age categorías
var Age = 37; 
if (Age < 2) {
  alert("Bebe");
} else if (Age <= 12) {
  alert("Niño");
} else if (Age <= 19) {
  alert("Adolescente");
} else if (Age <= 30) {
  alert("Joven");
} else if (Age <= 60) {
  alert("Adulto");
} else if (Age <= 75) {
  alert("Adulto mayor");
} else {
  alert("Anciano");
}
console.log("[4.b] Age:", Age);
