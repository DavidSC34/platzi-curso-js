/******
En esta ocasion vamos a hacer que los callbacks  se ejecuten en el orden que decimos
y  llegamos un problemma llamado callback hell !!!!
.
****/


const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`;
const opts = {crossDomain:true};
//Usamos get de jQuery


function obtenerPersonaje(id, callback){
   const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
   $.get(url,opts,function(persona){
     console.log(`Hola yo soy ${persona.name}`);
      //llamada al callback
      if (callback) {
        callback();
      }
   });
}

//Se ejecutaran en este orden?
//Si ponemos la funcino callback asi:
//obtenerPersonaje(1, obtenerPersonaje(2));//=> lo que pasa es que se ejecuta primero obtenerPersonaje(2)


//Entonces por eso debe ir una referencia o declaracion a una funcion
obtenerPersonaje(1, function(){
      obtenerPersonaje(2, function (){
        obtenerPersonaje(3);
      });
});
