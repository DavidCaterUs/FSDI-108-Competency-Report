import { Component, OnInit } from '@angular/core';
import { SharedService } from './../services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  someVarHere = false;

  constructor(private shared: SharedService) {
 this.someVarHere = this.shared.isLogged();
}

  ngOnInit() {}


getLoggedState(){
  return this.shared.isLogged();
  }
}
