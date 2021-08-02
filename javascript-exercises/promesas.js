/* let miPromesa = new Promise((resolved, rejected) => {
    let expresion = true;
    if(expresion){
        resolved("Se resolvio papu")
    }
    else{
        rejected("No se resolvio u.u")
    }
});


miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
    );


miPromesa
.then(valor => console.log(valor))
.catch(error => console.log(error)) */

//SHIFT ALT A


/* 
let promesa = new Promise((resolved) => {
    console.log("Inicio");
    setTimeout(() => resolved("Saludo asincrono",10000))
    console.log("Fin");
})


promesa.then(valor => console.log(valor));

 */

//ASYNC: INDICA QUE UNA FUNCION REGRESA UNA PROMESA.

async function miFuncionConPromesa(){
    return 'saludos con promesa y async.';
};

//En resumen, facilita convertir una funcion a promesa.


//miFuncionConPromesa().then(valor => console.log(valor));



/* //async + await //Await espera el resultado de una promesa.
async function funcionConAwait(){
    let miPromesa = new Promise(resolve => {
        resolve("Promesa con await.")
    });

    console.log( await miPromesa );
}

funcionConAwait()
 */




//-----------------------------------------------------------------------------------|
//-----------------------------------------------------------------------------------|
//-----------------------------------------------------------------------------------|
//-------------------------------------------EJERCICIO CON ASYNC, AWAIT Y SETTIMEOUT-|
//-----------------------------------------------------------------------------------|



async function funcionCompleta(){
    let promise = new Promise(resolve => {
        setTimeout(()=>resolve('promesa completita'),3000);
    });
    console.log(await promise);
}


funcionCompleta();









