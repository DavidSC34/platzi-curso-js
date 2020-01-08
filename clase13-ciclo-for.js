/****
Haremos uso del ciclo for con una simulacion de aumento y disminucion de persona

Usaremos : for, const, contador, arrow functions y template strings,
ademas objetos

***/


var sacha = {
  nombre : 'Sacha',
  apellido : 'Lifszyc',
  edad : 28,
  peso : 78
}

console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso}kg`);

//Este ciclo hara uso de una probabilidad de 25% para aumento de persona
// y  del 50% para adelgazar de peso con un numero random
 const INCREMENTO_PESO =  0.2; //=> esta en kg
const DIAS_ANO = 365;

//Funciones para aumentar y bajar peso
//Nota: los objetos se pasan por referencia, asi que modifica directamente
//al objeto
const aumentarDePeso = ({peso}) => peso += INCREMENTO_PESO;
const adelgazar =  ({peso}) => peso -= INCREMENTO_PESO;



for (var i = 0; i < DIAS_ANO; i++) {
  var random = Math.random(); //=> va desde 0 a 1
    if (random < 0.25) {
      //aumento de peso
      aumentarDePeso(sacha);
    } else if ( random < 0.5) {
    adelgazar(sacha);
    }


}



console.log(`Al final del año ${sacha.nombre} pesa ${sacha.peso.toFixed(1)}kg`);
