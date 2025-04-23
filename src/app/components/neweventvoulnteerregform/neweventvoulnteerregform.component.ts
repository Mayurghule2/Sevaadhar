import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProgramService } from 'src/app/services/program.service';
import { Program } from 'src/app/models/program';
@Component({
  selector: 'app-neweventvoulnteerregform',
  templateUrl: './neweventvoulnteerregform.component.html',
  styleUrls: ['./neweventvoulnteerregform.component.css']
})
export class NeweventvoulnteerregformComponent implements OnInit {
  programApplicationForm: FormGroup;
  program: any;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private programService: ProgramService) {
    this.programApplicationForm = this.fb.group({
      program_id: [1],
      volunteer_id: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      desired_role: ['', Validators.required],
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
       this.programService.getProgramById(programId).subscribe(programData => {
        this.program = programData;

      this.programApplicationForm.patchValue({
        program_id: programId,
        applied_on: formattedDate
      });
    });
  });

  
  }

  getImageUrl(program: Program): string {
    return `http://localhost:9090/api/programs/image/${program.id}`;
  }

  getBrochureUrl(program: Program): string {
    return `http://localhost:9090/api/programs/brochure/${program.id}`;
  }
  // onRegisterClick(event: Event): void {
  //   event.preventDefault();
  //   alert('You will be redirected to the volunteer registration page. After registering, you will receive a Volunteer ID that you can use to complete this application.');
  //   // In a real implementation, this would use Angular Router
  //   // this.router.navigate(['/volunteer-registration']);
  // }

  onSubmit(): void {
    if (this.programApplicationForm.valid) {
      console.log('Form submitted:', this.programApplicationForm.value);
      alert('Thank you! Your application has been submitted.');
      // In a real implementation, you would send this data to your server
      // this.programService.submitApplication(this.programApplicationForm.value);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.programApplicationForm.controls).forEach(key => {
        const control = this.programApplicationForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}
