import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doner } from '../models/donor';
@Injectable({
  providedIn: 'root'
})
export class DonorService {

  private baseUrl = 'http://localhost:9090/api/doner_register'; // 🧩 Update if needed

  constructor(private http: HttpClient) {}

  registerDonor(donorData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, donorData);

  }

  getAllDoners(): Observable<Doner[]> {
    return this.http.get<Doner[]>(`${this.baseUrl}/all`);
  }
}
