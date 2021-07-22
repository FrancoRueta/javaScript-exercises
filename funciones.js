/*

console.log(miFuncion(3,7));

function miFuncion(a,b){
    console.log(arguments.length)
    return a + b;
}
console.log(miFuncion(2,3));


//Funcion "self-invoking"
//No se pueden volver a utilizar, solo se manda a llamar una sola vez. util para inicios de programa, por ejemplo.

(function (a,b){
    console.log('Ejecutando: '+(a+b));
})(3,4);
*/

//Se pueden declarar funciones en variables, son funciones de tipo "expresion."
let sumar = function(a,b){return a+b};
console.log(sumar(1,2));




const sumarTipoFlecha = (a,b,c) => a+b-c;
console.log(sumarTipoFlecha(15,5,3))

