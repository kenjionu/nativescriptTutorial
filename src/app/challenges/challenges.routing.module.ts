import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';


import { ChallengeTabsComponent } from './challenge-tabs/challenge-tabs.component';
import { TodayComponent } from './today/today.component';
import { CurrentChallengeComponent } from './current-challenges-component/current-challenges.component';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { ChallengeEditModule } from './challenge-edit/challenge-edit.module'

const routes: Routes = [
  {
    path: 'tabs',
    component: ChallengeTabsComponent,
    children: [
      { path: 'today', component: TodayComponent, outlet: 'today' },
      {
        path: 'current-challenge',
        component: CurrentChallengeComponent,
        outlet: 'currentChallenge'
      }
    ]
  },
  {
    path: ':mode',
    loadChildren: () =>  ChallengeEditModule
 
    // loadChildren:
    //   '~/app/challenges/challenge-edit/challenge-edit.module#ChallengeEditModule'
  },
  { path: '', redirectTo: '/challenges/tabs', pathMatch: 'full' }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class ChallengesRoutingModule {}
