import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { UserMatchesComponent } from './user-panel/user-matches/user-matches.component';
import { UserMatchComponent } from './user-panel/user-matches/user-match/user-match.component';
import { TitleCasePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { appRouters } from './routers';
import { MatchInfoComponent } from './match-info/match-info.component';
import { ParticipantsComponent } from './match-info/participants/participants.component';
import { ParticipantComponent } from './match-info/participants/participant/participant.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPanelComponent,
    UserMatchesComponent,
    UserMatchComponent,
    MatchInfoComponent,
    ParticipantsComponent,
    ParticipantComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [
    TitleCasePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
