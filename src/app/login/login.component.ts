import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  elementUrl = 'assets/elements/ng-web-comp-first-element.js';

  constructor() { }

  ngOnInit() {
  }

}
