import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute, Event, Router } from '@angular/router';
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

  constructor(private fb: FormBuilder,private aRouter:ActivatedRoute,private productoService:ProductoService, private router:Router, private toastr:ToastrService, private httpClient:HttpClient) {
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
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    const formData = new FormData();
    formData.append('file', this.getValue("profile"));
    formData.append('name',this.getValue("name"));
    formData.append('description',this.getValue("description"))
    formData.append('discount',this.getValue("discount"))
    formData.append('SKU',this.getValue("SKU"))
    formData.append('fragile',this.getValue("radiog"))
    formData.append('price',this.getValue("price"))
    formData.append('freeShipping',this.getValue("radiog2"))
    formData.append('stock',this.getValue("stock"))
    formData.append('category',this.getValue("category"))
    formData.append('subcategory',this.getValue("subcategory"))
    formData.append('brand',this.getValue("brand"))
    formData.append('status',this.getValue("radiog3"))
    formData.append('tags',JSON.stringify(this.tags))

    this.productoService.saveProduct(formData,headers).subscribe(data=>{
    this.toastr.success("The product was entered successfully","Registered product");
    this.router.navigate([""])
    })
  }

  addStringInput() {
    this.stringArrayControls.push(this.fb.control(''));
  }

  addTags(event:MouseEvent) {
    event.preventDefault()
    this.tags.push(this.tag);
    this.tag = '';
  }

  onFileSelect(event:any){
    if(event.target.files.length>0){
      const file=event.target.files[0]
      this.productoForm.get('profile')?.setValue(file)
    }
  }
  getValue(component:string){
   return this.productoForm.get(component)?.value
  }
}
