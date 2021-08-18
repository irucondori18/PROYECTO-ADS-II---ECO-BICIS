import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BicicletaFormComponent } from './components/bicicleta-form/bicicleta-form.component';
import { BicicletaComponent } from './components/bicicleta/bicicleta.component';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { HomeComponent } from './components/home/home.component';
import { PrestamoPersonalFormComponent } from './components/prestamo-personal-form/prestamo-personal-form.component';
import { PrestamoReservaFormComponent } from './components/prestamo-reserva-form/prestamo-reserva-form.component';
import { PrestamoComponent } from './components/prestamo/prestamo.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const routes: Routes = [
  { path: 'reserva', component: ReservaComponent},
  { path: 'home', component: HomeComponent},
  { path: 'bicicleta', component: BicicletaComponent},
  { path: 'prestamo', component: PrestamoComponent},
  { path: 'cliente', component: ClienteComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'cliente-form', component: ClienteFormComponent},
  { path: 'bicicleta-form/:id', component: BicicletaFormComponent},
  { path: 'usuario', component: UsuariosComponent},
  { path: 'prestamopersonal-form', component: PrestamoPersonalFormComponent},
  { path: 'prestamoreserva-form', component: PrestamoReservaFormComponent},
  { path: '**', pathMatch:'full', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
