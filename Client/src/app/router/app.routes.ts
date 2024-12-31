import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../features/home/home.component';
import { ToyDetailsComponent } from '../features/toys/pages/details/toy-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Home with header, footer, and product list
    { path: 'toys/:id', component: ToyDetailsComponent }, // Product Details without header/footer
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }