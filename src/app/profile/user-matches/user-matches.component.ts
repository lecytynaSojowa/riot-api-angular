import { Component, OnInit, Input } from '@angular/core';
import { BasicRiotApiService } from 'src/app/_services/basic-riot-api.service';
import { Match } from 'src/app/_models/match';

@Component({
  selector: 'app-user-matches',
  templateUrl: './user-matches.component.html',
  styleUrls: ['./user-matches.component.scss']
})
export class UserMatchesComponent implements OnInit {
  public matches: Match[];
  @Input() summonerName: string;
  @Input() serverName: string;

  constructor(
    private basicRiotApiService: BasicRiotApiService) { }

  ngOnInit() {
    this.getMatchesInfo();
  }

  public getMatchesInfo() {
    this.basicRiotApiService.matchesBySummonerName(this.summonerName, this.serverName).subscribe((result: Match[]) => {
      if(result) {
        this.matches = result;
      }
    });
  }

}
