//Uso de lo snumero en js
//Aqui usamos la consola del navegador Google Chrome

var edad = 27;
// edad = edad +1  //=> incrementa en 1 la edad, pero hay un equivalente
edad +=1;

//Ahora usando la operacion de resta, hacemos

var peso = 75;
//peso = peso - 2; //=> tambien hay un equivalente para reescribirla
peso -= 2;

//Ahora por cada sandwich que como subo un kilo, suponiendo

var sandwich = 1
//peso = peso + sandwich; //=> la reescribimos caracterisitca
peso += sandwich;


//Ahora bien, cada que juego al futbol, bajo 3 kilos, entonces

var jugarAlFutbol = 3;

//peso = peso  - jugarAlFutbol; //=> la reescribimos de la siguiente manera
peso -= jugarAlFutbol; //=> 71


//Ahora con el uso de decimales en JS, tiene una particularidad

var precioVino = 200.3; //=> precio de la botella de vino
var total = precioVino * 3; //=< comprando tres botellas de vino  es 600.9
//console.log(total);
//=> total = 600.9000000001;

//Para solcionar y dar mas precision podemos usar lo siguiente, ademas teniendo
//en cuenta que son dos decimales y ademas aplicar un redondeo

total = Math.round(precioVino * 100 * 3) / 100; //=> 600.9

//Para  imprimir con dos decimales
var totalStr = total.toFixed(2); //=> "600.90" en subcadena

//Ahora como lo regreso a numero, usando parseFloat
var total2 = parseFloat(totalStr);//=>600.90

//Usando la division

var pizza = 8;
var personas = 2;
var cantidadDePorcionesPorPersona = pizza / personas;//=> 4
