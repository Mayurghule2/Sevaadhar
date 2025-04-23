// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-volunteerregistration',
//   templateUrl: './volunteerregistration.component.html',
//   styleUrls: ['./volunteerregistration.component.css']
// })
// export class VolunteerregistrationComponent implements OnInit {
//   volunteerForm!: FormGroup;
  
//   constructor(private fb: FormBuilder) {}
  
//   ngOnInit(): void {
//     this.initForm();
//   }

//   initForm(): void {
//     this.volunteerForm = this.fb.group({
//       fullName: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       phoneNumber: ['', Validators.required],
//       gender: ['', Validators.required],
//       age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
//       address: ['', Validators.required],
//       preferredVolunteeringDaysTimes: ['', Validators.required],
//       volunteeringAreasOfInterest: ['', Validators.required],
//       adharCard: ['', Validators.required],
//       qualifications: ['', Validators.required]
//     });
//   }

//   onSubmit(): void {
//     if (this.volunteerForm.valid) {
//       console.log('Form submitted successfully', this.volunteerForm.value);
//       // Here you would typically send the form data to a backend service
//     } else {
//       this.markFormGroupTouched(this.volunteerForm);
//     }
//   }

//   markFormGroupTouched(formGroup: FormGroup) {
//     Object.values(formGroup.controls).forEach(control => {
//       control.markAsTouched();
//     });
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VolunteerService } from 'src/app/services/volunteer.service'; // adjust the path as needed
import { Volunteer } from 'src/app/models/volunteer'; // adjust the path as needed

@Component({
  selector: 'app-volunteerregistration',
  templateUrl: './volunteerregistration.component.html',
  styleUrls: ['./volunteerregistration.component.css']
})
export class VolunteerregistrationComponent implements OnInit {
  volunteerForm!: FormGroup;

  constructor(private fb: FormBuilder, private volunteerService: VolunteerService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.volunteerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      gender: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      address: ['', Validators.required],
      preferredVolunteeringDaysTimes: ['', Validators.required],
      volunteeringAreasOfInterest: ['', Validators.required],
      adharCard: ['', [Validators.required, Validators.pattern(/^\d{12}$/)]],
      qualifications: ['', Validators.required]
    });
  }

  onSubmit(): void {
    console.log('Submitting form with data:', this.volunteerForm.value);
    if (this.volunteerForm.valid) {
      const volunteer: Volunteer = this.volunteerForm.value;
      this.volunteerService.registerVolunteer(volunteer).subscribe({
        next: (res) => {
          alert('Volunteer Registered Successfully!');
          this.volunteerForm.reset();
        },
        error: (err) => {
          console.error('Error:', err);
          alert('Registration failed. Please try again.');
        }
      });
    } else {
      this.markFormGroupTouched(this.volunteerForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
