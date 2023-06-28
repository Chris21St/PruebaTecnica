import { Component, NgModule, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})

export class NewProductComponent implements OnInit{

  productoForm:FormGroup;
  tags:string[]=[]
  tag:string="";

  get stringArrayControls(){
    return this.productoForm.get('stringArray') as FormArray;
  }

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
      stringArray:this.fb.array([])
    })
  }
  ngOnInit(): void {
    this.addStringInput()
  }
  addProduct(){

  }
  addStringInput() {
    const control = this.fb.control('');
    this.stringArrayControls.push(control);
  }
  addTags(){
    this.tags.push(this.tag);
    console.log(this.tags);
    this.tag=""

  }
}
