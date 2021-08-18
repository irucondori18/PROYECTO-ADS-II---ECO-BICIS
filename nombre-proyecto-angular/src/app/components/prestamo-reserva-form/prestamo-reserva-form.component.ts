import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reserva } from 'src/app/models/reserva';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-prestamo-reserva-form',
  templateUrl: './prestamo-reserva-form.component.html',
  styleUrls: ['./prestamo-reserva-form.component.css']
})
export class PrestamoReservaFormComponent implements OnInit {
  varraydeReserva: Array<Reserva>;
  reserva: Reserva;
  categoria: string = "";
  reservita: Reserva;
  constructor(private router: Router, private reservaService: ReservaService) {
    this.reserva = new Reserva();
    this.reservita = new Reserva();
    this.cargarReservas();
  }

  ngOnInit(): void {
  }

  gestionarCliente() {
    this.router.navigate(['cliente']);
  }

  cargarReservas() {
    this.varraydeReserva = new Array<Reserva>();
    this.reservaService.getReservas().subscribe(
      result => {
        let vReserva = new Reserva();
        Object.assign(this.varraydeReserva, result);
        //this.varraydeReserva.push(vReserva);
        //console.log(result);
      }
    )
    //console.log(this.varraydeReserva);
  }

  obtenerReserva(id: string){
    this.reservita = new Reserva();
    this.reservaService.getReservaPorID(id).subscribe(
      result => {
        console.log(result);
        Object.assign(this.reservita, result);
      },
      error => {
        console.log("ERROR");
      }
    )
  }
}
