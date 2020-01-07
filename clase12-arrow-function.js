/*****************
Haremos uso de las Arrow Functions

Se pasa  reescribe la funcion de la mayoria de edad
RETO : escribir la funcion de menor de edad

*/

var sacha = {
   nombre : 'Sacha',
   apellido : 'Lifszyc',
   edad : 28,
   ingeniero: true,
   cocinero : false,
   cantante: false,
   dj: false,
   guitarrista: false,
   drone: true

}


//Se crea para uso de la funcion
var juan = {
    nombre : 'Juan',
    apellido: 'Gomez',
    edad: 13
}

const MAYORIA_DE_EDAD = 18;//=> ya que no cambia y se mejora la funcion

// const  esMayorDeEdad = function (persona){
//    return persona.edad >=MAYORIA_DE_EDAD;
// }

//cunado tenemos un solo parametro se puede obviuar los parentesis
//ademas se puede obivar la llaves si la funcion regresa un valor

// const  esMayorDeEdad =  persona =>persona.edad >=MAYORIA_DE_EDAD;

//De otra manera es desestructurando el objeto hacemos :
const  esMayorDeEdad =  ({edad}) => edad >=MAYORIA_DE_EDAD;
const esMenorDeEdad =   persona => !esMayorDeEdad(persona);
//IMprimir la edad
 function imprimirSiEsMayorDeEdad(persona){
       if (esMayorDeEdad(persona)) {
         console.log(`${persona.nombre} es mayor de edad `);
       } else {
         console.log(`${persona.nombre} es menor de edad `);
       }
 }

 //Una funcion que permite o no el accesos a

 function permitirAcceso(persona){
     if (!esMayorDeEdad(persona)) {
       console.log('ACCESO DENEGADO');
     }
 }


 function permitirAcceso2(persona){
     if (esMenorDeEdad(persona)) {
       console.log('ACCESO DENEGADO');
     }else {
       console.log('ACCESO PERMITIDO');
     }
 }
