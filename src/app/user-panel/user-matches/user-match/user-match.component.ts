import { Component, OnInit, Input } from '@angular/core';
import { Match } from 'src/app/_models/match';

@Component({
  selector: 'app-user-match',
  templateUrl: './user-match.component.html',
  styleUrls: ['./user-match.component.scss']
})
export class UserMatchComponent implements OnInit {
  @Input() match: Match;
  constructor() { }

  ngOnInit() {
  }

}
