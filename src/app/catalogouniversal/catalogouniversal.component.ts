import { Component, OnInit } from '@angular/core';
import { CatalogoUniversalService } from './catalogouniversal.service';

@Component({
  selector: 'app-catalogouniversal',
  templateUrl: './catalogouniversal.component.html',
  styleUrls: ['./catalogouniversal.component.css']
})
export class CatalogouniversalComponent implements OnInit {

  catalogoData: any[] = [];
  
  constructor(
    private servicio: CatalogoUniversalService,
  ) { }

  ngOnInit(): void {
    this.getTodosLosCatalogos();
  }

  public getTodosLosCatalogos(){
    this.servicio.getCatalogoTotal().subscribe(data => {
      this.catalogoData = data;
    },error => { console.error(error + " ") });
  }
}
