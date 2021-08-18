import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reserva } from 'src/app/models/reserva';
import { ReservaService } from 'src/app/services/reserva.service';
import * as moment from 'moment';
import { Time } from '@angular/common';
import { Cliente } from 'src/app/models/cliente';
import { Bicicleta } from 'src/app/models/bicicleta';
import { Pago } from 'src/app/models/pago';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  clienteAgregado=false;
  bicicletaAgregada=false;
  pagoRealizado=false;
  ingresados=false;
  ingresados2=false;
  clientes:Array<Cliente> = new Array<Cliente>();
  bicicletas:Array<Bicicleta> = new Array<Bicicleta>();
  pagos:Array<Pago> = new Array<Pago>();
  reserva: Reserva = new Reserva();
  horaAux: string;
  fechaHoy: Date = new Date();
  bicicletaElegida:string;
  posible=true;
  horasprestamoauxiliar:number;

  cliente:Cliente;
  bicicleta:Bicicleta;
  pago:Pago;

  constructor(private router: Router, private reservaService: ReservaService) {
  }

  ngOnInit(): void {
    this.crearObjetos();
  }

  gestionarCliente() {
    this.router.navigate(['cliente']);
  }

  crearObjetos(){

    var cliente1 = new Cliente("134", 23674657,"Juan", "Flores", false);
    var cliente2 = new Cliente("145", 34567454,"Teresa", "Juarez", false);
    var cliente3 = new Cliente("167", 27897888,"Ramiro", "Torres", false);

    this.clientes = [cliente1, cliente2, cliente3];

    var bicicleta1 = new Bicicleta("12", "2345534212", "adulto");
    var bicicleta2 = new Bicicleta("25", "8464736291", "adulto");
    var bicicleta3 = new Bicicleta("65", "4352729107", "niño");

    this.bicicletas = [bicicleta1, bicicleta2, bicicleta3];

    var pago1 = new Pago("4554", 0 ,"846375439282");
    var pago2 = new Pago("7463", 0 ,"213621874823");
    var pago3 = new Pago("9473", 0 ,"957348543343");

    this.pagos = [pago1, pago2, pago3];

  }

  agregarCliente(){
    for (var n = 0; n < this.clientes.length; n++) {
      var aleatorio = Math.floor(Math.random()*(this.clientes.length));
      this.cliente=this.clientes[aleatorio];
      this.clienteAgregado=true;
      this.controlarIngresados();

    }
  }

  consultarBicicleta(){
    for(let i=0; i<this.bicicletas.length;i++){
      if(this.bicicletas[i].categoria==this.bicicletaElegida){
        this.bicicleta=this.bicicletas[i];
        this.bicicletaAgregada=true;
        this.controlarIngresados();

      }
    }
  }

  realizarPago(){
    for (var n = 0; n < this.pagos.length; n++) {
      var aleatorio = Math.floor(Math.random()*(this.pagos.length));
      this.pago=this.pagos[aleatorio];
      this.pagoRealizado=true;
      this.controlarIngresados();
    }
  }

  controlarIngresados(){
    if(this.pagoRealizado==true && this.bicicletaAgregada==true && this.clienteAgregado==true){
      this.ingresados=true;
    }
  }

  comprobarReserva(form: NgForm) {
    this.reserva.horasdeprestamo=this.horasprestamoauxiliar;
    this.posible=true;
    //manejo de fechas y hora de inicio y fin
    var fecha:string;
    var mes:number = this.fechaHoy.getUTCMonth()+1;
    var dia:number= this.fechaHoy.getDate();
    var mesDef:string;
    var diaDef:string;
    if(mes<10){
      mesDef="0"+mes;
    }
    else{
      mesDef=mes.toString();
    }
    if(dia<10){
      diaDef="0"+dia;
    }
    else{
      diaDef=dia.toString();
    }
    fecha = this.fechaHoy.getUTCFullYear() + "-" + mesDef + "-" + diaDef;
    var fechahora = new Date(fecha+ ':' + this.horaAux+'Z').toUTCString().toString();
    // var fechahora = new Date('2011-04-11:'+ this.horaAux+'Z').toUTCString().toString();
    var fechaHoraDef = new Date(fechahora);
    fechaHoraDef.setHours(fechaHoraDef.getHours() + 3);
    var fechaHora2 :Date = new Date(fechaHoraDef);
    fechaHora2.setHours(fechaHora2.getHours() + this.reserva.horasdeprestamo);


    //calculo del monto
    var monto:number;
    monto=this.reserva.horasdeprestamo * 100;
    this.reserva.monto = monto;

    this.reserva.idBicicleta = this.bicicleta.idBicicleta;
    this.reserva.idCliente = this.cliente.idCliente;
    this.reserva.codigoPago = this.pago.codigoPago;

    this.reserva.fechahorainicio=fechaHoraDef.toString();
    this.reserva.fechahorafin=fechaHora2.toString();

    
    var reservas = new Array<Reserva>();
    this.reservaService.getReservas().subscribe(
      result => {
        Object.assign(reservas, result);
        //this.varraydeReserva.push(vReserva);
        reservas.forEach(element => {
         let fechaHoraI = element.fechahorainicio;
         let fechaHoraIdef:Date = new Date(fechaHoraI);
         let fechaHoraF = element.fechahorafin;
         let fechaHoraFdef: Date = new Date(fechaHoraF);
         let fechaHoraIing:Date = new Date(this.reserva.fechahorainicio);
         let fechaHoraFing:Date = new Date(this.reserva.fechahorafin);

         if(((fechaHoraIing>=fechaHoraIdef && fechaHoraIing<=fechaHoraFdef) || (fechaHoraFing>=fechaHoraIdef && fechaHoraFing<=fechaHoraFdef) || (fechaHoraIing>=fechaHoraIdef && fechaHoraFing<=fechaHoraFdef)) && element.idBicicleta==this.reserva.idBicicleta){
        
          this.posible=false;
        }
        });
        this.agregarReserva();
        if(this.posible==true){
          form.reset();
          this.clienteAgregado=false;
          this.bicicletaAgregada=false;
          this.pagoRealizado=false;
        }
        
      }
    )

    



  }


  agregarReserva(){
    if(this.posible==true){
      this.reservaService.addReserva(this.reserva).subscribe(
        result=>{
          if(result.status=="1"){
            alert("Reserva guardada correctamente");
          }
        },
        error=>{
          console.log(error);
        }
      )
    }
    else{
      console.log("No es posible");
    }

  }



}
