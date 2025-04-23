import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }

  showHeaderFooter(): boolean {
    // Hide on admin login and admin dashboard
    return !(
      this.currentRoute.includes('/adminlogin') ||
      this.currentRoute.includes('/admin/dashboard')
     
    );
  }
   // Check if admin is logged in (from localStorage)
   isAdminLoggedIn(): boolean {
    return localStorage.getItem('isAdminLoggedIn') === 'false';
  }
  
}
