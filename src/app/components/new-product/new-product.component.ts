import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ValidatorFn, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
  productoForm:FormGroup;

  constructor(private fb:FormBuilder){
      this.productoForm=this.fb.group({
      name:['',Validators.required],
      description:['',Validators.required],
      sku:['',Validators.required],
      radiog:['',Validators.required],
      radiog2:['',Validators.required],
      radiog3:['',Validators.required],
      price:['',Validators.required],
      category:['',Validators.required],
      stock:['',Validators.required],
    })
  }
  addProduct(){
    
  }
}
