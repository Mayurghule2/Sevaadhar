import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';;

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements AfterViewInit, OnDestroy{
  @ViewChild('carousel') carouselRef!: ElementRef<HTMLDivElement>;
  private scrollInterval: any;
  private scrollStep = 320; // Adjust based on your card width + gap
  private scrollDelay = 2000; // 3 seconds

  ngAfterViewInit() {
    this.scrollInterval = setInterval(() => {
      const carousel = this.carouselRef.nativeElement;

      if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
        // Scroll to start
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Scroll to next
        carousel.scrollBy({ left: this.scrollStep, behavior: 'smooth' });
      }
    }, this.scrollDelay);
  }

  ngOnDestroy() {
    clearInterval(this.scrollInterval); // Clean up on destroy
  }
}