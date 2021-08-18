import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario: Usuario;
  arraydeUsuarios: Array<Usuario>;
  tipodeusuario: string;
  ingresado: string="noentro";
  nombredelusuario:string;
  constructor(private router:Router) { 
    this.usuario= new Usuario();
    this.cargarUsuarios();
  }

  ngOnInit(): void { 
  }

  cargarUsuarios(){
    this.arraydeUsuarios=new Array<Usuario>();
    for(var i=0;i<5;i++){
      this.usuario=new Usuario("","hola"+i,"nose"+i,"admin");
      this.arraydeUsuarios.push(this.usuario);
      if(i==1){
        let vUsuario = new Usuario("","juan11","juan11","admin");
        this.arraydeUsuarios.push(vUsuario);
      }
    }
    for(var i=5;i<10;i++){
      this.usuario=new Usuario("","hola"+i,"nose"+i,"usuarioweb");
      this.arraydeUsuarios.push(this.usuario);
      if(i==8){
        let vUsuario = new Usuario("","carlos22","carlos22","usuarioweb");
        this.arraydeUsuarios.push(vUsuario);
      }
    }
    for(var i=10;i<15;i++){
      
      this.usuario=new Usuario("","hola"+i,"nose"+i,"empleado");
      
      this.arraydeUsuarios.push(this.usuario);
      if(i==12){
        let vUsuario = new Usuario("","marta33","marta33","empleado");
        this.arraydeUsuarios.push(vUsuario);
      }
    }
    this.usuario=new Usuario();
  }

  comprobarTipoUsuario(){
    var bandera:boolean=true;
    for(var i=0;i<this.arraydeUsuarios.length && bandera==true;i++){
      if(this.arraydeUsuarios[i].nombreusuario==this.usuario.nombreusuario && this.arraydeUsuarios[i].contrasenia==this.usuario.contrasenia){
          this.tipodeusuario=this.arraydeUsuarios[i].tipodeusuario;
          this.nombredelusuario=this.arraydeUsuarios[i].nombreusuario;
          this.ingresado="sientro"
          this.router.navigate(['home']);
          bandera=false;
      }else{
      }
    }
    if(this.ingresado=="noentro"){
      alert("Ingrese un Usuario Valido")
    }
    this.usuario=new Usuario();
  }
  
  salir(){
    this.router.navigate(['home']);
    this.ingresado="noentro";
    this.usuario= new Usuario();
    this.tipodeusuario="";
  }

}
