export class Cliente {
    idCliente:string;
    dni:number;
    nombre:string;
    apellido:string;
    penalizado:boolean;

    constructor(idCliente:string,dni:number, nombre:string, apellido:string, penalizado:boolean){
        this.idCliente=idCliente;
        this.dni=dni;
        this.nombre=nombre;
        this.apellido=apellido;
        this.penalizado=penalizado;
    }
}
