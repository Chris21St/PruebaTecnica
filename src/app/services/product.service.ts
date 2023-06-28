import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url='http://localhost:4000/api/productos/';
  constructor(private http:HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get(this.url);
  }

  saveProduct(producto:Product):Observable<any>{
    return this.http.post(this.url, producto)
  }
  getProduct(id:string): Observable<any>{
    return this.http.get(this.url+id);
  }

}
