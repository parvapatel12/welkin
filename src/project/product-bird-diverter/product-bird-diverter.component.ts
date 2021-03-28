import {Component, HostListener, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {min} from 'rxjs/operators';

@Component({
  selector: 'app-product-bird-diverter',
  templateUrl: './product-bird-diverter.component.html',
  styleUrls: ['./product-bird-diverter.component.scss'],
  animations: [
    trigger(
        'inOutAnimation',
        [
          transition(
              ':enter',
              [
                style({ transform: 'translateY(40px)', opacity: 0}),
                animate('0.6s ease-out',
                    style({ transform: 'translateY(0px)', opacity: 1}))
              ]
          ),
          transition(
              ':leave',
              [
                style({ transform: 'translateY(0px)', opacity: 1}),
                animate('0.6s ease-in',
                    style({ transform: 'translateY(-40px)', opacity: 0}))
              ]
          )
        ]
    )
  ],
})
export class ProductBirdDiverterComponent implements OnInit {

    scrolledDown = false;
    clampDiv: any;
    featuresSubsection: any;

  constructor() { }

  ngOnInit(): void {
      this.clampDiv = document.getElementById('eff-clamp');
      this.featuresSubsection = document.getElementById('features-subsection');
  }

  getMinimum(a: number, b: number): number {
      return a < b ? a : b;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any){
      if (window.scrollY > 100) {
          this.scrolledDown = true;
      } else {
          this.scrolledDown = false;
      }
      if (window.scrollY >= 845) {
          this.featuresSubsection.style.overflow = 'auto';
      } else {
          this.featuresSubsection.style.overflow = 'hidden';
      }
      this.clampDiv.style.padding = this.getMinimum(50, window.scrollY/20) + 'px';
  }


    featuresSubsectionScrolled($event: any) {
        // console.log($event.target.scrollTop);
        if ($event.target.scrollTop > 0) {
            // @ts-ignore
            document.querySelector('body').style.overflow = 'hidden';
        } else {
            // @ts-ignore
            document.querySelector('body').style.overflow = 'auto';
        }
    }

}
