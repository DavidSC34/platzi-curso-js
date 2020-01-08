/**
Uso de los arrays en JS
En esta ocasion se hare uso de un arreglo de objetos, ciclos para recorrerlo
ademas de la notacion punto  y corchete  ". y []"
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
//SE dceclara un array se distingue con el uso de los corchetes []
var personas = [sacha, alan,martin, david, noemi, javier];

console.log(personas);//=>vemos el contenido del arreglo

//Para iterar por los elementos del arreglo usamos un ciclo for (var i = 0; i <
for (var i = 0; i < personas.length; i++) {
  var persona = personas[i];
  console.log(`${persona.nombre} mide ${persona.altura}mts`);
}

/*
PAra acceder a un elemento y su propiedad hacemos
 persona[0].nombre
 persona[0]['nombre']  estas dos formas son equivalentes
*/
