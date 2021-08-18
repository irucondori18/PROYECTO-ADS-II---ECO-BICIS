import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { BicicletaComponent } from './components/bicicleta/bicicleta.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrestamoComponent } from './components/prestamo/prestamo.component';
import { BicicletaFormComponent } from './components/bicicleta-form/bicicleta-form.component';
import { FormsModule } from '@angular/forms';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { PrestamoPersonalFormComponent } from './components/prestamo-personal-form/prestamo-personal-form.component';
import { PrestamoReservaFormComponent } from './components/prestamo-reserva-form/prestamo-reserva-form.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { NgxDataTableModule } from 'angular-9-datatable';
import { ControlHoras } from './directivas/validacion.directive';

@NgModule({
  declarations: [
    AppComponent,
    ReservaComponent,
    BicicletaComponent,
    HomeComponent,
    RegistroComponent,
    HeaderComponent,
    FooterComponent,
    PrestamoComponent,
    BicicletaFormComponent,
    UsuariosComponent,
    PrestamoPersonalFormComponent,
    PrestamoReservaFormComponent,
    ClienteComponent,
    ClienteFormComponent,
    ControlHoras
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxDataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
