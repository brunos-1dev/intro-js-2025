// Strings

// Variable tipo String de al menos 10 caracteres convestida a MAYÚSCULA
var strA = "desarrollador";
var strAUpper = strA.toUpperCase();
console.log("[2.a]", strAUpper);

// Primeros 5 caracteres (substring)
var strB = "javascript!!";
var primeros5 = strB.substring(0, 5);
console.log("[2.b]", primeros5);

// Últimos 3 caracteres
var strC = "introduccion";
var ultimos3 = strC.substring(strC.length - 3);
console.log("[2.c]", ultimos3);

// Primera letra en mayúscula, resto minúscula
var strD = "javascript";
var strDForm = strD.substring(0,1).toUpperCase() + strD.substring(1).toLowerCase();
console.log("[2.d]", strDForm);

// Posición del primer espacio (indexOf)
var strE = "introducción web";
var posEspacio = strE.indexOf(" ");
console.log("[2.e] Posición del primer espacio:", posEspacio);

// Dos palabras largas, la primera letra de cada una en mayúscula
var strF = "repositorio remoto";
var espacio = strF.indexOf(" ");
var palabra1 = strF.substring(0, espacio);
var palabra2 = strF.substring(espacio + 1);

var palabra1Cap = palabra1.substring(0,1).toUpperCase() + palabra1.substring(1).toLowerCase();
var palabra2Cap = palabra2.substring(0,1).toUpperCase() + palabra2.substring(1).toLowerCase();

var resultadoF = palabra1Cap + " " + palabra2Cap;
console.log("[2.f]", resultadoF);