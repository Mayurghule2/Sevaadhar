export interface Volunteer {
  id?: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  gender: 'Male' | 'Female' | 'Other';
  age: number;
  address: string;
  preferredVolunteeringDaysTimes: 'Weekdays' | 'Weekends' | 'Morning' | 'Evening';
  volunteeringAreasOfInterest: 'Education' | 'Healthcare' | 'Food_and_Nutrition' | 'Womens_Empowerment' | 'Disaster_Relief' | 'Community_Development' | 'Support_for_Differently_Abled';
  adharCard: string;
  qualifications: string;
}
