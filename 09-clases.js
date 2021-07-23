


class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
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

    _nombreCompleto(){
        return this._nombre+' '+this._apellido;
    }

    get nombreCompleto(){
        return this._nombreCompleto().toUpperCase();
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
}



let francoProgramador = new Empleado("franco","rueta","programacion");
console.log(francoProgramador.nombreCompleto)