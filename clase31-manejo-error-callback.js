/*****
Manejo de errores con callbacks
Para solucionar el problema de quedarnos sin conexión, u otro error similar,
en medio de una sucesión de callbacks utilizamos el método fail().


en Chomre ir a  consola->Network
deshabiliar el chekcbox cache y luego cuando corrar el js activar offline para
simular que se fue el internet

***/



const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`;
const opts = {crossDomain:true};
//Usamos get de jQuery


function obtenerPersonaje(id, callback){
   const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
//Si ocurre algun error encadenamos el metodo fail

   $
   .get(url,opts,callback)
   .fail(()=>{
         console.log(`Hubo un error al obtener el personae cuyo id es : ${id}`);
   });
}

//Se ejecutaran en este orden?
//Si ponemos la funcino callback asi:
//obtenerPersonaje(1, obtenerPersonaje(2));//=> lo que pasa es que se ejecuta primero obtenerPersonaje(2)


//Entonces por eso debe ir una referencia o declaracion a una funcion
obtenerPersonaje(1, function(persona){
        console.log(`Hola yo soy ${persona.name}`);
          obtenerPersonaje(2,function(persona){
              console.log(`Hola yo soy ${persona.name}`);
              obtenerPersonaje(3,function(persona){
                    console.log(`Hola yo soy ${persona.name}`);
              });
          });
});
