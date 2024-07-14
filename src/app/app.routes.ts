import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CommunityComponent} from "./community/community.component";
import {AccountCreationComponent} from "./account-creation/account-creation.component";
import {GeneralUsageComponent} from "./general-usage/general-usage.component";
import {JobSearchComponent} from "./job-search/job-search.component";

export const routes: Routes = [
  { path: '',
    component: GeneralUsageComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'empleos', component: JobSearchComponent },
      { path: 'comunidad', component: CommunityComponent }
    ]
  },
  { path: 'crear-cuenta', component: AccountCreationComponent }
];
