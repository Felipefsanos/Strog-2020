import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnChanges {

  mobileNavigation = false;

  constructor() { }

  ngOnInit() {
    const togglerButton = (document.getElementById('navToggler') as HTMLButtonElement);
    this.mobileNavigation = togglerButton.hidden;
  }

  ngOnChanges(changes: SimpleChanges): void {
    debugger;
  }

}
