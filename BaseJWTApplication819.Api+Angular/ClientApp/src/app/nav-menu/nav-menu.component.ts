import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  isAdmin: boolean = false;
  isLogin: boolean = false;
  constructor(private authService: AuthService) {
  };



  ngOnInit() {
    var token = localStorage.getItem('token');
    if (token != null) {
      this.isLogin = true;
      this.isAdmin = this.authService.isAdmin();
    }
    else {
      this.isLogin = false;
      this.isAdmin=false;
    }


    this.authService.changeMenuLogin.subscribe((data) => {
      this.isAdmin = this.authService.isAdmin();
      this.isLogin = data;
    });
  }

  Logout() {
    this.authService.Logout();
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
