/*****
Cómo funcionan las clases en JavaScript
Las clases son funciones cuya sintaxis tiene dos componentes:

expresiones
declaraciones
En esta clase veremos el uso de this. Dentro de una función, el valor de this depende de cómo es llamada ésta.

Reto: agrega el atributo altura y la función soyAlto.

*/

//Creamos un prototipo que es una funcionan

function Persona(nombre, apellido, altura){
  this.nombre = nombre; //=> asigna al objeto this un atributo llamado nombre
  this.apellido = apellido;//=>asigna al objeto this el atributo apellido
    this.altura = altura;
}

//Para agregar una funcion al prototipos
Persona.prototype.saludar = function(){
   console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function(){
   if (this.altura >1.8) {
     console.log(`Hola mido ${this.altura} y soy alto`);
   } else{
     console.log(`Hola mido ${this.altura} y soy bajo`);
   }
}

//Crea un nuebo objeto con el prototipo Persona
var sacha = new Persona('Sacha','Lifsyc',1.85);
var david = new Persona('David','Sanchez',1.59);
//console.log(sacha)

sacha.saludar();
david.saludar();
