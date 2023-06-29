import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"new-product",component:NewProductComponent},
  {path:"products",
  children: [
    {
      path: '',
      component: ProductsComponent,
    },
    {
      path:"detail/:id",
      component: ProductDetailsComponent,
    },
  ]},
  {path:"cart",component:CartComponent},
  {path:"**", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
