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

//Ahora implementamos una funcion que pase un objeto
//Entonces los objetos son pasando por referencia,i.e, se modifican sus valores originales
// function cumpleanos(persona){
//   persona.edad += 1;
// }

//Entonces si queremos pasar la edad que es propiedad, esta pasa por valor
function cumpleanos(edad){
  edad += 1;
}


//Que podemos hacer para pasar el objeto y no tener este efecto secundario
// pasamos el objeto y hacemos una copia y ademas modificamos la propiedad

function cumpleanos(persona){
   return{
    ...persona,
    edad: persona.edad += 1
   }
}


var SachaMasViejo = cumpleanos(sacha);

console.log(SachaMasViejo);//=> con edad = 29, es un nuevo objeto modificado
console.log(sacha);//=> conserva la edad = 28

// cumpleanos(sacha);
// console.log(sacha);
