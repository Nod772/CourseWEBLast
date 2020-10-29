import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInModel } from './Models/sign-in.model';
import { SignInComponent } from './Sign-in/Sign-in.component';
import { SignUpComponent } from './Sign-up/Sign-up.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', component: HomeComponent },
  { path: "sign-in", pathMatch: 'full', component: SignInComponent },
  { path: "sign-up", pathMatch: 'full', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
