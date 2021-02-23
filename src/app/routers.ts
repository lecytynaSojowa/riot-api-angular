import { Routes } from '@angular/router';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { ProfileComponent } from './profile/profile.component';
import { DefaultComponent } from './default/default.component';
export const appRouters: Routes = [{
    path: '', component: DefaultComponent,
},
{
    path: 'profile/:server/:username', component: ProfileComponent,
   
},
{
    path: '**', redirectTo: '', pathMatch: 'full'
}
]