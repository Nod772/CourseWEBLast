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
import { DiscussionListComponent } from './Admin-area/discussion/discussion-list/discussion-list.component';
import { AddDiscussionComponent } from './Admin-area/discussion/add-discussion/add-discussion.component';
import { DiscussionDetailComponent } from './Admin-area/discussion/discussion-detail/discussion-detail.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'sign-in', canActivate: [notLoginGuard], pathMatch: 'full', component: SignInComponent },
  { path: 'sign-up', canActivate: [notLoginGuard], pathMatch: 'full', component: SignUpComponent },
  {
    path: 'admin-panel',
    canActivate: [AdminGuard],
    component: AdminAreaComponent,
    children: [
      { path: '', pathMatch: 'full', component: DiscussionListComponent, canActivate: [AdminGuard]},
        {path: 'question/:id', component: DiscussionDetailComponent },


      { path: 'add-discussion', pathMatch: 'full', component: AddDiscussionComponent, canActivate: [AdminGuard] }
    ]
  },
  { path: 'client-panel', pathMatch: 'full', canActivate: [LoggedInGuard], component: ClientAreaComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
