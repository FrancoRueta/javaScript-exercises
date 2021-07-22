/*let a = 7,b = 6,c = 26,d = 47;


//compara sin importar los tipos, si es necesario los convierte
let z = a == c;
console.log(z);


//compara y chequea los tipos.
z = a === c;
console.log(z);*/

//tambien funciona con el != y !==.

//EJERCICIO DE NUMEROS PARES:
/*
function esNumeroPar(num){
    if(num % 2 == 0){
        return "El numero: "+num+" es par.";
    }
    return "El numero: "+num+" es impar.";
}


console.log(esNumeroPar(a));
console.log(esNumeroPar(b));
console.log(esNumeroPar(c));
console.log(esNumeroPar(d));
*/


//EJERCICIO ES MAYOR:
/*
const edad = 18;a = 16,b = 21,c = 13,d = 27;
function esMayor(años){
    if(años >= edad){ return "Es mayor de edad, dado que tiene "+años; }
    return "No es mayor de edad, dado que tiene "+años;
}
console.log(esMayor(a));
console.log(esMayor(b));
console.log(esMayor(c));
console.log(esMayor(d));
*/


 
//OPERADOR "TERNARIO"
/*
let resultado = (6>5) ? "Verdadero" : "Falso";

console.log(resultado)
*/


//STRING A NUMERO
let miNumero = "18";

console.log(typeof miNumero);

let edad = Number(miNumero)
console.log(typeof edad);

let puedeVotar = (edad >= 18) ? "Puede votar" : "No puede votar";
console.log(puedeVotar);