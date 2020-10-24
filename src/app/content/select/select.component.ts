import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  hamburgerAnimation = false;
  dolarAnimation = false;
  truckAnimation = false;
  heartAnimation = false;

  constructor() { }

  ngOnInit() {
  }

  teste(event: MouseEvent){
    this.hamburgerAnimation = !this.hamburgerAnimation;
  }

}
