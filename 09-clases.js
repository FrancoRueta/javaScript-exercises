class Persona{

    static contadorPersona = 0; //Asociado a la clase.

    static get CINCO_ESTATICO(){ return "5";}

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        this._id = ++Persona.contadorPersona;
    }
    get nombre(){
        return this._nombre.toUpperCase();
    }

    set nombre(nombreNuevo){
        this._nombre = nombreNuevo;
    }

    get apellido(){
        return this._apellido.toUpperCase();
    }

    set apellido(apellidoNuevo){
        this._apellido = apellidoNuevo;
    }

    get id(){
        return "ID: "+this._id;
    }

    _nombreCompleto(){
        return this._nombre+' '+this._apellido+' '+this.id;
    }

    get nombreCompleto(){
        return this._nombreCompleto().toUpperCase();
    }

    toString(){
        return this.nombreCompleto;
    }

    static saludar(){
        console.log("Hola, soy "+this.nombre)
    }

    static saludar2(persona){
        console.log("Hola, soy "+persona.nombreCompleto);
    }
}


let tio = new Persona("Juan,","Perez");
console.log( tio );


let tia = new Persona("Juana","Perezia");
console.log(tia);

tio.nombre = "ricarditoPiolin";
console.log(tio.nombre);



class Empleado extends Persona{
    constructor(nombre,apellido,departamento){
        super(nombre,apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento.toUpperCase();
    }

    set departamento(departamentoNuevo){
        this._departamento = departamentoNuevo;
    }

    get nombreMasOficio(){
        return "Nombre: "+super.nombreCompleto+', '+"Departamento: "+this.departamento;
    }

    get nombreCompleto(){
        return this.nombreMasOficio;
    }
}



let francoProgramador = new Empleado("franco","rueta","programacion");
console.log(francoProgramador.nombreMasOficio);


console.log(tia.toString());
console.log(francoProgramador.toString());


//console.log(tia.saludar()); no se puede llamar un static desde el objeto, solo de la clase.

//Este anda... raro
Persona.saludar();

//Este anda mejor aunque no entiendo el uso
Persona.saludar2(tia);

Empleado.saludar2(francoProgramador);


console.log(Persona.contadorPersona);
console.log(Empleado.contadorPersona);

let ejemploEmp = new Empleado("Pepe","Pepe","Peperia");

console.log(Empleado.contadorPersona);
console.log(Persona.contadorPersona);
console.log(tia.email);