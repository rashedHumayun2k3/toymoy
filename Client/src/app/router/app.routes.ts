import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ProductDetailsComponent } from '../components/products/pages/details/product-details-page/product-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Home with header, footer, and product list
    { path: 'products/:id', component: ProductDetailsComponent }, // Product Details without header/footer
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }