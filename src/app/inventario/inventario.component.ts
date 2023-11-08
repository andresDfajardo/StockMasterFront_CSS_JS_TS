import { Component, OnInit } from '@angular/core';
import { InventarioService } from './inventario.service';
import { CompraService } from '../compra/compra.service';
import { ProductoService } from '../producto/producto.service';
import { BodegaService } from '../bodega/bodega.service';


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  inventarioData: any[] = [];
  compraData: any[] = [];
  bodegaData: any[] = [];
  productoData: any[] = [];
  compraInventario: any[] = [];
  bodegaInventario: any[] = [];
  productoInventario: any[] = [];
  itemSeleccionado?: any = {};
  nuevoInventario: boolean = false;
  compraSeleccionada: number =0;
  bodegaSeleccionada: number =0;
  productoSeleccionado: number =0;
  idInventario: any = null;

  constructor(
    private servicioInventario: InventarioService,
    private servicioBodega: BodegaService,
    private servicioProducto: ProductoService,
    private servicioCompra: CompraService
  ) { }

  ngOnInit(): void {
    this.getTodosLosInventarios();
    this.getTodasLasBodegas();
    this.getTodasLasCompras();
    this.getTodosLosProductos();
  }

  public getTodosLosInventarios() {
    this.servicioInventario.getTodosLosInventarios().subscribe(data => {
      this.inventarioData = data;
    }, error => { console.error(error + " ") });
  }

  public getTodasLasBodegas() {
    this.servicioBodega.getTodasLasBodegas().subscribe(data => {
      this.bodegaInventario = data;
    }, error => { console.error(error + " ") });
  }

  public getTodasLasCompras() {
    this.servicioCompra.getTodasLasCompras().subscribe(data => {
      this.compraInventario = data;
    }, error => { console.error(error + " ") });
  }

  public getTodosLosProductos() {
    this.servicioProducto.getTodosLosProductos().subscribe(data => {
      this.productoInventario = data;
    }, error => { console.error(error + " ") });
  }

  public setSeleccionado(item: any){
    this.nuevoInventario = false;
    this.itemSeleccionado = item;    
    this.compraSeleccionada = this.compraInventario.find(compra => compra.fechaCompra === this.itemSeleccionado.idCompra).idCompra;
    this.bodegaSeleccionada = this.bodegaInventario.find(bodega => bodega.ubicacion === this.itemSeleccionado.idBodega).idBodega;
    this.productoSeleccionado = this.productoInventario.find(producto => producto.nombreProd === this.itemSeleccionado.idProducto).idProducto;
  }
  public crearInventario(inventario: any){
    inventario.idBodega = this.bodegaSeleccionada
    inventario.idCompra = this.compraSeleccionada;
    inventario.idProducto = this.productoSeleccionado;
    this.servicioInventario.crearInventario(inventario).subscribe(data =>{
      this.getTodosLosInventarios();
    },
    error => { console.error(error)});
  }
  public actualizarInventario(inventario: any){
    inventario.idBodega = this.bodegaSeleccionada
    inventario.idCompra = this.compraSeleccionada;
    inventario.idProducto = this.productoSeleccionado;
    this.servicioInventario.actualizarInventario(inventario).subscribe(data =>{
      this.getTodosLosInventarios();
    },
    error => { console.error(error)});
  }

  public limpiarSeleccionado(){
    this.itemSeleccionado = {};
    this.nuevoInventario = true;
  }
  filtrarDatos(){
    this.servicioInventario.getIdInventario(this.idInventario).subscribe(data => {
      this.inventarioData = data;
    },error => { console.error(error + " ") });
  }
}
