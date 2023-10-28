import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-catauniversal',
  templateUrl: './catauniversal.component.html',
  styleUrls: ['./catauniversal.component.css']
})
export class CatauniversalComponent implements OnInit {

  constructor
    (
      private formBuilder: FormBuilder,
      private servi: ServicioService,
      Router: Router
    ) { }

    //-------------------------------------
    //LAS VARIABLES 
  title = "MANEJO DE CATALOGO UNIVERSAL";    //Titulo dela página
  tituloCataUniLista = "";             //Titulo Lista de todos los catalogos
  titloCataUniBuscado = "";                //Titulo de Color Buscado
  titloCataUniEditar = "";          //Titulo de Color a Editar


  
  CataUniT: any = [];               //Lista de todos los catalogos
  CataUniCatalogo: any = [];        //Lista catalogo Catalogo
  CataUniColor: any = [];           //Lista catalogo Color
  CataUniTipVehi: any = [];         //Lista catalogo TiposVehiculos
  CataUniMarca: any = [];           //Lista catalogo Marca
  CataUniTipDoc: any = [];          //Lista catalogo Tipos de Documntos
  CataUniEps: any = [];             //Lista catalogo Eps
  CataUniPrefSexual: any = [];      //Lista catalogo Preferencias Sexuales

  CataUniCatalogoSel: any = [];        //Lista catalogo Catalogo selecionado
  CataUniColorSel: any = [];           //Lista el color selecionado
  CataUniTipVehiSel: any = [];         //Lista catalogo TiposVehiculos selecionado
  CataUniMarcaSel: any = [];           //Lista catalogo Marca selecionado
  CataUniTipDocSel: any = [];          //Lista catalogo Tipos de Documntos selecionado
  CataUniEpsSel: any = [];             //Lista catalogo Eps selecionado
  CataUniPrefSexualSel: any = [];      //Lista catalogo Preferencias Sexuales selecionado
  
  tablacatalogosstotales:any = [];          //Encabezados tabla catalogos totales

  BuscarEvalor = 1;               //Control para carga del valor a buscar
  controlLista = 1;               //Control para limpiar la lista

  //Form group  //Grupo para la lista de Colores
  ListarCatTotales =  new FormGroup 
  (
    {

    }
  );

  //Grupo para formulariomostrar catalogo de Catalogos
  CBCatalogoCatalogo = new FormGroup 
  (
    {
      CatCatalogofiltro: new FormControl(),
      textCatalogo: new FormControl()
    }
  );

  //Grupo para formulariomostrar catalogo colores
  CBCatalogoColor = new FormGroup 
  (
    {
      CatColorfiltro: new FormControl(),
      textColor: new FormControl()
    }
  );

  //Grupo para formulariomostrar catalogo Tipos de Vehículos
  CBCatalogoTipVehi = new FormGroup 
  (
    {
      CatTipVehifiltro: new FormControl(),
      textTivVehi: new FormControl()
    }
  );

  //Grupo para formulariomostrar catalogo Marca
  CBCatalogoMarca = new FormGroup 
  (
    {
      CatMarcafiltro: new FormControl(),
      textMarca: new FormControl()
    }
  );

  //Grupo para formulariomostrar catalogo Tipos de Documentos
  CBCatalogoTipDoc = new FormGroup 
  (
    {
      CatTipDocfiltro: new FormControl(),
      textTivDoc: new FormControl()
    }
  );

  //Grupo para formulariomostrar catalogo EPS
  CBCatalogoEps = new FormGroup 
  (
    {
      CatEpsfiltro: new FormControl(),
      textEps: new FormControl()
    }
  );

