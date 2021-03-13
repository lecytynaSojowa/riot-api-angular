import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerName } from 'src/app/_models/server-name';
import { SummonerByNameResult } from 'src/app/_models/summoner-by-name-result';
import { BasicRiotApiService } from 'src/app/_services/basic-riot-api.service';
import { DragonDataService } from 'src/app/_services/dragon-data.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  public currentSummoner: SummonerByNameResult;
  public inputUsername: string;
  public serverName: string;
  public server: ServerName;
  public displayErrorAlert = false;
  public errorMessage = 'Check your info!';
  public basicServerName: ServerName[] = [{ value: 'EUNE', label: 'European Nordic East' }, { value: 'EUW', label: 'European West' }, { value: 'NA', label: 'North America' }];


  constructor(
    private basicRiotApiService: BasicRiotApiService,
    private dragonService: DragonDataService,
    private route: ActivatedRoute) {
  }

  // onSubmit(form: NgForm) {
  //   this.inputUsername = form.value.summonerName;
  //   this.server = form.value.serverName;
  //   this.route.navigate([`/profile/${this.server}/${this.inputUsername}`]);
  // }

  // onClear() {
  //   this.carForm.reset();
  //   this.currentSummoner = null;
  // }

  ngOnInit() {
    this.inputUsername = this.route.snapshot.paramMap.get('username');
    this.serverName = this.route.snapshot.paramMap.get('server');
    this.getSummonerInfo(this.inputUsername, this.serverName);
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
