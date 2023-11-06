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
import { ProductoComponent } from './producto/producto.component';
import { CatalogouniversalComponent } from './catalogouniversal/catalogouniversal.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { AtributomultivariadoComponent } from './atributomultivariado/atributomultivariado.component';
import { InventarioComponent } from './inventario/inventario.component';
import { BodegaComponent } from './bodega/bodega.component';


@NgModule({
  declarations: [
    AppComponent,
    CatauniversalComponent,
    PrincipalComponent,
    ProductoComponent,
    CatalogouniversalComponent,
    ProveedorComponent,
    AtributomultivariadoComponent,
    InventarioComponent,
    BodegaComponent
  ],
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule  // <- Agregar la clase    
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
