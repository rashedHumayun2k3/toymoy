import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../features/home/home.component';
import { ProductDetailsComponent } from '../features/products/pages/details/product-details-page/product-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Home with header, footer, and product list
    { path: 'products/:id', component: ProductDetailsComponent }, // Product Details without header/footer
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }