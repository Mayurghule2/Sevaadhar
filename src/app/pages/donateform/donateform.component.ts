import { Component } from '@angular/core';
import { AbstractControl, FormBuilder,FormGroup, Validators } from '@angular/forms';
import { DonorService } from 'src/app/services/donor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-donateform',
  templateUrl: './donateform.component.html',
  styleUrls: ['./donateform.component.css']
})
export class DonateformComponent {
  donateform:FormGroup;
  constructor(private fb:FormBuilder,private donorService:DonorService){
    this.donateform=this.fb.group({
      fullname:["",[Validators.required,Validators.pattern(/^[A-Z][a-z]+( [A-Z][a-z]+){1,}$/)]],
      dob:["",[Validators.required,this.ageValidator]],
      email:["",[Validators.required,Validators.email]],
      mobile:["",[Validators.required,Validators.pattern(/^[0-9]{10}$/)]],
      aadhar:["",[Validators.required,Validators.pattern(/^[0-9]{12}$/)]],
      adress:["",[Validators.required]],
      pincode:[""],
      purpose:["",Validators.required],
      city:[""],
      state:["",Validators.required],
      country:["",Validators.required],
      panno:["",[Validators.required,Validators.pattern(/[A-Z]{5}[0-9]{4}[A-Z]{1}/)]],
      amount:[""],
      termsandconditions:[false,Validators.requiredTrue],
      continueToPayments:[false]
     })
  }

  ageValidator(control: AbstractControl): { [key: string]: any } | null {
    const dob = new Date(control.value);
    const ageDiffMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageDiffMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    return age >= 18 ? null : { underage: true };
  }

  onSubmit(){
    if(this.donateform.valid){
      console.log(this.donateform.value);

      const donorData=this.donateform.value;

      const donerpayLoad = {
        fullName: donorData.fullname,
        dateOfBirth: donorData.dob,
        email: donorData.email,
        mobileNumber: donorData.mobile,
        adharchard: donorData.aadhar,
        address: donorData.adress,
        pincode: donorData.pincode,
        purpose: donorData.purpose,
        city: donorData.city,
        state: donorData.state,
        country: donorData.country,
        panNumber: donorData.panno,
        amount: donorData.amount,
        termsAccepted: donorData.termsandconditions,
        continueToPayments: donorData.continueToPayments,
        payments: [] 
      };
      


      this.donorService.registerDonor(donerpayLoad).subscribe({
        next: (res) => {
          // alert("Form Submitted and Data Saved!");
          //display success popup on successful form submision instead of alert
          Swal.fire({
            icon: 'success',
            title: 'Form Submitted!',
            text: 'Your program has been submitted successfully!',
            confirmButtonColor: '#2caa3f',
            confirmButtonText: 'OK',
          });
          this.donateform.reset();
        },
        error: (err) => {
          console.error("Error submitting form", err);
          // alert("Something went wrong,check console");
          //display success popup on successful form submision instead of alert
          Swal.fire({
                icon: 'error',
                title: 'Invalid Form',
                text: 'Please fill all required fields correctly.',
                confirmButtonColor: '#d33',
              });
        }
      });
    } else {
      alert("Please fill the form correctly.");
    }
  }
}
