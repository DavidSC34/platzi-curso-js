x = 4;
y= '4';

//Las compraciones con == funciones aqui por que hace  que el 4 en numero
//pase a string  y de true en la comparacion "Type Coertion"

x == y //=> true

//Con el triple igual === dara false, por que debe cumplir: mismo tipo y valore
x === y //=> false

/*****/

//ahora bien que pasa con los objetos
var sacha = {
  nombre : 'Sacha'
}

var otraPersona ={
  nombre : 'Sacha'
}

//Que pasa si hacemos comparacion con ==?

sacha == otraPersona; //=> false, por que son objetos distintos en espacio de memoria distintos

otraPersona = sacha;
sacha == otraPersona; //=> true, por que apuntan al mismo objeto

//Si hacemos otraPersona.nombre ='Pepe' tambien el objeto 'sacha' se modifica
otraPersona.nombre ='Pepe';
console.log(otraPersona);
console.log(sacha);
