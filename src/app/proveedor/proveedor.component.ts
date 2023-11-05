import { Component, OnInit } from '@angular/core';
import { ProveedorService } from './proveedor.service';
import { CatalogoUniversalService } from '../catalogouniversal.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  proveedorData: any[] = [];
  tiposDocumento: any[] = [];
  ciudadProveedor: any[] = [];
  tipoProveedor: any[] = [];

  constructor(private servicio: ProveedorService,
    private servicioCatalogo: CatalogoUniversalService,
    ) { }

  ngOnInit(): void {
    this.getTodosLosProveedores();
    this.getTiposDocumento();
    this.getCiudadProveedor();
    this.getTipoProveedor();
  }

  public getTipoProveedor(){
    this.servicioCatalogo.getCategoria(4).subscribe(data => {
      this.tipoProveedor = data;
    }, error => { console.error(error + " ") });
  }

  public getCiudadProveedor(){
    this.servicioCatalogo.getCategoria(3).subscribe(data => {
      this.ciudadProveedor = data;
    }, error => { console.error(error + " ") });
  }

  public getTiposDocumento(){
    this.servicioCatalogo.getCategoria(2).subscribe(data => {
      this.tiposDocumento = data;
    }, error => { console.error(error + " ") });
  }

  public getTodosLosProveedores() {
    this.servicio.getTodosLosProveedores().subscribe(data => {
      this.proveedorData = data;
    }, error => { console.error(error + " ") });
  }

}
