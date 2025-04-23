import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html'
})
export class ServicesComponent {
  constructor(private router: Router) {}


  services = [
    {
      title: 'Education',
      image: 'assets/images/education.jpg',
      route: '/education',
      features: [
        'Literacy programs',
        'Vocational training',
        'Scholarships',
        'Mentorship initiatives'
      ]
    },
    {
      title: 'Healthcare',
      image: 'assets/images/healthcare.jpg',
      route: '/healthcare',

      features: [
        'Medical camps',
        'Health awareness programs',
        'Affordable healthcare access',
        'Mental health support'
      ]
    },
    {
      title: 'Food and Nutrition',
      image: 'assets/images/food.jpg',
      route: '/food-nutrition',

      features: [
        'Food banks',
        'Meal distribution',
        'Nutrition counseling',
        'Community gardens'
      ]
    },
    {
      title: 'Women\'s Empowerment',
      image: 'assets/images/women.jpg',
      route: '/women-empowerment',

      features: [
        'Vocational training',
        'Education and skills',
        'Support groups',
        'Women’s rights advocacy'
      ]
    },
    {
      title: 'Disaster Relief',
      image: 'assets/images/disaster.jpg',
      route: '/disaster-relief',

      features: [
        'Emergency response',
        'Relief distribution',
        'Rehabilitation programs',
        'Preparedness initiatives'
      ]
    },
    {
      title: 'Community Development',
      image: 'assets/images/community.jpg',
      route: '/community-development',

      features: [
        'Infrastructure development',
        'Community engagement',
        'Social awareness',
        'Environmental conservation'
      ]
    },
    {
      title: 'Support for Differently-Abled',
      image: 'assets/images/disability.jpg',
      route: '/differently-abled',

      features: [
        'Accessibility initiatives',
        'Rehabilitation programs',
        'Support groups',
        'Disability rights advocacy'
      ]
    }
  ];

  handleCardClick(service: any): void {
    console.log('Clicked service:', service);
    // Navigate to a service detail page or perform any action
    // this.router.navigate(['/service', service.id]);
  }
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
