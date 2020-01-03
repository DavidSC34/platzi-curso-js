/**********
  Ejemplo del alcance de las funciones
*/

//=> Declaracion de un variable global
// Dependiendo el entorno, si es en el navegador la varaible global se acccede
// con window.nombrevariable

var nombre = 'Pedro';

//En este Ejemplo se le pasa una copia de la variable global, pero no afecta
//el valor de la misma, por tanto no hay efecto secundario
function imprimirNombreEnMayusculas(nombre){
   nombre = nombre.toUpperCase();
   console.log(nombre);
}

imprimirNombreEnMayusculas(nombre);

console.log('Variable Global : ', nombre);

// En este ejemplo, si que hay un efecto secundario y es que cambia el valor
// la variable global dentro de una funcion

function imprimirNombreEnMayusculas(){
   nombre = nombre.toUpperCase();
   console.log(nombre);
}

imprimirNombreEnMayusculas();

console.log('Variable Global efecto secundario: ', nombre);
