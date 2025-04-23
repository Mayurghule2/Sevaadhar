import { Component } from '@angular/core';

@Component({
  selector: 'app-measurement',
  templateUrl: './measurement.component.html',
  styleUrls: ['./measurement.component.css']
})
export class MeasurementComponent {
  measurementAreas = [
    {
      title: 'Needs Assessment',
      description: 'Regular community assessments to identify evolving needs and adapt our programs accordingly.'
    },
    {
      title: 'Program Evaluation',
      description: 'Continuous monitoring and evaluation of our services to ensure effectiveness and relevance.'
    },
    {
      title: 'Impact Reporting',
      description: 'Regular publication of comprehensive reports documenting our progress, challenges, and achievements.'
    }
  ];
}
