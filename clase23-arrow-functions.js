/*****
El contexto de las funciones: quién es this
En esta clase explicamos por qué al introducir el arrow function salió un error.
El error del contexto de this en javascrip es uno de los errores más comunes.

Recuerda que dentro de la arrow function, this está haciendo referencia
al espacio global, a windows.



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
Persona.prototype.saludar = () => {
   console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}
//ACa se modifica el prototipo recien
Persona.prototype.soyAlto = () =>{
  debugger;
  return this.altura > 1.8; //=>this.altura es undefined
}

//Crea un nuebo objeto con el prototipo Persona
var sacha = new Persona('Sacha','Lifsyc',1.85);
var david = new Persona('David','Sanchez',1.59);
//console.log(sacha)

sacha.soyAlto();//=>true
david.soyAlto();//=>false
