import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bicicletas } from 'src/app/models/bicicletas';

@Component({
  selector: 'app-bicicleta',
  templateUrl: './bicicleta.component.html',
  styleUrls: ['./bicicleta.component.css']
})
export class BicicletaComponent implements OnInit {

  arraydeBicicletas: Array<Bicicletas>;
  bicicleta: Bicicletas;
  categoria: string="";

  constructor(private route:Router) { 
    this.bicicleta=new Bicicletas();
    this.arraydeBicicletas=new Array<Bicicletas>();
    this.cargarBicicletas();
  }

  ngOnInit(): void {
    this.cargarBicicletas();
  }

  cargarBicicletas(){
    this.arraydeBicicletas=new Array<Bicicletas>();
    for(var i=0;i<5;i++){
      this.bicicleta=new Bicicletas("312312","R10"+i,"Menor");
      this.arraydeBicicletas.push(this.bicicleta);
    }
    for(var i=5;i<10;i++){
      this.bicicleta=new Bicicletas("312312","R10"+i,"Mayor");
      this.arraydeBicicletas.push(this.bicicleta);
    }
    this.categoria="";
  }

  /*
  eliminarPasajes(ide: string){
    this.pasajeservice.deletePasajes(ide).subscribe(
      result=>{
        if(result.status=="1"){
          console.log("Se elimino bien");
          this.cargarPasajes();
        }else{
          console.log("Se elimino mal")
          this.cargarPasajes();
        }
      }
    )
  }
  
  buscarporCategoria(){
    this.ArraydePasajes=new Array<Pasaje>();
    this.pasajeservice.getPasajeCate(this.categoria).subscribe(
      result=>{
        result.forEach(element => {
          this.Pasajes=new Pasaje;
          Object.assign(this.Pasajes,element);
          this.ArraydePasajes.push(this.Pasajes);             
        });
        console.log(this.ArraydePasajes)  
      },
      error=>{
      }
    )
  }
  */
  agregarBicicleta(){
    this.route.navigate(["bicicleta-form/",0])
  }

  modificarBicicleta(){
    this.route.navigate(["bicicleta-form/", 1])
  }
}
