import { Component, OnInit, ViewChild } from '@angular/core';
import { BasicRiotApiService } from '../_services/basic-riot-api.service';
import { SummonerByNameResult } from '../_models/summoner-by-name-result';
import { NgForm } from '@angular/forms';
import { ServerName } from '../_models/server-name';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {
  public currentSummoner: SummonerByNameResult;
  public inputUsername: string;
  public server: ServerName;
  // tslint:disable-next-line: max-line-length
  public basicServerName: ServerName[] = [{ value: 'EUNE', label: 'European Nordic East' }, { value: 'EUW', label: 'European West' }, { value: 'NA', label: 'North America' }];
  constructor(
    private basicRiotApiService: BasicRiotApiService) {
  }

  @ViewChild('form', { static: false }) carForm: NgForm;

  onSubmit(form: NgForm) {
    this.getSummonerInfo(form.value.summonerName, form.value.serverName);
  }

  onClear() {
    this.carForm.reset();
  }

  ngOnInit() {
  }

  public getSummonerInfo(summonerName: string, summonerServer: string) {
    this.basicRiotApiService.summonerByNameExample(summonerName, summonerServer).subscribe((result: SummonerByNameResult) => {
      this.currentSummoner = result;
    });

  }
  public submitUsername() {
    console.log(this.inputUsername);
  }

}
