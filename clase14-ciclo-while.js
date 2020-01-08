/****
Haremos uso del ciclo while con una simulacion de aumento y disminucion de persona

Pero ahora la meta es bajar 3 kilos, no sabemos cuantos dias lograr la aumentar
Debemos calcular esto.

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
const INCREMENTO_PESO =  0.3; //=> esta en kg
const DIAS_ANO = 365;

//Ahora las funcines que determinan si come mucho o hace ejercicio la persona
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;



const META = sacha.peso - 3;

//Funciones para aumentar y bajar peso
//Nota: los objetos se pasan por referencia, asi que modifica directamente
//al objeto
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar =  persona => persona.peso -= INCREMENTO_PESO;
var dias = 0;
//Todavia peso los 3 kilos demas?  entonces
while (sacha.peso > META) {
    if(comeMucho()){
      aumentarDePeso(sacha);
    }

    if (realizaDeporte()) {
      adelgazar(sacha);
    }
    dias++;
}




console.log(`Pasaron ${dias} dias hasta question ${sacha.nombre} bajo 3 kg`);
