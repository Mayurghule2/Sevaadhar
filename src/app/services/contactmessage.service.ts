import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactMessage {
  id?: number;
  name: string;
  email: string;
  contact: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactMessageService {
  private baseUrl = 'http://localhost:9090/api/messages'; // Adjust if needed

  constructor(private http: HttpClient) {}

  // POST: Save a new message
  saveMessage(message: ContactMessage): Observable<ContactMessage> {
    return this.http.post<ContactMessage>(this.baseUrl, message);
  }

  // GET: Get all messages
  getAllMessages(): Observable<ContactMessage[]> {
    return this.http.get<ContactMessage[]>(this.baseUrl);
  }

  // GET: Get message by ID
  getMessageById(id: number): Observable<ContactMessage> {
    return this.http.get<ContactMessage>(`${this.baseUrl}/${id}`);
  }
}
