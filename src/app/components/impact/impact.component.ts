import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-impact',
  templateUrl: './impact.component.html'
})
export class ImpactComponent implements OnInit, AfterViewInit {
  @ViewChild('impactSection', { static: true }) impactSection!: ElementRef;

  stats = [
    { number: '10000+', label: 'Beneficiaries Reached', current: 0 },
    { number: '50+', label: 'Communities Served', current: 0 },
    { number: '200+', label: 'Dedicated Volunteers', current: 0 },
    { number: '25+', label: 'Partner Organizations', current: 0 }
  ];

  hasAnimated = false;

  ngOnInit() {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.hasAnimated) {
          this.animateStats();
          this.hasAnimated = true;
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(this.impactSection.nativeElement);
  }

  animateStats() {
    this.stats.forEach((stat) => {
      const rawNumber = parseInt(stat.number.replace(/\D/g, ''), 10);
      const duration = 3000;
      const frameRate = 30;
      const totalFrames = duration / (1000 / frameRate);
      let frame = 0;

      const countUp = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        stat.current = Math.floor(rawNumber * progress);

        if (frame === totalFrames) {
          stat.current = rawNumber;
          clearInterval(countUp);
        }
      }, 1000 / frameRate);
    });
  }
}
