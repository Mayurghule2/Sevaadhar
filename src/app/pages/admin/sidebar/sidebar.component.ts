import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() closeMobileSidebar = new EventEmitter<void>();
  isExpanded = true;
  isMobileMenuOpen = false;
  constructor(private router: Router) {}
  navigationItems = [
    { 
      title: 'Dashboard', 
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', 
      route: '/admin/dashboard' 
    },
    { 
      title: 'Donor Details', 
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', 
      route: '/admin/donor-record' 
    },
    { 
      title: 'Volunteer Details', 
      icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', 
      route: '/admin/volunteer-details' 
    },
    
    { 
      title: 'Events Form', 
      icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', 
      route: '/admin/event-registration' 
    },
    { 
      title: 'Events List', 
      icon: 'M4 6h16M4 10h12M4 14h16M4 18h8', 
      route: '/admin/event-list'
    },
    { 
      title: 'Message List', 
      icon: 'M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z', 
      route: '/admin/message-list'
    }
  ];

  toggleSidebar(): void {
    this.isExpanded = !this.isExpanded;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    this.closeMobileSidebar.emit();
  }

  // Logout method
  logout() {
    // Remove items from localStorage or sessionStorage
    localStorage.removeItem('admin-token');
    localStorage.removeItem('isAdminLoggedIn');

    // Redirect to login page
    this.router.navigate(['/adminlogin']);
  }
}
