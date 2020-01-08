/**
Uso de los arrays en JS
En esta ocasion se hare uso de un arreglo de objetos, ciclos para recorrerlo
ademas de la notacion punto  y corchete  ". y []"


Cambiaremos este programa  agregando un filtrado
***/


//Se definen unos objetos para poder trabajar
var sacha = {
  nombre : 'Sacha',
  apellido: 'Lifszyc',
  altura: 1.72
};


var alan = {
   nombre : 'Alan',
   apellido: 'Perez',
   altura: 1.86
};

var martin = {
  nombre: 'Martin',
  apellido:'Gomez',
  altura:1.85
};


var david = {
  nombre:'David',
  apellido: 'Sanchez',
  altura:1.59
};

var noemi = {
  nombre:'Noemi',
  apellido:'Alvarez',
  altura:1.50
};
var javier = {
  nombre:'Javier',
  apellido: 'Alvarez',
  altura: 1.58
};


// const esAlta = persona =>{
//    return persona.altura > 1.8;
// }

//Cambiandola mas

const esAlta = ({altura}) => altura > 1.8;
const esBaja = ({altura}) => altura < 1.8;

//SE dceclara un array se distingue con el uso de los corchetes []
var personas = [sacha, alan,martin, david, noemi, javier];


// Usamos la funcion filter, que recibe un condicional(funcion)
// y regresa un arreglo
var personasAltas = personas.filter(esAlta);
var personaBajas = personas.filter(esBaja);

console.log(personasAltas);
console.log(personaBajas);


/*
PAra acceder a un elemento y su propiedad hacemos
 persona[0].nombre
 persona[0]['nombre']  estas dos formas son equivalentes
*/
