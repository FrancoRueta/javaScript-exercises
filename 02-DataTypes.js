//String
var nombre = "Carlitos";
console.log(nombre);
console.log(typeof nombre)
//redefinimos a carlitos
nombre = 6
console.log(nombre);
console.log(typeof nombre)

//Int
var numerito = 1000;
console.log(numerito);


//Object
var objeto = {
    nombre: "ricardo",
    edad: 17,
    telefono: 11561356131
};
console.log(objeto);
console.log(typeof objeto)

//Variables como python
//Tambien se usan let y const para variables.



//Booleans
var esPiolita = true;
console.log(typeof esPiolita);
console.log(esPiolita);
esPiolita = false;
console.log(esPiolita);


//Las funciones son TIPOS DE DATOS

//Functions
function miFuncion(){

}
console.log(miFuncion);
console.log(typeof miFuncion);


//Symbol: :?

var simbolo = Symbol("Simbolito");
console.log(simbolo);
console.log(typeof simbolo)


//Las clases son funciones
class persona{
     constructor(nombre, apellido){
         this.nombre = nombre;
         this.apellido = apellido;
     }
}
console.log(persona);
console.log(typeof persona);


//Undefined

var x;
console.log(x);
console.log(typeof x);
//undefined es un valor, y es asignable
x = undefined
console.log(x)


//null es similar a undefined en js.
var y = null;
console.log(y);
console.log(typeof y); //aca la diferencia, retorna ->



//Los arrays son objects, almacenan varios tipos de datos a lo python.
var autos = ["BMW","AUDI","VOLVO"];
console.log(autos);
console.log(typeof autos); //es un -->


var nombre = "Juan"
var apellido = "Perez";

var nombreApellido = nombre +' '+ apellido;
console.log(nombreApellido);


var x = nombre+2+(20+5);
console.log(x);


let nombre2;
nombre2 = "Juan";
console.log(nombre);


const apellido2 = "Pereira";
console.log(apellido2);
apellido2 = "asdasd";
