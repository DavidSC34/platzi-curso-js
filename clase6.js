/*****
Objectos en JS, uso de propiedades, ademas las nuevas caracteristicas de ES6
 como son  destrucutrar un objeto al pasarlo a una funcion
*/


//=> Creacion de objectos

var sacha = {
   nombre : 'Sacha',
   apellido: 'Lifszyc',
   edad: 28
};

var dario = {
   nombre : 'Dario',
   apellido: 'Susnisky',
   edad: 27
};

//Creacin de la funcion

// function imprimirNombreEnMayusculas(nombre){
//   console.log(nombre.toUpperCase());
// }

//Para usar esta funcion al pasarle un objecto y el nombre, acccedemos a su
// propiedad mediante el operador punto "."

// imprimirNombreEnMayusculas(sacha.nombre);
// imprimirNombreEnMayusculas(dario.nombre);

//Otra forma de hacerlo es pasando el objeto completo
// hay que modificar  la funcion para poder realizarlo de esta manera
function imprimirNombreEnMayusculas(persona){
  console.log(persona.nombre.toUpperCase());
}
imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas(dario);

//usando las mejoras de ES6, se destreuctura el objeto y se pasa un atributo

function imprimirNombreEnMayusculas({nombre}){
  console.log(nombre.toUpperCase());
}

//Ejemplos de invocacion y error de paso de valores
imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas(dario);
imprimirNombreEnMayusculas({nombre:'David'});//=>creando el objeto aqui mismo
//imprimirNombreEnMayusculas({apellido:'Gomez'});//=>el atributo del objeto no es el esperado
