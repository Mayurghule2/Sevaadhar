// stories-in-motion.component.ts
import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

interface Story {
  id: number;
  imageUrl: string;
  duration: string;
  title?: string;
}

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  @ViewChild('sliderRef', { static: false }) sliderRef!: ElementRef;
  stories: Story[] = [
    {
      id: 1,
      imageUrl: 'https://www.cry.org/wp-content/uploads/Poverty-In-India.png',
      duration: '0:45'
    },
    {
      id: 2,
      imageUrl: 'https://media.istockphoto.com/id/1273504606/photo/indian-woman-holding-her-baby-in-her-arms.jpg?s=612x612&w=0&k=20&c=KEqOos5ffgaFQ-iTR4Lp0MCetzj8AuJF7QHhdwm_j_M=',
      duration: '1:20'
    },
    {
      id: 3,
      imageUrl: 'https://s3.ap-south-1.amazonaws.com/rzp-prod-merchant-assets/payment-link/description/help-poor-man_hha94dwkkxgesl',
      duration: '2:15'
    },
    {
      id: 4,
      imageUrl: 'https://www.povertyactionlab.org/sites/default/files/styles/full_width_medium_cropped/public/images/2021/03/Paula-Bronstein_Getty-Images_Images-of-Empowerment.jpg?itok=QgbHgzOp',
      duration: '0:58'
    }
    ,
    {
      id: 5,
      imageUrl: 'https://www.cry.org/wp-content/uploads/ways-to-empower-underprivileged-children.jpg',
      duration: '0:58'
    }
    ,
    {
      id: 6,
      imageUrl: 'https://www.orissapost.com/wp-content/uploads/2020/07/Poor-children.jpg',
      duration: '0:58'
    }
  ];

  activeSlide = 0;
  totalSlides = 1;
  
  ngOnInit(): void {
    this.totalSlides = Math.ceil(this.stories.length / 4);
  }

  prevSlide(): void {
    this.activeSlide = Math.max(0, this.activeSlide - 1);
  }

  nextSlide(): void {
    this.activeSlide = Math.min(this.totalSlides - 1, this.activeSlide + 1);
  }

  selectDot(index: number): void {
    this.activeSlide = index;
  }

  scrollLeft() {
    this.sliderRef.nativeElement.scrollLeft -= 250;
  }

  scrollRight() {
    this.sliderRef.nativeElement.scrollLeft += 250;
  }
  playVideo(story: Story): void {
    console.log(`Playing video: ${story.id}`);
    // Implement your video playing logic here
  }
}