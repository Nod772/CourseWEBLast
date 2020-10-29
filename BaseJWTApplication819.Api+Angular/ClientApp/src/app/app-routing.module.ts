import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminAreaComponent } from './Admin-area/Admin-area.component';
import { ClientAreaComponent } from './Client-area/Client-area.component';
import { AdminGuard } from './guards/admin.guard';
import { notLoginGuard } from './guards/notLogin.guard';
import { LoggedInGuard } from './guards/loggedIn.guard';
import { ProductListComponent } from './Admin-area/product-list/product-list.component';
import { AddProductComponent } from './Admin-area/add-product/add-product.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'sign-in', canActivate: [notLoginGuard], pathMatch: 'full', component: SignInComponent },
  { path: 'sign-up', canActivate: [notLoginGuard], pathMatch: 'full', component: SignUpComponent },
  {
    path: 'admin-panel',
    canActivate: [AdminGuard],
    component: AdminAreaComponent,
    children: [
      { path: '', pathMatch: 'full', canActivate: [AdminGuard], component: ProductListComponent },
      { path: 'add-new-product', pathMatch: 'full', canActivate: [AdminGuard], component: AddProductComponent },
    ]

  },
  { path: 'client-panel', canActivate: [LoggedInGuard], pathMatch: 'full', component: ClientAreaComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
