// isNan nos valida que el numero no sea NaN (not available number.)



let minumero = "18x";

let edad = Number(minumero);
let edadValida = 18;

console.log(edad);
console.log(typeof edad);

console.log(edadValida);
console.log(typeof edadValida);

console.log(isNaN(edad));
console.log(isNaN(edadValida));


let x = 5,y = 10,z = ++x +y--;
console.log(z); // == 16 ->


let numero = 3

switch(numero){
    case 1:
        return "numero uno";
        break;
    case 2:
        return "numero dos";
        break;
    //Y asi...
    default:
        return "default es el else del if."
}


//DO WHILE
let contador = 0;
do{
    console.log(contador);
    contador++;
}while(contador <10)

console.log("Fin ciclo.");





