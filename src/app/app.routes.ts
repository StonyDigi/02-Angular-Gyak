import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmiComponent } from './bmi/bmi.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OddEvenComponent } from './odd-even/odd-even.component';
import { ProductGrossPriceComponent } from './product-gross-price/product-gross-price.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { TriangleComponent } from './triangle/triangle.component';
import { SummeryComponent } from './summery/summery.component';
import { InterfaceExampleComponent } from './interface-example/interface-example.component';

export const routes: Routes = [
    
        {path: 'home', component:HomeComponent},
        {path: 'bmi', component:BmiComponent},
        {path: 'rectangle', component:RectangleComponent},
        {path: 'triangle', component:TriangleComponent},
        {path: 'productGrossPrice', component:ProductGrossPriceComponent},
        {path: 'oddEven', component:OddEvenComponent},
        {path: 'summery', component: SummeryComponent},
        {path: 'interfaceExample', component: InterfaceExampleComponent},
        {path: 'notfound', component:NotFoundComponent},
        {path: '', redirectTo:'/home',pathMatch:'full'},
        {path: '**', component:NotFoundComponent},
    ];
    
    @NgModule ({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
    })
    export class AppRoutingModule {}
    
