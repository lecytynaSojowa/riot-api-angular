import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { appRouters } from './routers';
import { DefaultComponent } from './default/default.component';
import { ProfileComponent } from './profile/profile.component';
import { UserInfoComponent } from './profile/user-info/user-info.component';
import { UserAnalysisComponent } from './profile/user-analysis/user-analysis.component';
import { UserMatchesComponent } from './profile/user-matches/user-matches.component';
import { UserMatchComponent } from './profile/user-matches/user-match/user-match.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPanelComponent,
    UserMatchesComponent,
    UserMatchComponent,
    DefaultComponent,
    ProfileComponent,
    UserInfoComponent,
    UserAnalysisComponent
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
