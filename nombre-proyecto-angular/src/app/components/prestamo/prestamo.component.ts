import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.component.html',
  styleUrls: ['./prestamo.component.css']
})
export class PrestamoComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  prestamoPersonal(){
    this.route.navigate(['prestamopersonal-form'])
  }

  prestamoReserva(){
    this.route.navigate(['prestamoreserva-form'])
  }
}
