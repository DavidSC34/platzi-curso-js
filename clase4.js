/******

Uso de las funciones

*/
//=>declaracion de variables en linea
var nombre = 'Sacha', edad = 28;

function imprimirEdad(n, e){
   console.log(`${n} tiene ${e} años`);
}


imprimirEdad(nombre, edad);
imprimirEdad('Vicky',28);
imprimirEdad('Eric',24);
imprimirEdad('Dario',27);

//Estos ejemplos muestran como Js es debilmente tipado, no le importa el tipo
//de datos ni el orden, dato que tenemos que tener en cuenta
// y por lo tanto nosotros somos responsables de su funcionamiento
imprimirEdad(25,'Carlos');//=> podemos hacerlo ya que JS no le importa el orden
imprimirEdad('Juan');//=> tambine podemos hacerlo
