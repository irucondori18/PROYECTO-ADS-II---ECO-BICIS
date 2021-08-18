export class Usuario {
        _id:string;
        contrasenia:string;
        nombreusuario:string;
        tipodeusuario:string;
        constructor(_id?: string,contrasenia?: string,nombredeusuario?: string,tipodeusuario?: string){
            this._id=_id;
            this.contrasenia=contrasenia;
            this.nombreusuario=nombredeusuario;
            this.tipodeusuario=tipodeusuario;
        }

}
