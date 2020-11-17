import { Component, OnInit, ViewChild } from '@angular/core';
import { BasicRiotApiService } from '../_services/basic-riot-api.service';
import { SummonerByNameResult } from '../_models/summoner-by-name-result';
import { NgForm } from '@angular/forms';
import { ServerName } from '../_models/server-name';
import { DragonDataService } from '../_services/dragon-data.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {
  public currentSummoner: SummonerByNameResult;
  public inputUsername: string;
  public server: ServerName;
  public displayErrorAlert = false;
  public errorMessage = 'Check your info!';
  // tslint:disable-next-line: max-line-length
  public basicServerName: ServerName[] = [{ value: 'EUNE', label: 'European Nordic East' }, { value: 'EUW', label: 'European West' }, { value: 'NA', label: 'North America' }];
  constructor(
    private basicRiotApiService: BasicRiotApiService,
    private dragonService: DragonDataService) {
  }

  @ViewChild('form', { static: false }) carForm: NgForm;

  onSubmit(form: NgForm) {
    this.inputUsername = form.value.summonerName;
    this.server = form.value.serverName;
    this.getSummonerInfo(form.value.summonerName, form.value.serverName);
  }

  onClear() {
    this.carForm.reset();
    this.currentSummoner = null;
  }

  ngOnInit() {
  }

  public getSummonerInfo(summonerName: string, serverName: string) {
    this.basicRiotApiService.summonerByNameExample(summonerName, serverName).subscribe((result: SummonerByNameResult) => {
      this.currentSummoner = result;
      if (!result) {
        this.ifFailRequest();
      } else {
        localStorage.setItem('summonerName', summonerName);
        localStorage.setItem('serverName', serverName);
      }
    }, (error: any) => {
      if (error.status === 403) {
        this.ifFailRequest(error.error);
      } else {
        this.ifFailRequest();
      }

    });

  }
  public submitUsername() {
    console.log(this.inputUsername);
  }

  public ifFailRequest(message?: string) {
    if (message) {
      this.errorMessage = message;
    }
    this.displayErrorAlert = true;
    setTimeout(() => this.displayErrorAlert = false, 5000);
  }

  public displayPlayerIcon(): string {
    return `https://ddragon.leagueoflegends.com/cdn/${this.dragonService.getLastDDVer()}/img/profileicon/${this.currentSummoner.profileIconId}.png`
  }
}
