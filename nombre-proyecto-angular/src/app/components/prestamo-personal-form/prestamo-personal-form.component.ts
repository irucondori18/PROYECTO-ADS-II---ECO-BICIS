import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bicicletas } from 'src/app/models/bicicletas';

@Component({
  selector: 'app-prestamo-personal-form',
  templateUrl: './prestamo-personal-form.component.html',
  styleUrls: ['./prestamo-personal-form.component.css']
})
export class PrestamoPersonalFormComponent implements OnInit {

  cliente={
    "nombre":"Alvarito",
    "apellido":"Avilacraft",
    "dni": "833123"
  }

 
  bicicleta: Bicicletas;
  clienteingresado:boolean=false;
  comprobarbici:boolean=false;
  cmonto:boolean=false;
  constructor(private router:Router) { 
  }

  ngOnInit(): void {
  }

  gestionarCliente(){
    this.clienteingresado=true;
    this.router.navigate(['cliente']);
  }

  comprobarBicicleta(){
    this.bicicleta=new Bicicletas();
    this.comprobarbici=true;
    this.bicicleta.codigo="2131312";  
    this.bicicleta.categoria="Menor";
  }

  calcularMonto(){
    this.cmonto=true;
  }
}
