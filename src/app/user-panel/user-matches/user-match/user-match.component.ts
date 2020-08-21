import { Component, OnInit, Input } from '@angular/core';
import { Match } from 'src/app/_models/match';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-user-match',
  templateUrl: './user-match.component.html',
  styleUrls: ['./user-match.component.scss']
})
export class UserMatchComponent implements OnInit {
  @Input() match: Match;
  constructor(private titlecasePipe: TitleCasePipe) { }

  ngOnInit() {
  }

  public returnChampionUrl(): string {
    let championId = this.match.championName.replace(`'`, '');
    championId = this.titlecasePipe.transform(championId);
    return `https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/${championId}.png`;
  }
}
