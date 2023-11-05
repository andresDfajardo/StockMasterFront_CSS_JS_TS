import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { CatauniversalComponent } from './catauniversal/catauniversal.component';
import { ProductoComponent } from './producto/producto.component';
import { CatalogouniversalComponent } from './catalogouniversal/catalogouniversal.component';
import { ProveedorComponent } from './proveedor/proveedor.component';

const routes: Routes = 
[
  {
    path: '',
    component:PrincipalComponent,
  },
  {
    path: 'CatalogoOld',
    component:CatauniversalComponent,
  }, 
  {
    path: 'Producto',
    component:ProductoComponent,
  },
  {
    path: 'catalogo',
    component:CatalogouniversalComponent,
  },
  {
    path: 'Proveedor',
    component:ProveedorComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
