/**********
operaciones con strings

*/


var nombre = 'Sacha', apellido = 'Lifszyc';

var nombreEnMayusculas = nombre.toUpperCase();
var apellidoEnMinusculas = apellido.toLowerCase();

console.log('Nombre en mayusculas: ' + nombreEnMayusculas);
console.log('Apellido en minusculas: '+ apellidoEnMinusculas);

//Lo siguiente es para traer o extraer un caracter de un string, en este caso
//la primera letra

var primeraLetraDelNombre = nombre.charAt(0);
 console.log('La primera letra del nombre es: ' + primeraLetraDelNombre);

 //Para obtener el numero de caracteres de un string usamos la propiedad
 // string.length

 var cantidadDeLetrasDelNombre = nombre.length;
 console.log('Cantidad de letras del nombre: ',cantidadDeLetrasDelNombre);

//Usando una caracterisitca de ES6 , template string para strings
var nombreCompleto =  `${nombre} ${apellido.toUpperCase()} `;

//Para extraer una subcadena, diciendoi la posicion(caracter inicial)  y
//el numero de letras que queremos extraer usamos : substr

var str = nombre.substr(1,2) //=> comienza en  'a' y extra 2 letras de 'a' hasta 'c'
console.log('La cadena extraida es: ',str);

//El reto: obtener la ultima letra del nombre de una persona

var nombreDePersona = 'David';

var ultimaLetra = nombreDePersona.charAt(nombreDePersona.length -1);
console.log('La ultima letra del nombre es: ',ultimaLetra);
