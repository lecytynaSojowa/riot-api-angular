import { Component, OnInit, Input } from '@angular/core';
import { Match } from 'src/app/_models/match';
import { TitleCasePipe } from '@angular/common';
import { DragonDataService } from 'src/app/_services/dragon-data.service';

@Component({
  selector: 'app-user-match',
  templateUrl: './user-match.component.html',
  styleUrls: ['./user-match.component.scss']
})
export class UserMatchComponent implements OnInit {
  @Input() match: Match;
  public kills = 0;
  public deaths = 0;
  public assists = 0;
  public kd = 0;
  public items: number[] = [];
  constructor(private titlecasePipe: TitleCasePipe,
    private dragonService: DragonDataService) { }

  ngOnInit() {
    const summonerName = localStorage.getItem('summonerName');
    const participantIdentity = this.match.matchInfo.participantIdentities.find((participantIdentity) => {
      return participantIdentity.player.summonerName === summonerName;
    });
    const participantId = participantIdentity.participantId;
    const participant = this.match.matchInfo.participants.find((participant) => {
      return participant.participantId === participantId;
    });
    this.kills = participant.stats.kills;
    this.deaths = participant.stats.deaths;
    this.assists = participant.stats.assists;
    this.kd = (this.kills + this.assists) / this.deaths;
    this.items.push(participant.stats.item0, participant.stats.item1, participant.stats.item2, participant.stats.item3, participant.stats.item4, participant.stats.item5, participant.stats.item6);

  }

  public returnChampionUrl(): string {
    let championName = this.match.championName.replace(`'`, '');
    championName = this.titlecasePipe.transform(championName);
    championName = championName.replace(' ', '');
    if (championName === 'Wukong') {
      championName = 'MonkeyKing';
    }
    if (championName === 'JarvanIv') {
      championName = 'JarvanIV';
    }
    return `https://ddragon.leagueoflegends.com/cdn/${this.dragonService.getLastDDVer()}/img/champion/${championName}.png`;
  }
}
