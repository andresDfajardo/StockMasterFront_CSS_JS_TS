import { Component, OnInit } from '@angular/core';
import { InventarioService } from './inventario.service';



@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  inventarioData: any[] = [];
  compraInventario: any[] = [];
  bodegaInventario: any[] = [];
  productoInventario: any[] = [];
  itemSeleccionado?: any = {};
  nuevoInventario: boolean = false;
  compraSeleccionada: number =0;
  bodegaSeleccionada: number =0;
  productoSeleccionado: number =0;

  constructor(
    private servicioInventario: InventarioService,
  ) { }

  ngOnInit(): void {
  }

  public getTodosLosInventarios() {
    this.servicioInventario.getTodosLosInventarios().subscribe(data => {
      this.inventarioData = data;
    }, error => { console.error(error + " ") });
  }

  public setSeleccionado(item: any){
    this.nuevoInventario = false;
    this.itemSeleccionado = item;    
    this.compraSeleccionada = this.compraInventario.find(compra => compra.idCompra === this.itemSeleccionado.idCompra).idCatalogo;
   
  }
}
