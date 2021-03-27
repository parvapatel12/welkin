import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

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
    showProduct = false;

  constructor() { }

  ngOnInit(): void {
      setInterval(() => {
          this.showProduct = !this.showProduct;
      }, 2000);
  }

}
