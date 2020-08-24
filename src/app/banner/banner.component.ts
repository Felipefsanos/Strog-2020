import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  slides = [];

  constructor() { }

  ngOnInit() {
    this.slides.push('../../assets/banners/Banner_PromoChicken.png');
    this.slides.push('../../assets/banners/Banner_PromoChicken.png');
    this.slides.push('../../assets/banners/Banner_PromoChicken.png');
  }

}
