// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProgramApplicationService {
//   private baseUrl = 'http://localhost:9090/api/program-applications';

//   constructor(private http: HttpClient) {}

//   applyProgram(data: any) {
//     return this.http.post(`${this.baseUrl}/apply`, data);
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface ProgramApplicationSubmit {
  program: { id: number };
  volunteer: { id: number };
  desiredRole: string;
  motivationOrMessage: string;
  appliedOn?: string;
}

export interface ProgramApplicationRaw {
  id?: number;
  program: {
    id: number;
    title: string;
    description: string;
    type: string;
    location: string;
    startDate: string;
    endDate: string;
    imageFileName: string;
    brochureFileName: string;
    contactEmail: string;
    contactPhone: string;
    capacity: number;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    imageUrl: string;
    brochureUrl: string;
  };
  volunteer: {
    id: number;
    fullName: string;
    email: string;
    phoneNumber: string;
    gender: string;
    age: number;
    address: string;
    preferredVolunteeringDaysTimes: string;
    volunteeringAreasOfInterest: string;
    adharCard: string;
    qualifications: string;
  };
  desiredRole: string;
  motivationOrMessage: string | null;
  appliedOn?: string;
  applicationStatus?: string;
  updatedAt?: string;
}

export interface ProgramApplicationDisplay {
  id?: number;
  programTitle: string;
  programId: number;
  volunteerId: number;
  volunteerName: string;
  desiredRole: string;
  appliedOn?: string;
  applicationStatus?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProgramApplicationService {
  private apiUrl = `http://localhost:9090/api/program-applications`;

  constructor(private http: HttpClient) {}

  apply(application: ProgramApplicationSubmit): Observable<ProgramApplicationDisplay> {
    return this.http.post<ProgramApplicationDisplay>(`${this.apiUrl}/apply`, application);
  }

  getAllApplications(): Observable<ProgramApplicationRaw[]> {
    return this.http.get<ProgramApplicationRaw[]>(this.apiUrl);
  }

  getById(id: number): Observable<ProgramApplicationRaw> {
    return this.http.get<ProgramApplicationRaw>(`${this.apiUrl}/${id}`);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateStatus(id: number, status: string): Observable<ProgramApplicationRaw> {
    return this.http.patch<ProgramApplicationRaw>(`${this.apiUrl}/${id}/status`, status);
  }

  // Add method to check if volunteer ID is registered
  checkVolunteerId(volunteerId: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/volunteers/check/${volunteerId}`);
  }
}