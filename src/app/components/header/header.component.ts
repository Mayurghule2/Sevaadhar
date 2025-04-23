import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  downloadPDF() {
    const link = document.createElement('a');
    link.href = 'assets/blank.pdf';  // Update with your actual PDF path
    link.download = 'Financial_Report_2023-24.pdf';     // Desired filename
    link.click();
  }

  isDropdownOpen = false;

  toggleDropdown(state: boolean) {
    this.isDropdownOpen = state;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }
}
