// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ActivatedRoute } from '@angular/router';
// import { ProgramService } from 'src/app/services/program.service';
// import { Program } from 'src/app/models/program';
// @Component({
//   selector: 'app-neweventvoulnteerregform',
//   templateUrl: './neweventvoulnteerregform.component.html',
//   styleUrls: ['./neweventvoulnteerregform.component.css']
// })
// export class NeweventvoulnteerregformComponent implements OnInit {
//   programApplicationForm: FormGroup;
//   program: any;
//   constructor(private fb: FormBuilder, private route: ActivatedRoute, private programService: ProgramService) {
//     this.programApplicationForm = this.fb.group({
//       program_id: [1],
//       volunteer_id: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
//       desired_role: ['', Validators.required],
//       applied_on: ['', Validators.required],
//       acceptTerms: [false, Validators.requiredTrue]
//     });
//   }

//   ngOnInit(): void {
//     // Set today's date as default for applied_on
//     const today = new Date();
//     const formattedDate = today.toISOString().split('T')[0];
//     this.route.queryParams.subscribe(params => {
//       const programId = +params['programId'] || 1;

//        // Fetch program details from the backend
//        this.programService.getProgramById(programId).subscribe(programData => {
//         this.program = programData;

//       this.programApplicationForm.patchValue({
//         program_id: programId,
//         applied_on: formattedDate
//       });
//     });
//   });

  
//   }

//   getImageUrl(program: Program): string {
//     return `http://localhost:9090/api/programs/image/${program.id}`;
//   }

//   getBrochureUrl(program: Program): string {
//     return `http://localhost:9090/api/programs/brochure/${program.id}`;
//   }
//   // onRegisterClick(event: Event): void {
//   //   event.preventDefault();
//   //   alert('You will be redirected to the volunteer registration page. After registering, you will receive a Volunteer ID that you can use to complete this application.');
//   //   // In a real implementation, this would use Angular Router
//   //   // this.router.navigate(['/volunteer-registration']);
//   // }

//   onSubmit(): void {
//     if (this.programApplicationForm.valid) {
//       console.log('Form submitted:', this.programApplicationForm.value);
//       alert('Thank you! Your application has been submitted.');
//       // In a real implementation, you would send this data to your server
//       // this.programService.submitApplication(this.programApplicationForm.value);
//     } else {
//       // Mark all fields as touched to show validation errors
//       Object.keys(this.programApplicationForm.controls).forEach(key => {
//         const control = this.programApplicationForm.get(key);
//         control?.markAsTouched();
//       });
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProgramService } from 'src/app/services/program.service';
import { ProgramApplicationService, ProgramApplicationSubmit } from 'src/app/services/program-application.service';
import { Program } from 'src/app/models/program';

@Component({
  selector: 'app-neweventvoulnteerregform',
  templateUrl: './neweventvoulnteerregform.component.html',
  styleUrls: ['./neweventvoulnteerregform.component.css']
})
export class NeweventvoulnteerregformComponent implements OnInit {
  programApplicationForm: FormGroup;
  program: Program | null = null;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private programService: ProgramService,
    private programApplicationService: ProgramApplicationService
  ) {
    this.programApplicationForm = this.fb.group({
      program_id: [1],
      volunteer_id: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      desired_role: ['', Validators.required],
      motivation_or_message: ['', [Validators.required, Validators.minLength(10)]],
      applied_on: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
    // Set today's date as default for applied_on
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];

    this.route.queryParams.subscribe(params => {
      const programId = +params['programId'] || 1;

      // Fetch program details from the backend
      this.programService.getProgramById(programId).subscribe({
        next: (programData) => {
          this.program = programData;
          this.programApplicationForm.patchValue({
            program_id: programId,
            applied_on: formattedDate
          });
        },
        error: (err) => {
          this.errorMessage = 'Failed to load program details.';
          console.error(err);
        }
      });
    });
  }

  getImageUrl(program: Program): string {
    return `http://localhost:9090/api/programs/image/${program.id}`;
  }

  getBrochureUrl(program: Program): string {
    return `http://localhost:9090/api/programs/brochure/${program.id}`;
  }

  // Method to check if volunteer_id is registered
  private checkVolunteerId(volunteerId: string): Promise<boolean> {
    // Simulate a backend call to check if the volunteer ID exists
    // Replace this with an actual API call to your backend service
    return new Promise((resolve) => {
      this.programApplicationService.checkVolunteerId(volunteerId).subscribe({
        next: (isRegistered) => {
          resolve(isRegistered); // Assuming the service returns a boolean
        },
        error: (err) => {
          console.error('Error checking volunteer ID:', err);
          resolve(false); // Default to false on error
        }
      });
    });
  }

  onSubmit(): void {
    if (this.programApplicationForm.valid) {
      const formValue = this.programApplicationForm.value;
      const volunteerId = formValue.volunteer_id;

      // Check if the volunteer ID is registered
      this.checkVolunteerId(volunteerId).then((isRegistered) => {
        if (!isRegistered) {
          alert('The volunteer ID is not registered or available. Please register as a volunteer first.');
          return; // Stop submission if not registered
        }
      
      // Map form data to ProgramApplication interface
      const application: ProgramApplicationSubmit = {
        program: { id: formValue.program_id },
        volunteer: { id: formValue.volunteer_id },
        desiredRole: formValue.desired_role,
        motivationOrMessage: formValue.motivation_or_message,
        appliedOn: formValue.applied_on
      };

      // Submit to backend
      this.programApplicationService.apply(application).subscribe({
        next: (response) => {
          alert('Thank you! Your application has been submitted successfully.');
          this.programApplicationForm.reset({
            program_id: formValue.program_id,
            applied_on: formValue.applied_on,
            acceptTerms: false
          });
        },
        error: (err) => {
          this.errorMessage = 'Failed to submit application. Please try again.';
          console.error('Error submitting application:', err);
        }
      });
    });
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.programApplicationForm.controls).forEach(key => {
        const control = this.programApplicationForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}