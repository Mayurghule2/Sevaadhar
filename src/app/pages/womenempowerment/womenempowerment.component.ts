import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-womenempowerment',
  templateUrl: './womenempowerment.component.html',
  styleUrls: ['./womenempowerment.component.css']
})
export class WomenempowermentComponent implements OnInit {
  isMenuOpen = false;
  currentStoryIndex = 0;
  totalStories = 3;
  slideInterval: any;
  stats = [
    { number: '5,000+', text: 'Women Empowered' },
    { number: '120', text: 'Self-Help Groups' },
    { number: '85%', text: 'Income Increase' },
    { number: '3,500+', text: 'Vocational Training' }
  ];
  
  programs = [
    {
      title: 'Skill Development',
      description: 'Providing vocational training in tailoring, handicrafts, food processing, digital literacy, and more.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVivpat8bAAT482e-PAW4mvoq1rtgfdBI6NQ&s'
    },
    {
      title: 'Financial Literacy',
      description: 'Training on savings, banking, investment, budgeting, and entrepreneurship fundamentals.',
      image: 'https://bsmedia.business-standard.com/_media/bs/img/article/2024-01/14/full/1705252688-8752.jpg?im=FeatureCrop,size=(826,465)'
    },
    {
      title: 'Self-Help Groups',
      description: 'Facilitating community-based support networks for savings, microloans, and business opportunities.',
      image: 'https://th-i.thgim.com/public/incoming/e1csji/article66456085.ece/alternates/FREE_1200/90092_13_10_2022_16_40_32_5_ODISHA_SELF_HELP_GROUP_5.JPG'
    },
    {
      title: 'Women\'s Rights',
      description: 'Awareness campaigns and legal support for women\'s rights, safety, and equality issues.',
      image: 'https://www.csrmandate.org/wp-content/uploads/2022/02/THP-India-Women-Leaders-1024x682.jpg'
    }
  ];
  
  stories = [
    {
      title: 'Meena\'s Journey to Financial Independence',
      meta: 'Tailoring Program, Village Maheshpur',
      description: 'Meena, a single mother of two, struggled to make ends meet after losing her husband. Through our tailoring program, she learned skills that enabled her to start a small business from home. Today, she employs three other women from her village and has doubled her monthly income.',
      image: 'https://ecdn.dhakatribune.net/contents/cache/images/640x359x1/uploads/media/2024/03/08/WD3-8eba3bfc61d03ea7cf57aab475e3e93e.JPG?jadewits_media_id=16483'
    },
    {
      title: 'How Sunita\'s Self-Help Group Transformed Her Village',
      meta: 'Self-Help Group, Rajpur District',
      description: 'Sunita started with a small savings group of 12 women. With guidance from OpenFuture Charity and Foundational Trust, they pooled resources to start a community dairy business. Their collective now manages 25 cows, supplies milk to the local market, and has established a micro-credit system that has funded education for over 30 children.',
      image: 'https://www.shutterstock.com/image-photo/mother-child-rural-india-diamond-260nw-2085894448.jpg'
    },
    {
      title: 'Lakshmi\'s Digital Literacy Journey',
      meta: 'Digital Literacy Program, Chennai',
      description: 'Lakshmi had never used a computer before joining our Digital Literacy Program. Within six months, she mastered basic computing skills and now runs a small digital services shop in her village, helping locals with online applications, documentation, and digital payments. Her services have become essential to her community.',
      image: 'https://media.istockphoto.com/id/1273504606/photo/indian-woman-holding-her-baby-in-her-arms.jpg?s=612x612&w=0&k=20&c=KEqOos5ffgaFQ-iTR4Lp0MCetzj8AuJF7QHhdwm_j_M='
    }
  ];

  ngOnInit(): void {
    // Initial setup for stories slider
    this.startAutoSlide();
  }
  // Start the sliding functionality
  startAutoSlide(): void {
    this.slideInterval = setInterval(() => {
      this.nextStory();
    }, 5000); // Set the slide change interval to 5 seconds (5000 ms)
  }
  stopAutoSlide(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval); // Clear the interval to stop auto-sliding
    }
  }
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  showStory(index: number): void {
    this.currentStoryIndex = index;
    this.stopAutoSlide();
  }

  nextStory(): void {
    if (this.currentStoryIndex < this.totalStories - 1) {
      this.currentStoryIndex++;
    } else {
      this.currentStoryIndex = 0;
    }
  }

  prevStory(): void {
    if (this.currentStoryIndex > 0) {
      this.currentStoryIndex--;
    } else {
      this.currentStoryIndex = this.totalStories - 1;
    }
  }
}
