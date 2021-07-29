

const miFuncion = function(){
    console.log("Estoy aca con el espiritu")
}

const miFuncionFlecha = (a,b,c) => console.log("Hola juancarloooo" + a + b + c )

miFuncion();
miFuncionFlecha(" asd"," qwe"," zxc");


const saludar = () => {return "Haaaa"+6;}

console.log(saludar());


const regresaObjeto = () => ({nombre: 'Juan',apellido: 'Perez'});


console.log(regresaObjeto())


const funcionConParametros = (mensaje) => console.log(mensaje);

funcionConParametros("hola trola")