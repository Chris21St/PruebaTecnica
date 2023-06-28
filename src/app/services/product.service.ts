import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  urlpost='https://arka-api-vtk-dd07b54028a1.herokuapp.com/api/product/createProduct';
  urlget='https://arka-api-vtk-dd07b54028a1.herokuapp.com/api/product/getProducts';
  constructor(private http:HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get(this.urlget);
  }

  saveProduct(producto:Product):Observable<any>{
    return this.http.post(this.urlpost, producto)
  }
  getProduct(id:string): Observable<any>{
    return this.http.get(this.urlget+id);
  }

}
