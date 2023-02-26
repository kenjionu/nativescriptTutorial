import { NgModule } from '@angular/core'
import { NativeScriptRouterModule } from '@nativescript/angular';
import { Routes } from '@angular/router';
import { ChallengeTabsComponent } from './challenge-tabs/challenge-tabs.component'
import { CurrentChallengesComponent } from "./current-challenges-component/current-challenges-component";
import { TodayComponent } from "./today/today.component";
import { ChallengeEditComponent } from "./challenge-edit/challenge-edit.component";

const routes: Routes = [
  {
    path: 'tabs',
    component: ChallengeTabsComponent,
    children: [
      { path: 'today', component: TodayComponent, outlet: 'today'},
      {
        path: 'current-challenge',
        component: CurrentChallengesComponent,
        outlet: 'currentChallenge'
      }
    ]
  },
  {
    path: ':mode', component: ChallengeEditComponent},
  { path: '', redirectTo: '/challenges/tabs', pathMatch: 'full'}
];
    // { path: 'challenges', children: [
    //     { path: 'tabs', component: ChallengeTabsComponent, children: [
    //     { path: 'current-challenge', component: CurrentChallengesComponent, outlet: 'currentChallenge' },
    //     { path: 'today', component: TodayComponent, outlet: 'today' },
    //     ]},
    //     { path: ':mode', component: ChallengeEditComponent},
    //     { path: '', redirectTo: '/challenges/tabs', pathMatch: 'full'}
        
    //   ]
    // }


@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class ChallengeRoutingModule {

}
