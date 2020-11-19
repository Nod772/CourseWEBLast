import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInModel } from './Models/sign-in.model';
import { SignInComponent } from './Sign-in/Sign-in.component';
import { SignUpComponent } from './Sign-up/Sign-up.component';
import { AdminGuard } from './guards/admin.guard';
import { AdminAreaComponent } from './Admin-area/Admin-area.component';
import { DiscussionListComponent } from './Admin-area/discussion/discussion-list/discussion-list.component';
import { AddDiscussionComponent } from './Admin-area/discussion/add-discussion/add-discussion.component';
import { LoggedInGuard } from './guards/loggedIn.guard';
import { ClientAreaComponent } from './Client-area/Client-area.component';
import { DiscussionDetailComponent } from './Admin-area/discussion/discussion-detail/discussion-detail.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', component: HomeComponent },
  { path: "sign-in", pathMatch: 'full', component: SignInComponent },
  { path: "sign-up", pathMatch: 'full', component: SignUpComponent },
  {path:'admin-area',
canActivate:[AdminGuard],
component:AdminAreaComponent,
children:[
  {path:'',pathMatch:'full',component:DiscussionListComponent,canActivate:[AdminGuard]},
  //{path: 'question/:id', component: DiscussionDetailComponent },
  {path:'add-discussion',pathMatch:'full',component:AddDiscussionComponent,canActivate:[AdminGuard]}
]},
{path:'client-area',pathMatch:'full',canActivate:[LoggedInGuard],component:ClientAreaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
