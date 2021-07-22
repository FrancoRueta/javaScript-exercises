let x = 10;
console.log(x.lenght); // <---- no anda

//Las primitivas, en js, no tienen metodos, solo los objetos.

//Forma menos recomendada de crear objetos. 
//Se le asignan valores y metodos luego de su creacion.
/*
let persona2 = new Object;
persona2.nombre = "eduardo"
persona2.correo = "eperez@mail.com"
*/

//EJEMPLO DE OBJETO.
let persona = {
    nombre: "Eduardo",
    apellido: "Perez",
    edad: 28,
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    },
    idioma: 'ar',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    }
}

/*
//Agregando una variable al objeto solo llamandola. (se ve peligroso.)
persona.telefono = "11223344";

//Demostrando que esto es peligroso, declaramos te(1)efono.
persona.te1efono = "11223344" 
//pareceria que accedemos a telefono para modificarlo, pero en realidad es un error de tipeo dificl de detectar.

//para borrar una variable:
delete persona.te1efono;


//accediendo a propiedades con corchete.
console.log(persona['nombre']);




//recorrer cada propiedad en el obj.

for(propiedad in persona){
    console.log(propiedad)
    console.log(persona[propiedad])
}




//la forma "correcta" de printear es concatenando. para asegurarnos de que se muestra bien en web browsers.
//con bucle for

for (propiedad in persona){
    console.log( persona[propiedad])
}

//con object values

console.log(Object.values(persona));
*/

//JSON.stringify (el mejor)

console.log(JSON.stringify(persona));

persona.lang = 'arg'

console.log(persona.idioma);


