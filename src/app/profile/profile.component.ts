import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  token: string;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.auth.accessToken$.subscribe(value => {
      console.log('Token subscribed');
      this.token = value;
    });
    // this.auth.localAuthSetup();
  }

}
