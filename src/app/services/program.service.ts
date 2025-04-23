import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  private apiUrl = 'http://localhost:9090/api/programs';

  constructor(private http: HttpClient) {}

  // Get all programs
  getAllPrograms(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  // Get program by ID
  getProgramById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Create a new program (multipart/form-data)
  createProgram(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/programs`, formData);
  }

  createProgramWithTextResponse(formData: FormData): Observable<string> {
    return this.http.post(`${this.apiUrl}/programs`, formData, {
      responseType: 'text'
    } as { responseType: 'text' });
  }
  
  
  changeStatus(id: number, isActive: boolean): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/status?isActive=${isActive}`, {});
  }
  
 

  // Update a program
  updateProgram(id: number, program: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, program);
  }

  // Delete a program
  deleteProgram(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