  //Grupo para formulariomostrar catalogo PrefSexual
  CBCatalogoPrefSexual = new FormGroup 
  (
    {
      CatPrefSexualfiltro: new FormControl(),
      textPrefSexual: new FormControl()
    }
  );

//*****************************************************************************
//=============================================================
//LOS CRUD
//=============================================================
//Lista de todos los catalogos

public consultaCatalogosTotales() 
{
  if(this.controlLista == 1)
  {
      this.servi.getCatalogoTotal().subscribe((data: {catalogouiversal:[]}) => 
      {

            this.CataUniT = data;  //JSON.parse(data);
            this.tituloCataUniLista = "LISTA DE TODOS LOS CATALOGOS";
            this.tablacatalogosstotales[0] = "Id";
            this.tablacatalogosstotales[1] = "Denominación";
            this.tablacatalogosstotales[2] = "Catalogo";
            this.tablacatalogosstotales[3] = "LLaveForanea";
      },
      error => { console.error(error + " ") });
    }
    else
    {
      this.CataUniT = null;
      this.tituloCataUniLista = "";
      this.tablacatalogosstotales[0] = "";
      this.tablacatalogosstotales[1] = "";
      this.tablacatalogosstotales[2] = "";
      this.tablacatalogosstotales[3] = "";  
      this.controlLista = 1; 
    }
         
}

//--------------------------------------------------------------------------------------------->
//para Limpiar la lista

public LimpiarLista() 
{
this.controlLista = 0;
}

// -----------------------------------------------------------------------------------------
// Listar un solo tipo de Catalogo
//--------------------------------------------------------------
//Consulta un color por medio de su id.

public ListarCatalogoE(catip: any) 
{

  //var catipo = catip;
  //var filtoCatalogo = this.CBCatalogoColor.getRawValue()['CatColorfiltro'];

  this.servi.getlListCatologoEsp('/' + catip).subscribe((data: {}) => 
  {
    if (catip == 1)
    {
      this.CataUniCatalogo = data;
    }
    else if(catip == 2)
    {
      this.CataUniColor = data;
    }      
    else if(catip == 3)
    {
      this.CataUniTipVehi = data;
    }        
    else if(catip == 4)
    {
      this.CataUniMarca = data;
    }
    else if(catip == 5)
    {
      this.CataUniTipDoc = data;
    }      
    else if(catip == 6)
    {
      this.CataUniEps = data;
    }  
    else //if(catip == 7)
    {
      this.CataUniPrefSexual = data;
    }  

  },
    error => { console.log(error) });

}


//--------------------------------------------------------------
//Consulta un color por medio de su id.

public SelecCatalogoE(catip: any, catselec: any) 
{

if ( this.BuscarEvalor != 0)
{
  if (catip == 1)
  {
       this.BuscarEvalor = this.CBCatalogoCatalogo.getRawValue()['CatCatalogofiltro'];
  }
  else if (catip == 2)
  {
       this.BuscarEvalor = this.CBCatalogoColor.getRawValue()['CatColorfiltro'];
  }
  else if(catip == 3)
  {
    this.BuscarEvalor = this.CBCatalogoTipVehi.getRawValue()['CatTipVehifiltro'];
  }  
  else if(catip == 4)
  {
    this.BuscarEvalor = this.CBCatalogoMarca.getRawValue()['CatMarcafiltro'];
  } 
  else if(catip == 5)
  {
    this.BuscarEvalor = this.CBCatalogoTipDoc.getRawValue()['CatTipDocfiltro'];
  }  
  else if(catip == 6)
  {
    this.BuscarEvalor = this.CBCatalogoEps.getRawValue()['CatEpsfiltro'];
  }  
  else //if(catip ==7)
  {
    this.BuscarEvalor = this.CBCatalogoPrefSexual.getRawValue()['CatPrefSexualfiltro'];
  }   

}
catselec = this.BuscarEvalor;


this.servi.getlListCatologoEsp('/' + catip + '/' + catselec).subscribe((data: {}) => 
{

    if (catip == 1)
    {
      this.CataUniCatalogoSel = data;
    }
    else if(catip == 2)
    {
      this.CataUniColorSel = data;
    }      
    else if(catip == 3)
    {
      this.CataUniTipVehiSel = data;
    }        
    else if(catip == 4)
    {
      this.CataUniMarcaSel = data;
    }
    else if(catip ==5)
    {
      this.CataUniTipDocSel = data;
    }      
    else if(catip == 6)
    {
      this.CataUniEpsSel = data;
    }  
    else //if(catip == 7)
    {
      this.CataUniPrefSexualSel = data;
    }  
   

},
  error => { console.log(error) });

}

  //=============================================================
  //LAS FUNCIONES PARA LLAMARLAS DESDE EL HTML
  //=============================================================  

  ngOnInit(): void 
  {
    this.ListarCatTotales= this.formBuilder.group(
      {
  
      });
      
      this.CBCatalogoCatalogo = this.formBuilder.group(
      {
          CatCatalogofiltro: [],
          textCatalogo: []
      });
  
      this.CBCatalogoColor = this.formBuilder.group(
      {
        CatColorfiltro: [],
        textColor: []
      });
  
      this.CBCatalogoTipVehi = this.formBuilder.group(
      {
        CatTipVehifiltro: [],
        textTivVehi: []
      });
  
      this.CBCatalogoMarca = this.formBuilder.group(
      {
        CatMarcafiltro: [],
        textMarca: []
      });
  
      this.CBCatalogoTipDoc = this.formBuilder.group(
      {
        CatTipDocfiltro: [],
        textTivDoc: []
      });
  
      this.CBCatalogoEps = this.formBuilder.group(
      {
        CatEpsfiltro: [],
        textEps: []
      });
  
      this.CBCatalogoPrefSexual = this.formBuilder.group(
      {
        CatPrefSexualfiltro: [],
        textPrefSexual: []
      });
  }

}
