import { Component, Input, OnInit } from '@angular/core';
import { Match } from 'src/app/_models/match';
import { SingleParticipant } from 'src/app/_models/matchFull';
import { TrueMatch } from 'src/app/_models/true-match';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {
  @Input() match: TrueMatch;
  public singleParticipant: SingleParticipant[] = [];

  constructor() { }

  ngOnInit() {
    let allParticipants = this.match.participants;
    let participantIdentities = this.match.participantIdentities;
    let teams = this.match.teams;
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
