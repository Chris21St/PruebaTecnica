import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductoService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  ngOnInit(): void {

  }
  listproductos:Product[]=[];
  constructor(private productService:ProductoService){}

  getProducts(){
    this.productService.getProducts().subscribe({
      next:(data=>{
        console.log(data);
        this.listproductos=data
      }),error:(error=>{
        console.log(error);
      })
    })
  }
}
