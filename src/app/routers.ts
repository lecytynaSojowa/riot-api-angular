import { Routes } from '@angular/router';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { MatchInfoComponent } from './match-info/match-info.component';
import { MatchInfoResolverService } from './_resolver/match-info-resolver.service';
export const appRouters: Routes = [{
    path: '', component: UserPanelComponent,
},
{
    path: 'match/:id', component: MatchInfoComponent,
    resolve: {
        MatchFull: MatchInfoResolverService
    }
},
{
    path: '**', redirectTo: '', pathMatch: 'full'
}
]