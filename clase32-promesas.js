/*****
Promesas

Usar una promesa en lugar de un callback

***/



const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`;
const opts = {crossDomain:true};
//Usamos get de jQuery


function obtenerPersonaje(id){

    return new Promise(( resolve, reject)=>{
       const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;

       $
       //La funcion resolve no se va a llavar hasta que el get este resuelto
       .get(url,opts,function( data){
           resolve(data);
       })
       .fail( () => reject(id) )

    })
}

//funcion para mandar el error
function onError(id){
  console.log(`Sucedio un error al obtener el personaje ${id} `);
}


obtenerPersonaje(1)
  .then(function(personaje){
      console.log(`El personaje 1 es ${personaje.name}`)
  })
  .catch(onError)

//Ejemplo adicional
  obtenerPersonaje(2)
    .then(function(personaje){
        console.log(`El personaje 1 es ${personaje.name}`)
    })
    .catch(onError)
