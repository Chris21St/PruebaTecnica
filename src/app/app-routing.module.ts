import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"new-product",component:NewProductComponent},
  {path:"products",component:ProductsComponent},
  {path:"**", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
