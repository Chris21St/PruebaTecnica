import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    products:any[]=[]

    ngOnInit(): void {
      this.getProducts()

    }
    constructor(private productService:ProductoService){}

    getProducts(){
      this.productService.getProducts().subscribe({
        next:(data=>{
          this.products=data.products
          console.log(data);
        }),error:(error=>{
          console.log(error);
        })
      })
    }
  }

