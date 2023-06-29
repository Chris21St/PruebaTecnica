import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductoService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  listpro:any[]=[]

  ngOnInit(): void {
    this.getProducts()
  }
  constructor(private productService:ProductoService){}

  getProducts(){
    this.productService.getProducts().subscribe({
      next:(data=>{
        console.log(data);
      }),error:(error=>{
        console.log(error);
      })
    })
  }
}
