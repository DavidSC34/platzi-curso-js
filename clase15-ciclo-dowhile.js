/***
Uso de ciclo Do-While,
Caracteristicas : se ejecuta el contenido del ciclo una vez y luego se
checa la condicion

*/

var contador = 0;

const llueve = ()=> Math.random() < 0.25;

do{
  contador++;
} while(!llueve())


console.log(   `Fui a ver si llovia ${contador} ${contador ===1 ? 'vez' : 'veces'} ` );
