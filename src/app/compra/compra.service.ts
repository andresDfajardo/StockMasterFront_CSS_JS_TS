import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions =
{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CompraService 
{
  private Url: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  private extractData(res: Response) 
  {
     let body = JSON.parse('' + res);
     return body || {};
   }

   private handleError<T>(operation = 'operation', result?: T) 
   {
     return (error: any): Observable<T> => 
     {
       console.log(`${operation} failed: ${error.message}`);
       return of(result as T)
     };
   }

   getTodasLasCompras(): Observable<any> 
  {
    return this.http.get(this.Url + "/compra", httpOptions);    
  }

  getTodosLosProveedores(): Observable<any> 
  {
    return this.http.get(this.Url + "/proveedor", httpOptions);    
  }

  actualizarCompra(compra: any): Observable<any> 
  {
    return this.http.put(this.Url + "/compra",compra, httpOptions);    
  }

  crearCompra(compra: any): Observable<any> 
  {
    return this.http.post(this.Url + "/compra",compra, httpOptions);    
  }

  getIdCompra(id: number): Observable<any> 
  {
     return this.http.get(this.Url + "/compra/I/"+ id, httpOptions);
  }
  informeCompra(idProveedor: any,fechaInicial: any,fechaFinal: any): Observable<any> 
  {
     return this.http.get(this.Url + "/compra/N1/" + idProveedor + "/" + fechaInicial + "/"+ fechaFinal, httpOptions);
  }
}
