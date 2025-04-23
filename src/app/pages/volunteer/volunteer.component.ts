import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';



@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css'],
  
})


export class VolunteerComponent implements OnInit,AfterViewInit, OnDestroy {

  @ViewChild('sliderRef') sliderRef!: ElementRef;
  currentSlide = 0;
  get totalSlides() {
    return Math.ceil(this.photos.length / 2); // 2 images per slide
  }
  title = 'seva-adhar-angular';
  photos = [
    { src: 'https://shuddhi.org/uploads/3/4/7/9/34791871/29497306-885203021659967-2601879587210133504-o-1_orig.jpg', alt: 'Volunteer helping children' },
    { src: 'https://www.caritasindia.org/wp-content/uploads/2020/01/volunteer-training-mp-header.jpg', alt: 'Volunteer planting trees' },
    { src: 'https://image.volunteerworld.com/a47ea511edfab179bda4b8ea58e6216bde78550b/india-medical-2.jpg?auto=format&crop=faces&fit=crop&h=317&w=562', alt: 'Volunteer teaching' },
    { src: 'https://greenashram.org/images/photo-gallery/student-volunteer-camp/004.jpg', alt: 'Volunteer at food drive' },
    { src: 'https://ivhq.imgix.net/images/about/united-nations/un-sustainable-development-goal-project-ivhq-good-health.jpg?w=585&h=360&crop=faces,center&fit=crop&q=85&auto=format,compress', alt: 'Community volunteer event' }
  ];

  benefits = [
    {
      title: 'Make a Real Impact',
      description: 'Our volunteers directly contribute to meaningful projects that create lasting positive change in communities. See the difference your work makes firsthand.'
    },
    {
      title: 'Develop New Skills',
      description: 'Gain valuable experience and develop both personal and professional skills through our diverse range of volunteer opportunities and training programs.'
    },
    {
      title: 'Build Connections',
      description: 'Join a community of like-minded individuals who share your passion for service. Create lasting friendships and professional networks.'
    },
    {
      title: 'Flexible Commitments',
      description: 'Whether you have a few hours a week or can volunteer for longer periods, we have opportunities that fit your schedule and availability.'
    },
    {
      title: 'Personal Growth',
      description: 'Experience the joy and fulfillment that comes from helping others. Many volunteers report increased happiness, purpose, and perspective.'
    },
    {
      title: 'Recognition Program',
      description: 'We value our volunteers and recognize their contributions through our volunteer appreciation events, certificates, and advancement opportunities.'
    }
  ];

  stories = [
    {
      name: 'Priya Singh',
      role: 'Education Volunteer, 2 years',
      image: 'https://img.freepik.com/premium-vector/cute-woman-avatar-profile-vector-illustration_1058532-14592.jpg',
      testimony: 'Joining Seva Adhar as a volunteer teacher has been one of the most rewarding experiences of my life. Seeing the children\'s faces light up when they understand a new concept makes all the effort worthwhile. I started volunteering to give back, but I\'ve received so much more in return - purpose, joy, and a sense of community that I couldn\'t have found elsewhere.'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Healthcare Outreach, 3 years',
      image: 'https://static.vecteezy.com/system/resources/previews/015/413/618/non_2x/elegant-man-in-business-suit-with-badge-man-business-avatar-profile-picture-illustration-isolated-vector.jpg',
      testimony: 'As a healthcare professional, I wanted to use my skills to help those without access to proper medical care. Through Seva Adhar\'s rural health camps, I\'ve been able to provide basic healthcare services to hundreds of people who would otherwise go without. The gratitude from the communities we serve is humbling, and the friendships I\'ve made with fellow volunteers have enriched my life tremendously.'
    },
    {
      name: 'Meera Patel',
      role: 'Environmental Project Leader, 1 year',
      image: 'https://img.freepik.com/premium-vector/actress-vector-character-illustration-flat-style_1033579-56640.jpg?semt=ais_hybrid&w=740',
      testimony: 'I started as a weekend volunteer on Seva Adhar\'s tree planting drives, but quickly became more involved when I saw how effectively the organization was working. Within months, I was leading my own environmental restoration projects. The support and training I received helped me grow not just as a volunteer, but as a leader. Now, a year later, our team has planted over 5,000 trees and established three community gardens.'
    }
  ];

  

  ngOnInit(): void {
    this.autoSlide();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.photos.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.photos.length) % this.photos.length;
  }

  autoSlide() {
    setInterval(() => {
      this.nextSlide();
    }, 3000);
  }
  
  scrollToSignUp() {
    const signUpSection = document.getElementById('sign-up');
    if (signUpSection) {
      signUpSection.scrollIntoView({ behavior: 'smooth' });
    }
  }


  autoScrollInterval: any;

  ngAfterViewInit() {
    this.startAutoScroll();
  }
  scrollLeft() {
    this.sliderRef.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.sliderRef.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
  
  startAutoScroll() {
    this.autoScrollInterval = setInterval(() => {
      const el = this.sliderRef.nativeElement;
      // If at the end, scroll back to start
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        this.scrollRight();
      }
    }, 3000); // Scroll every 3 seconds
  }

  ngOnDestroy() {
    clearInterval(this.autoScrollInterval);
  }
}
