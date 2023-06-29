import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  index:string=""
  product: any
  constructor(private productService:ProductoService,private route:ActivatedRoute){}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) this.productService.getProduct(id).subscribe((product) => {
      if(product?.products){
        this.product = product.products[0];
      }
    })
  }
}
