import { Component, OnInit } from '@angular/core';
import { BodegaService } from './bodega.service';

@Component({
  selector: 'app-bodega',
  templateUrl: './bodega.component.html',
  styleUrls: ['./bodega.component.css']
})
export class BodegaComponent implements OnInit {

  itemSeleccionado: any = {};
  nuevaBodega: boolean = false;
  bodegaData: any[] = [];
  idbodega: any = null; 

  constructor(
    private servicio: BodegaService
  ) { }

  ngOnInit(): void {
    this.getTodasLasBodegas();
  }

  actualizarBodega(itemSeleccionado: any){
    this.servicio.actualizarBodega(itemSeleccionado).subscribe(data =>{
      this.getTodasLasBodegas();
    },
    error => { console.error(error)});
  }

  crearBodega(itemSeleccionado: any){
    this.servicio.crearBodega(itemSeleccionado).subscribe(data =>{
      this.getTodasLasBodegas();
    },
    error => { console.error(error)});
  }

  setSeleccionado(itemSeleccionado: any){
    this.nuevaBodega = false;
    this.itemSeleccionado = itemSeleccionado;  
  }

  limpiarSeleccionado(){
    this.itemSeleccionado = {};
    this.nuevaBodega = true;
  }

  getTodasLasBodegas(){
    this.servicio.getTodasLasBodegas().subscribe(data => {
      this.bodegaData = data;
    }, error => { console.error(error + " ") });
  }

  filtrarDatos(){
    this.servicio.getIdBodega(this.idbodega).subscribe(data => {
      this.bodegaData = data;
    },error => { console.error(error + " ") });
  }
}
