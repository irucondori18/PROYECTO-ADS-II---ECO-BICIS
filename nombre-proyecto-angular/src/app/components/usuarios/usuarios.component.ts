import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  arrayUsuarios: Array<Usuario>;
  usuario: Usuario;

  constructor(private route:Router) { 
    this.usuario=new Usuario();
    this.arrayUsuarios=new Array<Usuario>();
    this.cargarUsuarios();
  }

  ngOnInit(): void {
    this.cargarUsuarios();

  }

  
  cargarUsuarios(){
    this.arrayUsuarios=new Array<Usuario>();
    for(var i=0;i<5;i++){
      this.usuario=new Usuario("","hola"+i,"nose"+i,"admin");
      this.arrayUsuarios.push(this.usuario);
    }
    for(var i=5;i<10;i++){
      this.usuario=new Usuario("","hola"+i,"nose"+i,"usuarioweb");
      this.arrayUsuarios.push(this.usuario);
    }
    for(var i=10;i<15;i++){
      
      this.usuario=new Usuario("","hola"+i,"nose"+i,"empleado");
      
      this.arrayUsuarios.push(this.usuario);
    }
    this.usuario=new Usuario();
  }

//  agregarUsuario(){
//    this.route.navigate(["usuario-form/",0])
//  }
//
//  modificarUsuario(){
//    this.route.navigate(["usuario-form/", 1])
//  }

}
