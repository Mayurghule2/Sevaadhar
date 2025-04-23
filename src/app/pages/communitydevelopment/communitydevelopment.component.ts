import { Component } from '@angular/core';
interface StatCard {
  figure: string;
  description: string;
}

interface Initiative {
  title: string;
  description: string;
  image: string;
  projects: string[];
  reversed: boolean;
}

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
}

interface InvolvementOption {
  title: string;
  description: string;
  buttonText: string;
  path:string;
}
@Component({
  selector: 'app-communitydevelopment',
  templateUrl: './communitydevelopment.component.html',
  styleUrls: ['./communitydevelopment.component.css']
})
export class CommunitydevelopmentComponent {
  
  submitted = false;

  stats: StatCard[] = [
    { figure: '120+', description: 'Projects Completed' },
    { figure: '75,000', description: 'Lives Impacted' },
    { figure: '45', description: 'Communities Served' },
    { figure: '12,000', description: 'Trees Planted' }
  ];

  initiatives: Initiative[] = [
    {
      title: 'Infrastructure Development System',
      description: 'Building sustainable facilities and infrastructure to support community growth and well-being.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhcml0eXxlbnwwfHwwfHx8MA%3D%3D',
      projects: [
        'School Building Renovation Project',
        'Clean Water Access Program',
        'Rural Road Development Initiative',
        'Community Health Center Construction'
      ],
      reversed: false
    },
    {
      title: 'Community Engagement Programs',
      description: 'Creating platforms for community participation and fostering social connections through inclusive programs.',
      image: 'assets/images/community.jpg',
      projects: [
        'Youth Leadership Development',
        'Senior Citizen Support Groups',
        'Cultural Exchange Programs',
        'Community Skill-sharing Workshops'
      ],
      reversed: true
    },
    {
      title: 'Social Awareness and Initiatives',
      description: 'Raising awareness about critical social issues and advocating for positive change within communities.',
      image: 'https://bsmedia.business-standard.com/_media/bs/img/article/2020-09/30/full/1601405150-2084.jpg',
      projects: [
        'Health Education Campaigns',
        'Gender Equality Awareness',
        'Digital Literacy Programs',
        'Substance Abuse Prevention'
      ],
      reversed: false
    },
    {
      title: 'Environmental Conservation Efforts',
      description: 'Protecting and preserving natural resources through sustainable environmental practices and community action.',
      image: 'https://theunitedindian.com/images/environment-initiatives-25-06-24-E-blog6.webp',
      projects: [
        'Community Tree Planting',
        'Waste Management Education',
        'Clean Energy Adoption',
        'Biodiversity Protection Programs'
      ],
      reversed: true
    }
  ];

  testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'Community Member',
      quote: 'The water access project has transformed our daily lives. My children no longer have to walk miles for clean water, and our community health has improved significantly.',
      image: 'https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/050_girl_avatar_profile_woman_suit_student_officer-512.png'
    },
    {
      name: 'Michael Lee',
      role: 'Local Business Owner',
      quote: 'The road development initiative has connected our village to neighboring towns, boosting local commerce and creating new opportunities for everyone.',
      image: 'https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4866.jpg'
    },
    {
      name: 'Amina Patel',
      role: 'School Teacher',
      quote: 'The renovated school buildings have created an inspiring learning environment. Student attendance and performance have both increased remarkably.',
      image: 'https://static.vecteezy.com/system/resources/thumbnails/004/899/680/small/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg'
    }
  ];

  involvementOptions: InvolvementOption[] = [
    {
      title: 'Volunteer',
      description: 'Offer your time and skills to support our community projects.',
      buttonText: 'Join as Volunteer',
      path:'/volunteer-registration'
    },
    {
      title: 'Donate',
      description: 'Support our initiatives financially to help us create lasting impact.',
      buttonText: 'Donate Now',
      path:'/donate-form'
    },
    {
      title: 'Partner With Us',
      description: 'Organizations can collaborate with us on impactful projects.',
      buttonText: 'Become a Partner',
      path:'/contact-us'
    }
  ];

  
}
