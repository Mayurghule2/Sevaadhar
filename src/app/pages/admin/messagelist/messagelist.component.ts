import { Component, OnInit } from '@angular/core';
import { ContactMessageService } from 'src/app/services/contactmessage.service';
// import { ContactMessage } from 'src/app/models/contactmessage';
import { ContactMessage } from 'src/app/services/contactmessage.service';
@Component({
  selector: 'app-messagelist',
  templateUrl: './messagelist.component.html',
  styleUrls: ['./messagelist.component.css']
})
export class MessagelistComponent implements OnInit {
  messages: ContactMessage[] = [];

  constructor(private messageService: ContactMessageService) {}

  ngOnInit(): void {
    this.messageService.getAllMessages().subscribe({
      next: (data) => this.messages = data,
      error: (err) => console.error('Error fetching messages:', err)
    });
  }

  
}
