import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { CatauniversalComponent } from './catauniversal/catauniversal.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = 
[
  {
    path: '',
    component:PrincipalComponent,
  },
  {
    path: 'Catalogo',
    component:CatauniversalComponent,
  }, 
  {
    path: 'Producto',
    component:ProductoComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
