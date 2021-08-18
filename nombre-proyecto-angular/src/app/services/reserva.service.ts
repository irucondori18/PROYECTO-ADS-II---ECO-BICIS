import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from '../models/reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  urlbase:string="http://localhost:3000/api/";

  constructor(private http: HttpClient) { }

  getReservas():Observable<any>{
    let option = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    }
    return this.http.get(this.urlbase+"reserva", option);    
  }

  getReservaPorID(id: string):Observable<any>{
    let option = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    }
    return this.http.get(this.urlbase+"reserva/"+id, option);
  }

  addReserva(reserva:Reserva):Observable<any>{
    let option = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      params: new HttpParams({

      })
    }
    let body = JSON.stringify(reserva);
    console.log(body);
    return this.http.post(this.urlbase+"reserva", body, option);
  }
}
