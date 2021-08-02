
//CALLBACK: Es el concepto de utilizar una function como argumento dentro de otra funcion.


function miFuncion1(funcion2){
    console.log("Funcion 1");
}

function miFuncion2(){
    console.log("Funcion 2");
}

//funcion callback
const imprimir = (mensaje) => console.log(mensaje);



const sumar = (op1,op2, funcionCallback) => {
    let res = op1 + op2;
    funcionCallback('Resultado: '+res);
}


sumar(5,3,imprimir);


//Llamadas asincronar con uso setTimeOut
function funcionCallback(){
    console.log("Saludo asincrono dsp de 3 sec.");
}

setTimeout(funcionCallback,3000);


const  x = () => {console.log("Hola juancarlooo")};

setTimeout(x,5000);


setTimeout(() => {console.log("holaFlecha")},4000)


//En resumen, settimeout ejecuta la funcion paasado un tiempo.
//Por otro lado, callback la ejecuta cada un intervalo.


let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
};


setInterval(reloj,1000000);