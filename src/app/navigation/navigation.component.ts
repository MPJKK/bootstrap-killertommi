import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
    navbarCollapsed = true; // tarkkailee onko menu auki vai kiinni, aluksi sivulle tultaessa navbar collapsed on true eli kiinni
  constructor() { }

  ngOnInit() {
  }

}
