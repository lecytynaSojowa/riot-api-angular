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

  constructor(private dragonService: DragonDataService ) { }

  ngOnInit() {
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
}
