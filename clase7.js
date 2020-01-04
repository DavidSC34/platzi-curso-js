/*****
Destructurando un objeto dentro de una funcion
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



//usando las mejoras de ES6, se destreuctura el objeto dentro de la funcion

function imprimirNombreEnMayusculas(persona){
  //var nombre = persona.nombre;
  var {nombre} = persona;//destructura el objeto en atributos o propiedades
  console.log(nombre.toUpperCase());
}

//Ejemplos de invocacion y error de paso de valores
imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas(dario);
imprimirNombreEnMayusculas({nombre:'David'});//=>creando el objeto aqui mismo
//imprimirNombreEnMayusculas({apellido:'Gomez'});//=>el atributo del objeto no es el esperado

//=> RETTOO
//Escribir una funcion que reciba ub objeto y que imprima el nombre y los años
 function imprimirNombreYEdad( persona){
   //Hola, me llamo Sacha y tengo 28 años
   //Hola, me llamo David y tengo 34 años
   var {nombre} = persona;
   var {edad } = persona;
   console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`);
 }


imprimirNombreYEdad(sacha);
imprimirNombreYEdad(dario);
