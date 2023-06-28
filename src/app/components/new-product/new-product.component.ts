import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductoService } from 'src/app/services/product.service';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
})
export class NewProductComponent implements OnInit {
  productoForm: FormGroup;
  tags: string[] = [];
  tag: string = '';
  id:string|null;

  get stringArrayControls() {
    return this.productoForm.get('stringArray') as FormArray;
  }

  constructor(private fb: FormBuilder,private aRouter:ActivatedRoute,private productoService:ProductoService, private router:Router, private toastr:ToastrService) {
    this.productoForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      discount:[""],
      subcategory:[""],
      brand:[""],
      tag:[""],
      photos:[""],
      SKU: ['', Validators.required],
      radiog: ['', Validators.required],
      radiog2: ['', Validators.required],
      radiog3: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      stock: ['', Validators.required],
      stringArray: this.fb.array([]),
    })
    this.id=aRouter.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.addStringInput();
  }
  addProduct() {
    const PRODUCTO:Product={
      name: this.productoForm.get("name")?.value,
      description: this.productoForm.get("description")?.value,
      discount: this.productoForm.get("discount")?.value,
      SKU: this.productoForm.get("SKU")?.value,
      fragile: this.productoForm.get("radiog")?.value,
      price: this.productoForm.get("price")?.value,
      ship: this.productoForm.get("radiog2")?.value,
      stock: this.productoForm.get("stock")?.value,
      category: this.productoForm.get("category")?.value,
      subcategory: this.productoForm.get("subcategory")?.value,
      brand: this.productoForm.get("brand")?.value,
      status: this.productoForm.get("radiog3")?.value,
      tags:"[]",
      photos: this.productoForm.get("photos")?.value,
      idProduct: 0
    }
    console.log(PRODUCTO);
    this.productoService.saveProduct(PRODUCTO).subscribe(data=>{
      this.toastr.success("The product was entered successfully","Registered product");
      this.router.navigate([""])
    })
  }
  addStringInput() {
    this.stringArrayControls.push(this.fb.control(''));
  }
  addTags() {
    this.tags.push(this.tag);
    this.tag = '';
  }
  onFileSelect(event:any){
    const file:File=event.target.files[0]
    //this.uploadImage(file);
  }
}
