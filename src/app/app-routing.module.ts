import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { CatauniversalComponent } from './catauniversal/catauniversal.component';
import { ProductoComponent } from './producto/producto.component';
import { CatalogouniversalComponent } from './catalogouniversal/catalogouniversal.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { AtributomultivariadoComponent } from './atributomultivariado/atributomultivariado.component';
import { InventarioComponent } from './inventario/inventario.component';
import { BodegaComponent } from './bodega/bodega.component';
import { CompraComponent } from './compra/compra.component';
import { ContactoComponent } from './contacto/contacto.component';

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
  },
  {
    path: 'atributo',
    component:AtributomultivariadoComponent,
  },
  {
    path: 'inventario',
    component:InventarioComponent,
  },
  {
    path: 'bodega',
    component:BodegaComponent,
  },
  {
    path: 'compra',
    component:CompraComponent,
  },
  {
    path: 'contacto',
    component:ContactoComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
