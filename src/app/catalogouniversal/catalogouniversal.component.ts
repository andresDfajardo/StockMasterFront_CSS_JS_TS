import { Component, OnInit } from '@angular/core';
import { CatalogoUniversalService } from './catalogouniversal.service';

@Component({
  selector: 'app-catalogouniversal',
  templateUrl: './catalogouniversal.component.html',
  styleUrls: ['./catalogouniversal.component.css']
})
export class CatalogouniversalComponent implements OnInit {

  catalogoData: any[] = [];
  categoriasCatalogo: any[] = [];
  itemSeleccionado?: any = {};
  categoriaSeleccionada: number =0;
  nuevoCatalogo: boolean = false;
  idcatalogo: any = null;
  llaveforanea: any = null;
  
  constructor(
    private servicioUniversal: CatalogoUniversalService,
  ) { }

  ngOnInit(): void {
    this.getTodosLosCatalogos();
    this.getCategoriaCatalogo();
  }

  public getTodosLosCatalogos(){
    this.servicioUniversal.getCatalogoTotal().subscribe(data => {
      this.catalogoData = data;
    },error => { console.error(error + " ") });
  }
  public getCategoriaCatalogo(){
    this.servicioUniversal.getCategoria(1).subscribe(data =>{
      this.categoriasCatalogo = data;
    },
    error => { console.error(error)});
  }
  public setSeleccionado(item: any){
    this.nuevoCatalogo = false;
    this.itemSeleccionado = item;   
    this.categoriaSeleccionada = this.categoriasCatalogo.find(categoria => categoria.denominacionCat === this.itemSeleccionado.denominacionCat).idCatalogo; 
  }

  public actualizarCatalogo(catalogo: any){
    this.servicioUniversal.actualizarCatalogo(catalogo).subscribe(data =>{
      this.getTodosLosCatalogos();
    },
    error => { console.error(error)});
  }

  public crearCatalogo(catalogo: any){
    this.servicioUniversal.crearCatalogo(catalogo).subscribe(data =>{
      this.getTodosLosCatalogos();
    },
    error => { console.error(error)});
  }
  public limpiarSeleccionado(){
    this.itemSeleccionado = {};
    this.nuevoCatalogo = true;
  }

  filtrarDatos(){
    this.servicioUniversal.getIdCatalogo(this.idcatalogo).subscribe(data => {
      this.catalogoData = data;
    },error => { console.error(error + " ") });
  }
  filtrarTipo(){
    this.servicioUniversal.getCategoria(this.llaveforanea).subscribe(data => {
      this.catalogoData = data;
    },error => { console.error(error + " ") });
  }
}
