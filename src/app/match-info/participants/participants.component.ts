import { Component, Input, OnInit } from '@angular/core';
import { Match } from 'src/app/_models/match';
import { SingleParticipant } from 'src/app/_models/matchFull';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {
  @Input() match: Match;
  public singleParticipant: SingleParticipant[] = [];

  constructor() { }

  ngOnInit() {
    let allParticipants = this.match.matchInfo.participants;
    let participantIdentities = this.match.matchInfo.participantIdentities;
    let teams = this.match.matchInfo.teams;
    participantIdentities.forEach(participant => {
      let findParticipant = allParticipants.find((element) => {
        return element.participantId === participant.participantId;
      });
      let findTeam = teams.find((element) => {
        return element.teamId === findParticipant.teamId;
      });
      this.singleParticipant.push({participant: findParticipant, participantIdentities: participant, team: findTeam});
    });
  }

}
