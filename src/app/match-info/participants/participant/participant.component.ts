import { Component, Input, OnInit } from '@angular/core';
import { SingleParticipant } from 'src/app/_models/matchFull';
import { DragonDataService } from 'src/app/_services/dragon-data.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantComponent implements OnInit {
  @Input() singleParticipant: SingleParticipant;

  public items: number[] = [];
  constructor(private dragonService: DragonDataService) { }

  ngOnInit() {
    this.items.push(this.singleParticipant.participant.stats.item0);
    this.items.push(this.singleParticipant.participant.stats.item1);
    this.items.push(this.singleParticipant.participant.stats.item2);
    this.items.push(this.singleParticipant.participant.stats.item3);
    this.items.push(this.singleParticipant.participant.stats.item4);
    this.items.push(this.singleParticipant.participant.stats.item5);
    this.items.push(this.singleParticipant.participant.stats.item6);

  }

  public winOrLose(): boolean {
    if (this.singleParticipant.team.win === 'Win') {
      return true;
    }
    return false;
  }

  public displayPlayerIcon(): string {
    let iconUrl = this.dragonService.getLastDDVer();
    return `https://ddragon.leagueoflegends.com/cdn/${iconUrl}/img/profileicon/${this.singleParticipant.participantIdentities.player.profileIcon}.png`;
  }

  public kdaNumber() {
    const kills = this.singleParticipant.participant.stats.kills;
    const assists = this.singleParticipant.participant.stats.assists;
    const deaths = this.singleParticipant.participant.stats.deaths;
    return (kills + assists) / deaths;
  }

  public redirectToUser(): void {
    let summonerName = this.singleParticipant.participantIdentities.player.summonerName;
    localStorage.setItem('summonerName', summonerName);
    window.location.reload();
  }

  public returnItemName(item: number): string {
    return `https://ddragon.leagueoflegends.com/cdn/${this.dragonService.getLastDDVer()}/img/item/${item}.png`;
  }

}
