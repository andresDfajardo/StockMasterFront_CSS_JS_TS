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
export class ProductoService 
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

   getTodosLosProductos(): Observable<any> 
  {
    return this.http.get(this.Url + "/producto", httpOptions);    
  }

  actualizarProducto(producto: any): Observable<any> 
  {
    return this.http.put(this.Url + "/producto",producto, httpOptions);    
  }

  crearProducto(producto: any): Observable<any> 
  {
    return this.http.post(this.Url + "/producto",producto, httpOptions);    
  }
}
