import { Component, OnInit } from '@angular/core';
import { ContactMessageService, ContactMessage } from '../../services/contactmessage.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
   // Bind to the form
   contact: ContactMessage = {
    name: '',
    email: '',
    contact: '',
    message: ''
  };
  // Store all messages (optional)
  messages: ContactMessage[] = [];

  constructor(private contactService: ContactMessageService, private router: Router) {}

  ngOnInit(): void {
    this.getMessages();
  }

  sendMessage() {
    this.contactService.saveMessage(this.contact).subscribe({
      next: (response) => {
        console.log('Message sent:', response);
        alert('Message sent successfully!');
        this.contact = { name: '', email: '',contact: '', message: '' }; // reset form
        this.getMessages(); // refresh message list
        this.router.navigate(['/contact-us']);
      },
      error: (err) => {
        console.error('Error sending message:', err);
      }
    });
  }

  getMessages() {
    this.contactService.getAllMessages().subscribe({
      next: (data) => this.messages = data,
      error: (err) => console.error('Error fetching messages:', err)
    });
  }
}
