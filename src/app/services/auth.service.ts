import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  // Method to log out the user
  logout() {
    // Remove user information from localStorage or sessionStorage
    localStorage.removeItem('admin');  // Example: remove 'user' from localStorage

    // Optionally clear the JWT token
    localStorage.removeItem('authToken');  // If you're storing the token in localStorage

    // You can also clear cookies or sessionStorage if necessary
  }
}
