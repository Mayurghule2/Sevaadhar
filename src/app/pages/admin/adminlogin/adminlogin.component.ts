import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // You can comment this if not used

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = ''; // <-- added

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const loginData = {
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:9090/api/admin/login', loginData, { responseType: 'text' }).subscribe({
      next: (response: any) => {
        localStorage.setItem('admin-token', response);
        localStorage.setItem('isAdminLoggedIn', 'true');
        this.successMessage = 'Admin logged in successfully!';
        this.router.navigate(['/admin/dashboard']); // <-- Commented out for now
      },
      error: (error) => {
        this.errorMessage = 'Invalid credentials. Please try again.';
        this.successMessage = ''; // Clear success message on error
      }
    });
  }

  // Logout function
  logout() {
    // Clear admin data from localStorage
    localStorage.removeItem('admin-token');
    localStorage.removeItem('isAdminLoggedIn');
    
    // Optional: Clear success and error messages if any
    this.successMessage = '';
    this.errorMessage = '';
    
    // Redirect to the login page after logout
    this.router.navigate(['/admin/login']);
  }
}
