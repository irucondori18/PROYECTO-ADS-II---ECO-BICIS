export class Pago {
    codigoPago:string;
    monto:number;
    cvuCbu:string;

    constructor(codigoPago:string, monto:number, cvuCbu:string){
        this.codigoPago=codigoPago;
        this.monto=monto;
        this.cvuCbu=cvuCbu;
    }
}

