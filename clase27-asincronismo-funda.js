/***
Cómo funciona el tiempo en JavaScript
En principio, cualquier tarea que se haya delegado al navegador a través de un
callback, deberá esperar hasta que todas las instrucciones del programa principal
se hayan ejecutado. Por esta razón el tiempo de espera definido en funciones como
setTimeout, no garantizan que el callback se ejecute en ese tiempo exactamente,
sino en cualquier momento a partir de allí, sólo cuando la cola de tareas
se haya vaciado.



****/
console.log('a')
//(setTimeout(()=>console.log('b'),2000)
//Que pasa ahora si colocamos esto
setTimeout(()=>console.log('b'),0)
console.log('c')


//Ejemplo 2

setTimeout(()=>console.log('d'),2000)

// for (var i = 0; i < 10000000000000; i++) {
//
// }
