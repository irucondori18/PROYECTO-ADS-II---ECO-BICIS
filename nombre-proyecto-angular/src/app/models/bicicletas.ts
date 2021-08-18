export class Bicicletas {
        _id: string;
        codigo: string;
        categoria: string;
        
        constructor(_id?: string,codigo?: string,categoria?: string){
            this._id=_id;
            this.codigo=codigo;
            this.categoria=categoria;        
    }   
}
