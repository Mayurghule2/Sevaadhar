import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgramApplicationService {
  private baseUrl = 'http://localhost:9090/api/program-applications';

  constructor(private http: HttpClient) {}

  applyProgram(data: any) {
    return this.http.post(`${this.baseUrl}/apply`, data);
  }
}
