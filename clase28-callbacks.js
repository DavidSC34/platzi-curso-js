/******
Callbacks
En esta clase aprenderemos que son los callbacks y usaremos una librería
externa que se llama jQuery.

Un callback es una función que se pasa a otra función como un argumento.
 Esta función se invoca, después, dentro de la función externa para completar
 alguna acción.


En chrome verificamos si cargo jquery haciendio

Console-> $ y luego enter
****/


const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`;
const opts = {crossDomain:true};
//Usamos get de jQuery
const onPeopleResponse = function(luke){
  console.log(`Hola yo soy ${luke.name}`);

};
//El tercer parametro es la funcion callbakc que puede oi no llamrse en algun futuro con
//los datos que regresa
// $.get(lukeUrl,opts,function(){  //console.log(arguments);//=> la uysamos si no sabemos que argumentos nos llegan de func callback
// });


$.get(lukeUrl,opts,onPeopleResponse);

console.log('Me ejecutaron');
