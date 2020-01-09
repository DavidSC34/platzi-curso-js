/**
Ahora veremos como de un total de libros sumarlos e imprimir este valor
apartir de una entrada de arreglo de objetos


*/
//Se definen unos objetos para poder trabajar
var sacha = {
  nombre : 'Sacha',
  apellido: 'Lifszyc',
  altura: 1.72,
  cantidadDeLibros : 12
};


var alan = {
   nombre : 'Alan',
   apellido: 'Perez',
   altura: 1.86,
   cantidadDeLibros : 65
};

var martin = {
  nombre: 'Martin',
  apellido:'Gomez',
  altura:1.85,
  cantidadDeLibros : 98
};


var david = {
  nombre:'David',
  apellido: 'Sanchez',
  altura:1.59,
  cantidadDeLibros : 66
};

var noemi = {
  nombre:'Noemi',
  apellido:'Alvarez',
  altura:1.50,
  cantidadDeLibros : 88
};
var javier = {
  nombre:'Javier',
  apellido: 'Alvarez',
  altura: 1.58,
  cantidadDeLibros : 99
};

//SE dceclara un array se distingue con el uso de los corchetes []
var personas = [sacha, alan,martin, david, noemi, javier];
//Podemos usar un amucluador
const reducer = ( acum, {cantidadDeLibros} )=> acum + cantidadDeLibros;


var totalDeLibros = personas.reduce(reducer, 0)//Funcion y acumulador =0

//var acum = 0;


// for (var i = 0; i < personas.length; i++) {
//     acum += personas[i].cantidadDeLibros;
// }

console.log(`En total todos tiene ${totalDeLibros} libros`);
