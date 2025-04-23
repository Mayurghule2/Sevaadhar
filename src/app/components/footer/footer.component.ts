// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-footer',
//   templateUrl: './footer.component.html',
//   styleUrls: ['./footer.component.css']
// })
// export class FooterComponent {

// }
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  newsletterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.newsletterForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.newsletterForm.valid) {
      const name = this.newsletterForm.get('name')?.value;
      const email = this.newsletterForm.get('email')?.value;

      alert(`Thank you for subscribing, ${name}!\nWe will contact you at ${email}.`);
      console.log('Form submitted:', this.newsletterForm.value);
      // Here you would typically call a service to handle the newsletter subscription
      this.newsletterForm.reset();
    }else {
      alert('Please fill out the form correctly.');
    }
  }
}