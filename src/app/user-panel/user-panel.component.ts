import { Component, OnInit } from '@angular/core';
import { BasicRiotApiService } from '../_services/basic-riot-api.service';
import { SummonerByNameResult } from '../_models/summoner-by-name-result';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {
  public currentSummoner: SummonerByNameResult;
  constructor(
    private basicRiotApiService: BasicRiotApiService) { }

  ngOnInit() {
    let summoner = this.basicRiotApiService.summonerByNameExample('Artekat', 'EUNE').subscribe((result: SummonerByNameResult) => {
      this.currentSummoner = result;
      console.log(this.currentSummoner);
    });
  }

}
