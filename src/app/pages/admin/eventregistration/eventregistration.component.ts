// import { Component } from '@angular/core';
// import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import Swal from 'sweetalert2';
// import { Program } from 'src/app/models/program';
// import { ProgramApplicationService } from 'src/app/services/program-application.service';

// @Component({
//   selector: 'app-eventregistration',
//   templateUrl: './eventregistration.component.html',
//   styleUrls: ['./eventregistration.component.css']
// })
// export class EventregistrationComponent {
//   eventreg:FormGroup;

//   selectedfile:{[key:string]:File | File[]}={};  //storing here files
  
//     constructor(private fb:FormBuilder){
//       this.eventreg=this.fb.group({
  
//         uploadimage:[null,Validators.required],
//         uploadbrochure:[null],
//         programtitle:["",Validators.required],
//         programtype:["",Validators.required],
//         description:["",Validators.required],
//         location:[""],
//         capacity:[""],
//         startdate:["",Validators.required],
//         enddate:["",Validators.required],
//         email:["",[Validators.required,Validators.email]],
//         mobile:["",[Validators.required,Validators.pattern(/^[0-9]{10}$/)]],
//         isactive:[true,Validators.requiredTrue]
//        })
//     }
  
//     onFileChange(event: Event, fieldName: string, allowMultiple = false) {
//       const input = event.target as HTMLInputElement;
//       if (input.files && input.files.length > 0) {
//         const files = allowMultiple ? Array.from(input.files) : input.files[0];
  
//         this.selectedfile[fieldName] = files;
//         this.eventreg.patchValue({ [fieldName]: files });
//         this.eventreg.get(fieldName)?.updateValueAndValidity();
//       }
//     }
  
//     ageValidator(control: AbstractControl): { [key: string]: any } | null {
//       const dob = new Date(control.value);
//       const ageDiffMs = Date.now() - dob.getTime();
//       const ageDate = new Date(ageDiffMs);
//       const age = Math.abs(ageDate.getUTCFullYear() - 1970);
//       return age >= 18 ? null : { underage: true };
//     }
  
//   //   onSubmit(){
//   //     if(this.eventreg.valid){
//   //       console.log(this.eventreg.value);
//   //       console.log("selected file :"+this.selectedfile);
        
//   //       const formData = new FormData();
//   //       formData.append('uploadimage', this.selectedfile['uploadimage'] as File);
//   //       formData.append('uploadbrochure', this.selectedfile['uploadbrochure'] as File);
//   // // Here you can handle the form submission, e.g., send it to a server
  
  
//   // //display success popup on successful form submision
//   // Swal.fire({
//   //   icon: 'success',
//   //   title: 'Program Registered',
//   //   text: 'Your program has been registered successfully!',
//   //   confirmButtonColor: '#2caa3f',
//   //   confirmButtonText: 'OK',
//   // });
//   //       this.eventreg.reset();
  
//   //   }else{
//   //     console.log("Form is invalid");
//   //     Swal.fire({
//   //       icon: 'error',
//   //       title: 'Invalid Form',
//   //       text: 'Please fill all required fields correctly.',
//   //       confirmButtonColor: '#d33',
//   //     });
  
//   //     this.eventreg.markAllAsTouched();
//   //   }
    
      
//   // }


//   onSubmit() {
//     if (this.eventreg.valid) {
//       console.log(this.eventreg.value);
  
//       // Simulate file upload and return URLs (Replace with actual upload logic)
//       const imageUrl = 'https://yourcdn.com/images/' + (this.selectedfile['uploadimage'] as File).name;
//       const brochureUrl = this.selectedfile['uploadbrochure']
//         ? 'https://yourcdn.com/brochures/' + (this.selectedfile['uploadbrochure'] as File).name
//         : '';
  
//       const payload = {
//         programtitle: this.eventreg.value.programtitle,
//         programtype: this.eventreg.value.programtype,
//         description: this.eventreg.value.description,
//         location: this.eventreg.value.location,
//         capacity: this.eventreg.value.capacity,
//         startdate: this.eventreg.value.startdate,
//         enddate: this.eventreg.value.enddate,
//         email: this.eventreg.value.email,
//         mobile: this.eventreg.value.mobile,
//         isactive: this.eventreg.value.isactive,
//         uploadimage: imageUrl,             // match backend property name
//         uploadbrochure: brochureUrl        // match backend property name
//       };
  
//       this.ProgramApplicationService.applyProgram(payload).subscribe({
//         next: (res) => {
//           Swal.fire({
//             icon: 'success',
//             title: 'Program Registered',
//             text: 'Your program has been registered successfully!',
//             confirmButtonColor: '#2caa3f',
//           });
//           this.eventreg.reset();
//         },
//         error: (err) => {
//           Swal.fire({
//             icon: 'error',
//             title: 'Error',
//             text: 'Something went wrong during registration.',
//             confirmButtonColor: '#d33',
//           });
//           console.error(err);
//         }
//       });
//     } else {
//       console.log("Form is invalid");
//       Swal.fire({
//         icon: 'error',
//         title: 'Invalid Form',
//         text: 'Please fill all required fields correctly.',
//         confirmButtonColor: '#d33',
//       });
  
//       this.eventreg.markAllAsTouched();
//     }
//   }
  
  
  
// }

import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ProgramService } from 'src/app/services/program.service';
import { ProgramType } from 'src/app/enums/program-type.enum';

@Component({
  selector: 'app-eventregistration',
  templateUrl: './eventregistration.component.html',
  styleUrls: ['./eventregistration.component.css']
})
export class EventregistrationComponent {
  
  programForm: FormGroup;
  selectedImage!: File;
  selectedBrochure!: File;
  programTypes = Object.values(ProgramType);

  constructor(private fb: FormBuilder, private programService: ProgramService) {
    this.programForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      location: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      contactEmail: ['', [Validators.required, Validators.email]],
      contactPhone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      capacity: ['', [Validators.required, Validators.min(1)]],
      isActive: [true],
      image: [null],
      brochure: [null]
    });
  }

  onImageSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }

  onBrochureSelected(event: any) {
    this.selectedBrochure = event.target.files[0];
  }

  onSubmit() {
    console.log(this.programForm.value);

    if (this.programForm.invalid) return;

    const formData = new FormData();
    Object.entries(this.programForm.value).forEach(([key, value]) => {
      if (key !== 'imageFile' && key !== 'brochureFile') {
        formData.append(key, value as string);
      }
    });

    if (this.selectedImage) {
      formData.append('image', this.selectedImage);
    }

    if (this.selectedBrochure) {
      formData.append('brochure', this.selectedBrochure);
    }

    this.programService.createProgramWithTextResponse(formData).subscribe({
      next: (res: string) => {
        Swal.fire({
          icon: 'success',
          title: 'Program Registered!',
          text: res, // Displays "Program created successfully"
          customClass: {
            confirmButton: 'swal-confirm-btn'
          },
          confirmButtonText: 'OK'
        });
  
        this.programForm.reset();       // Optional: reset form
        this.selectedImage = null as any;
        this.selectedBrochure = null as any;
      },
      error: err => {
        console.error('Registration failed:', err);
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: 'Registration failed. Please try again.',
          customClass: {
            confirmButton: 'swal-confirm-btn'
          },
          confirmButtonText: 'OK'
        });
      }
    });
  }
  
  
}
