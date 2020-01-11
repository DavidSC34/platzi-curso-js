/*****
Funciones como parámetros
En JavaScript, los parámetros de funciones son por defecto undefined.
De todos modos, en algunas situaciones puede ser útil colocar un valor por
defecto diferente que lo evalúe como verdadero.



*/

//Creamos un prototipo que es una funcionan

class Persona{

      constructor(nombre, apellido, altura){
          this.nombre = nombre;
          this.apellido = apellido;
          this.altura = altura;

      }

      saludar(fn){
          var {nombre, apellido} = this;
        console.log(`Hola me llamo ${nombre} ${apellido}`);
          //Es opcional si no la mandan o no por eso el if
        if (fn) {
            fn(nombre,apellido);//=>podemos mandar  esDEv o no(por eso lo omitimos)
        }
      }

      soyAlto(){
          return this.altura > 1.8;
      }

}

class  Desarrollador extends Persona{

        constructor(nombre, apellido, altura){
          super(nombre, apellido, altura);
          //ya se puede usar this dentro del constructor, pero por el momento nada mas
        }

        saludar(fn){
          //tambien podemos deestructurar el nombre y apellido
          //var nombre = this.nombre;
          //var apellido 0 this.apellido;
          var {nombre, apellido} = this;
            console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`);
            if (fn) {
                fn(nombre,apellido,true);//=>podemos mandar  esDEv o no(por eso lo omitimos)
            }
        }

}

//Funcion que se pasara como parametro
function respoderSaludo(nombre, apellido, esDev){
  console.log(`Bune dia ${nombre} ${apellido}`);
  if (esDev) {
    console.log(`Ah mira, no sabia que eras desarrollador/a`);
  }

}

//Crear objetos para probarlo
var sacha = new Persona('Sacha','Lifsyc',1.85);
var david = new Desarrollador('David','Sanchez',1.59);

sacha.saludar();
david.saludar(respoderSaludo);
