/*****
Modificando un prototipo
En esta clase veremos cómo se modifican las clases de herencias.
JavaScript funciona con una estructura orientada a objetos y cada objeto tiene
 una propiedad privada que mantiene un enlace a otro objeto llamado prototipo.

*/

//Creamos un prototipo que es una funcionan

function Persona(nombre, apellido, altura){
  this.nombre = nombre; //=> asigna al objeto this un atributo llamado nombre
  this.apellido = apellido;//=>asigna al objeto this el atributo apellido
    this.altura = altura;
}

//Para agregar una funcion al prototipos
//Es muy importante donde se colocan las funciones del prototipo, osea que las pongamos
//todas juntas para que el objeto tengas todas las funciones
Persona.prototype.saludar = function(){
   console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}
//ACa se modifica el prototipo recien
Persona.prototype.soyAlto = function(){
  return this.altura > 1.8;
}

//Crea un nuebo objeto con el prototipo Persona
var sacha = new Persona('Sacha','Lifsyc',1.85);
var david = new Persona('David','Sanchez',1.59);
//console.log(sacha)

sacha.soyAlto();//=>true
david.soyAlto();//=>false
