/*****
Promesas en Paralelo

Es porible ya que con el uso de callbacks no se puede,

Usamo un metodo de las promesas llamado all(), que recibe un arreglo de Promesas

Para hacer el llamado a múltiples promesas, nos apoyamos en un array de ids con
 el que luego construimos otro arreglo de Promesas, que pasaremos como parámetro
 a Promise.all( arregloDePromesas ), con las promesas podemos encadenar llamadas
 en paralelo, algo que no es posible usando callbacks.
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

var ids = [1,2,3,4,5,6,7];

// var promesas = ids.map(function(id){
//     return obtenerPersonaje(id);
// })

var promesas = ids.map( id => obtenerPersonaje(id));

  Promise
    .all(promesas)
    .then( personajes => console.log(personajes))
    .catch(onError)



//Ejemplo adicional, promesas en serie, respuestas en orden
  // obtenerPersonaje(1)
  //   .then(personaje1 =>{
  //       console.log(`El personaje 1 es ${personaje1.name}`)
  //       return obtenerPersonaje(2)
  //   })
  //   .then(personaje2 =>{
  //       console.log(`El personaje 2 es ${personaje2.name}`)
  //       return obtenerPersonaje(3)
  //   })
  //   .then(personaje3 =>{
  //       console.log(`El personaje 3 es ${personaje3.name}`)
  //       return obtenerPersonaje(4)
  //   })
  //   .then(personaje4 =>{
  //       console.log(`El personaje 4 es ${personaje4.name}`)
  //
  //   })
  //   .catch(onError)
