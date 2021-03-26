import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welkin-header',
  templateUrl: './welkin-header.component.html',
  styleUrls: ['./welkin-header.component.scss']
})
export class WelkinHeaderComponent implements OnInit {

  scrolledDown = false;

  constructor() { }

  ngOnInit(): void {
  }

}
