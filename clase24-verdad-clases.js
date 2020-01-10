/*****
La verdad oculta sobre las clases en JavaScript
Los objetos en JavaScript son “contenedores” dinámicos de propiedades.
Estos objetos poseen un enlace a un objeto prototipo.
Cuando intentamos acceder a la propiedad de un objeto, la propiedad no sólo se
busca en el propio objeto sino también en el prototipo del objeto,
en el prototipo del prototipo, y así sucesivamente hasta que se encuentre una
propiedad que coincida con el nombre o se alcance el final de la cadena de
prototipos.



*/

function heredaDe( prototipoHijo, prototipoPadre){
  var fn = function () {};//=> no hace orientada
  fn.prototype = prototipoPadre.prototype;
  prototipoHijo.prototype = new fn;
  prototipoHijo.prototype.contructor = prototipoHijo;


}


//Creamos un prototipo que es una funcionan

function Persona(nombre, apellido, altura){
  this.nombre = nombre; //=> asigna al objeto this un atributo llamado nombre
  this.apellido = apellido;//=>asigna al objeto this el atributo apellido
    this.altura = altura;
}

//Para agregar una funcion al prototipos
//Es muy importante donde se colocan las funciones del prototipo, osea que las pongamos
//todas juntas para que el objeto tengas todas las funciones
Persona.prototype.saludar = function() {
   console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}
//ACa se modifica el prototipo recien
Persona.prototype.soyAlto = function() {
  
  return this.altura > 1.8; //=>this.altura es undefined
}



//Creamos otro prototipo "clase"  Desarrollador que herede de Persona
function Desarrollador(nombre, apellido){
  this.nombre = nombre;
  this.apellido = apellido;

}

heredaDe( Desarrollador, Persona); //=> antes de pisar metodos

//Vamos a crearle su propia forma de saludar al Desarrollador
Desarrollador.prototype.saludar = function(){
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
}
 //Para aplicar la herencia hay que crear una funcion propia

//Crea un nuebo objeto con el prototipo Persona
// var sacha = new Persona('Sacha','Lifsyc',1.85);
// var david = new Persona('David','Sanchez',1.59);
//console.log(sacha)
