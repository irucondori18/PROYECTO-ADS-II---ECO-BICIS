export class Reserva {
    _id: string;
    idCliente: string;
    idBicicleta: string;
    horasdeprestamo: number;
    fechahorainicio: string;
    fechahorafin: string;
    monto: number;
    codigoPago:string;

    /*constructor(_id?: string,cliente?: string,bicicleta?: string,horasdeprestamo?: number,fechahorainicio?: string,fechahorafin?: string,monto?: number,codigopago?: string){
        this._id=_id;
        this.idCliente=cliente;
        this.idBicicleta=bicicleta;
        this.horasdeprestamo=horasdeprestamo;
        this.fechahorainicio=fechahorainicio;
        this.fechahorafin=fechahorafin;
        this.monto=monto;
        this.codigoPago=codigopago;
    }*/
    constructor(){
        
    }   
}
