/*****************
Haremos uso de las funciones que retorna un valor

ADemas se mejora mas la logica de la programacion para las funciones

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

function esMayorDeEdad(persona){
   return persona.edad >=MAYORIA_DE_EDAD;
}

//IMprimir la edad
 function imprimirSiEsMayorDeEdad(persona){
       if (esMayorDeEdad(persona)) {
         console.log(`${persona.nombre} es mayor de edad `);
       } else {
         console.log(`${persona.nombre} es menor de edad `);
       }
 }
