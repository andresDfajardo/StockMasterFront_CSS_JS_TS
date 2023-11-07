import { Component, OnInit } from '@angular/core';
import { CompraService } from './compra.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  itemSeleccionado: any = {}
  nuevaCompra: boolean = false;
  compraData: any[] = [];
  dataProveedor: any[] = [];
  idcompra: any = null;
  proveedorSeleccionado: any ={};

  constructor(private servicio: CompraService) {}

  ngOnInit(): void {
    this.getTodasLasCompras();
    this.getTodosLosProveedores();
  }

  actualizarCompra(itemSeleccionado: any){
    itemSeleccionado.idProveedor = this.proveedorSeleccionado;
    this.servicio.actualizarCompra(itemSeleccionado).subscribe(data =>{
      this.getTodasLasCompras();
    },
    error => { console.error(error)});
  }

  crearCompra(itemSeleccionado: any){
    itemSeleccionado.idProveedor = this.proveedorSeleccionado;
    this.servicio.crearCompra(itemSeleccionado).subscribe(data =>{
      this.getTodasLasCompras();
    },
    error => { console.error(error)});
  }

  setSeleccionado(itemSeleccionado: any){
    this.nuevaCompra = false;
    this.itemSeleccionado =itemSeleccionado;
    this.proveedorSeleccionado = this.dataProveedor.find(proveedor =>proveedor.pNombre === this.itemSeleccionado.idProveedor).idProveedor;
  }

  limpiarSeleccionado(){
    this.itemSeleccionado = {};
    this.nuevaCompra = true;
  }

  getTodasLasCompras(){
    this.servicio.getTodasLasCompras().subscribe(data => {
      this.compraData = data;
    }, error => { console.error(error + " ") });
  }

  getTodosLosProveedores(){
    this.servicio.getTodosLosProveedores().subscribe(data => {
      this.dataProveedor = data;
    }, error => { console.error(error + " ") });
  }

  filtrarDatos(){
    this.servicio.getIdCompra(this.idcompra).subscribe(data => {
      this.compraData = data;
    },error => { console.error(error + " ") });
  }
}

