import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  inputUsername: string = '';
  serverName: string = '';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.serverName = this.route.snapshot.paramMap.get('server');
    this.inputUsername =  this.route.snapshot.paramMap.get('username');
  }

}
