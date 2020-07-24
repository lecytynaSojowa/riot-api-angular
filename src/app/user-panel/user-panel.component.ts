import { Component, OnInit } from '@angular/core';
import { BasicRiotApiService } from '../_services/basic-riot-api.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {

  constructor(
    private basicRiotApiService: BasicRiotApiService) { }

  ngOnInit() {
    this.basicRiotApiService.summonerByNameExample();
  }

}
