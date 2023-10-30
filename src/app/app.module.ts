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

const appRoutes: Routes = 
[
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'Inicio'
  },
  {
    path: 'Inicio',
    component:CatauniversalComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CatauniversalComponent
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
