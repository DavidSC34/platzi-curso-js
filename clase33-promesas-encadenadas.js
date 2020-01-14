/*****
Promesas Encadenadas

A diferencia de los callbacks en el CallbackHell, que terminan estando anidados
unos dentro de otros, cuando se usan Promesas la ejecución de las llamadas no se
hacen de manera anidada sino de manera encadenada, al mismo nivel una debajo
de la otra, lo que hace que el código sea mucho más legible y mantenible.

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




//Ejemplo adicional
  obtenerPersonaje(1)
    .then(personaje1 =>{
        console.log(`El personaje 1 es ${personaje1.name}`)
        return obtenerPersonaje(2)
    })
    .then(personaje2 =>{
        console.log(`El personaje 2 es ${personaje2.name}`)
        return obtenerPersonaje(3)
    })
    .then(personaje3 =>{
        console.log(`El personaje 3 es ${personaje3.name}`)
        return obtenerPersonaje(4)
    })
    .then(personaje4 =>{
        console.log(`El personaje 4 es ${personaje4.name}`)

    })
    .catch(onError)
