import { Component, OnInit } from '@angular/core';
import { AtributomultivariadoService } from './atributomultivariado.service';
import { CatalogoUniversalService } from '../catalogouniversal.service';

@Component({
  selector: 'app-atributomultivariado',
  templateUrl: './atributomultivariado.component.html',
  styleUrls: ['./atributomultivariado.component.css']
})
export class AtributomultivariadoComponent implements OnInit {

  itemSeleccionado: any = {}
  nuevoAtributo: boolean = false;
  AtributoData: any[] = [];
  dataProveedor: any[] = [];
  dataTipo: any[] = [];
  idAtributoMultivariado: any = null;
  proveedorSeleccionado: any ={};
  tipoSeleccionado: any ={};

  constructor(
    private servicio: AtributomultivariadoService,
    private servicioUniversal: CatalogoUniversalService
    ) {}

  ngOnInit(): void {
    this.getTodosLosAtributos();
    this.getTodosLosProveedores();
    this.getTipoAtributo();
  }
  getTodosLosAtributos(){
    this.servicio.getTodosLosAtributos().subscribe(data => {
      this.AtributoData = data;
    }, error => { console.error(error + " ") });
  }
  getTodosLosProveedores(){
    this.servicio.getTodosLosProveedores().subscribe(data => {
      this.dataProveedor = data;
    }, error => { console.error(error + " ") });
  }
  public getTipoAtributo(){
    this.servicioUniversal.getCategoria(5).subscribe(data =>{
      this.dataTipo = data;
    },
    error => { console.error(error)});
  }
  public setSeleccionado(item: any){
    this.nuevoAtributo = false;
    this.itemSeleccionado = item;    
    this.proveedorSeleccionado = this.dataProveedor.find(proveedor =>proveedor.pNombre === this.itemSeleccionado.idProveedor).idProveedor;
    this.tipoSeleccionado = this.dataTipo.find(tipo => tipo.denominacionCat === this.itemSeleccionado.idTipo).idCatalogo;
  }
  public crearAtributo(atributo: any){
    atributo.idProveedor = this.proveedorSeleccionado
    atributo.idTipo = this.tipoSeleccionado;
    this.servicio.crearAtributo(atributo).subscribe(data =>{
      this.getTodosLosAtributos();
    },
    error => { console.error(error)});
  }
  public actualizarAtributo(atributo: any){
    atributo.idProveedor = this.proveedorSeleccionado
    atributo.idTipo = this.tipoSeleccionado;
    this.servicio.actualizarAtributo(atributo).subscribe(data =>{
      this.getTodosLosAtributos();
    },
    error => { console.error(error)});
  }

  filtrarDatos(){
    this.servicio.getIdAtributo(this.idAtributoMultivariado).subscribe(data => {
      this.AtributoData = data;
    },error => { console.error(error + " ") });
  }

  public limpiarSeleccionado(){
    this.itemSeleccionado = {};
    this.nuevoAtributo = true;
  }

}
