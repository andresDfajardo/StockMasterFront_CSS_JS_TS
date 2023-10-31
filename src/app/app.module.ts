import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
// Librería para poder consumir el servicio
import { HttpClientModule, } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ServicioService } from './servicio.service';
import { AppComponent } from './appcomponent/app.component';
import { CatauniversalComponent } from './catauniversal/catauniversal.component';
import { PrincipalComponent } from './principal/principal.component';

const appRoutes: Routes = 
[
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'Inicio'
  },
  {
    path: 'Inicio',
    component:PrincipalComponent,
  },
  {
    path: 'Catalogo',
    component:CatauniversalComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CatauniversalComponent,
    PrincipalComponent
  ],
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes), // se agregan estos 
    HttpClientModule  // <- Agregar la clase    
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
