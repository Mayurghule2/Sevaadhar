// about-us.component.ts
import { Component } from '@angular/core';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {
  teamMembers = [
    {
      name: 'Sarah Mitchell',
      position: 'Executive Director',
      imageUrl: 'https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg'
    },
    {
      name: 'Michael Johnson',
      position: 'Programs Director',
      imageUrl: 'https://thumbs.dreamstime.com/b/retrato-de-um-homem-novo-com-barba-e-penteado-avatar-masculino-vetor-105082137.jpg'
    },
    {
      name: 'Elena Rodriguez',
      position: 'Development Director',
      imageUrl: 'https://img.freepik.com/premium-vector/avatar-young-modern-girl-with-short-haircut-hoodie_506604-476.jpg'
    },
    {
      name: 'David Chen',
      position: 'Finance Director',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/026/164/709/non_2x/businessman-portrait-elegant-man-in-business-suit-employee-of-business-institution-in-uniform-man-office-worker-business-avatar-profile-picture-illustration-vector.jpg'
    },
    {
      name: 'Aisha Patel',
      position: 'Communications Manager',
      imageUrl: 'https://as1.ftcdn.net/v2/jpg/04/67/95/40/1000_F_467954064_qFJxeuLVPcXon6X478v9hdgHrRlNgzDB.jpg'
    },
    {
      name: 'James Wilson',
      position: 'Volunteer Coordinator',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/015/413/618/non_2x/elegant-man-in-business-suit-with-badge-man-business-avatar-profile-picture-illustration-isolated-vector.jpg'
    }
  ];

  boardMembers = [
    {
      name: 'Dr. Robert Anderson',
      position: 'Board Chair',
      organization: 'Former Dean of Public Health, University Medical Center',
      imageUrl: 'https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.jpg?semt=ais_hybrid&w=740'
    },
    {
      name: 'Grace Thompson',
      position: 'Vice Chair',
      organization: 'CEO, Global Impact Partners',
      imageUrl: 'https://img.freepik.com/premium-vector/cute-woman-avatar-profile-vector-illustration_1058532-14592.jpg'
    },
    {
      name: 'Marcus Okonkwo',
      position: 'Treasurer',
      organization: 'Partner, Miller & Franklin Accounting',
      imageUrl: 'https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4848.jpg'
    },
    {
      name: 'Jennifer Lopez',
      position: 'Secretary',
      organization: 'Attorney, Human Rights Law Group',
      imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg'
    },
    {
      name: 'Raj Patel',
      position: 'Member',
      organization: 'Founder, Tech for Change Initiative',
      imageUrl: 'https://img.freepik.com/premium-vector/cartoon-man-with-glasses-icon-flat-vector-isolated_1120558-39194.jpg'
    },
    {
      name: 'Dr. Amina Hassan',
      position: 'Member',
      organization: 'Professor of International Development',
      imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/002/002/257/small_2x/beautiful-woman-avatar-character-icon-free-vector.jpg'
    }
  ];

  quickLinks = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
    { name: 'Programs', url: '/programs' },
    { name: 'Donate', url: '/donate' },
    { name: 'Volunteer', url: '/volunteer' },
    { name: 'News & Events', url: '/news' },
    { name: 'Contact', url: '/contact' }
  ];

  socialLinks = [
    { name: 'Facebook', label: 'f', url: '#' },
    { name: 'Twitter', label: 't', url: '#' },
    { name: 'Instagram', label: 'i', url: '#' },
    { name: 'LinkedIn', label: 'in', url: '#' },
    { name: 'YouTube', label: 'yt', url: '#' }
  ];
}