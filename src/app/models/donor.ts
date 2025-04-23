// src/app/models/doner.model.ts
export interface Doner {
  id: number;
  fullName: string;
  dateOfBirth: string;  // We'll use string because of the format in Angular
  email: string;
  mobileNumber: string;
  adharchard: string;
  address: string;
  pincode: string;
  purpose: string;  // Assuming it's a string, you can modify it if it's an enum
  city: string;
  state: string;
  country: string;
  panNumber: string;
  amount: number;
  termsAccepted: boolean;
  continueToPayments: boolean;
  payments: any[];  // Define the payment model if needed
}
