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
  itemSeleccionado?: any = {};
  nuevoProveedor: boolean = false;
  tipoDocSeleccionado: number =0;
  ciudadSeleccionada: number =0;
  tipoProveedorSeleccionado: number =0;

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

  public setSeleccionado(item: any){
    this.nuevoProveedor = false;
    this.itemSeleccionado = item;    
    this.tipoDocSeleccionado = this.tiposDocumento.find(tipoDocumento => tipoDocumento.denominacionCat === this.itemSeleccionado.tipoDocumentoPro).idCatalogo;
    this.ciudadSeleccionada = this.ciudadProveedor.find(ciudad => ciudad.denominacionCat === this.itemSeleccionado.ciudadProv).idCatalogo;
    this.tipoProveedorSeleccionado = this.tipoProveedor.find(tipoProveedor => tipoProveedor.denominacionCat === this.itemSeleccionado.tipoProveedor).idCatalogo;
  }

  public actualizarProveedor(proveedor: any){
    proveedor.tipoDocumentoPro = this.tipoDocSeleccionado
    proveedor.ciudadProv = this.ciudadSeleccionada;
    proveedor.tipoProveedor = this.tipoProveedorSeleccionado;
    this.servicio.actualizarProveedor(proveedor).subscribe(data =>{
      this.getTodosLosProveedores();
    },
    error => { console.error(error)});
  }
  public crearProveedor(proveedor: any){
    proveedor.tipoDocumentoPro = this.tipoDocSeleccionado
    proveedor.ciudadProv = this.ciudadSeleccionada;
    proveedor.tipoProveedor = this.tipoProveedorSeleccionado;
    this.servicio.crearProveedor(proveedor).subscribe(data =>{
      this.getTodosLosProveedores();
    },
    error => { console.error(error)});
  }
  public limpiarSeleccionado(){
    this.itemSeleccionado = {};
    this.nuevoProveedor = true;
  }
}
