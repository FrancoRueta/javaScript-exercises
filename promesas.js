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



let promesa = new Promise((resolved) => {
    console.log("Inicio");
    setTimeout(() => resolved("Saludo asincrono",10000))
    console.log("Fin");
})


promesa.then(valor => console.log(valor));

















