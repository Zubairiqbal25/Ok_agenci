import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public countries:any = countries;
  constructor(){}

  ngOnInit(): void {

  }
  SideNavBtn(){

  }
}
export interface Countries {
    code: string
    code3: string
    name: string
    number: string
    Url:string
}

export var countries: Countries [] = [
  { code: "UK", code3: "UK", name: "UK",Url:"../../../assets/united-kingdom.png", number: "002" },
  { code: "US", code3: "US", name: "USA",Url:"../../../assets/united-states.png", number: "001" },
  { code: "PK", code3: "PK", name: "PAK",Url:"../../../assets/pakistan.png", number: "012" },
];