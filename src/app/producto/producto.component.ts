import { Component, OnInit } from '@angular/core';
import { ProductoService } from './producto.service';
import { CatalogoUniversalService } from '../catalogouniversal.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {


  productoData: any[] = [];
  categoriasProducto: any[] = [];
  marcasProducto: any[] = [];
  itemSeleccionado?: any = {};
  categoriaSeleccionada: number =0;
  marcaSeleccionada: number = 0;
  idProducto: any = null;
  nuevoProducto: boolean = false;

  constructor(
    private servicio: ProductoService,
    private servicioUniversal: CatalogoUniversalService,
    ) { }

  ngOnInit(): void {
    this.getTodosLosProductos();
    this.getCategoriaProducto();
    this.getMarcaProducto();
  }

  public getTodosLosProductos() {
    this.servicio.getTodosLosProductos().subscribe(data => {
      this.productoData = data;
    }, error => { console.error(error + " ") });
  }

  public getCategoriaProducto(){
    this.servicioUniversal.getCategoria(6).subscribe(data =>{
      this.categoriasProducto = data;
    },
    error => { console.error(error)});
  }

  public getMarcaProducto(){
    this.servicioUniversal.getCategoria(7).subscribe(data =>{
      this.marcasProducto = data;
    },
    error => { console.error(error)});
  }

  public setSeleccionado(item: any){
    this.nuevoProducto = false;
    this.itemSeleccionado = item;    
    this.categoriaSeleccionada = this.categoriasProducto.find(categoria => categoria.denominacionCat === this.itemSeleccionado.categoriaPro).idCatalogo;
    this.marcaSeleccionada = this.marcasProducto.find(marca => marca.denominacionCat === this.itemSeleccionado.marcaProd).idCatalogo;
  }

  public actualizarProducto(producto: any){
    producto.categoriaPro = this.categoriaSeleccionada
    producto.marcaProd = this.marcaSeleccionada;
    this.servicio.actualizarProducto(producto).subscribe(data =>{
      this.getTodosLosProductos();
    },
    error => { console.error(error)});
  }

  public crearProducto(producto: any){
    producto.categoriaPro = this.categoriaSeleccionada
    producto.marcaProd = this.marcaSeleccionada;
    this.servicio.crearProducto(producto).subscribe(data =>{
      this.getTodosLosProductos();
    },
    error => { console.error(error)});
  }

  filtrarDatos(){
    this.servicio.getIdProducto(this.idProducto).subscribe(data => {
      this.productoData = data;
    },error => { console.error(error + " ") });
  }

  public limpiarSeleccionado(){
    this.itemSeleccionado = {};
    this.nuevoProducto = true;
  }
}
