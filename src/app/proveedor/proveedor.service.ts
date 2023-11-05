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
export class ProveedorService 
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

   getTodosLosProveedores(): Observable<any> 
  {
    return this.http.get(this.Url + "/proveedor", httpOptions);    
  }

  actualizarProveedor(proveedor: any): Observable<any> 
  {
    return this.http.put(this.Url + "/proveedor",proveedor, httpOptions);    
  }

  crearProveedor(proveedor: any): Observable<any> 
  {
    return this.http.post(this.Url + "/proveedor",proveedor, httpOptions);    
  }
}
