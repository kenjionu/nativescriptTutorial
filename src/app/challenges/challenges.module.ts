import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ChallengesRoutingModule } from './challenges.routing.module';
import { ChallengeTabsComponent } from './challenge-tabs/challenge-tabs.component';
import { CurrentChallengeComponent } from './current-challenges-component/current-challenges.component';
import { TodayComponent } from './today/today.component';
import { SharedModule } from '../shared/ui/shared.module';
import { ChallengeActionsModule } from './challenge-actions/challenge-actions.module';
import { NativeScriptCommonModule } from '@nativescript/angular';

@NgModule({
  declarations: [
    ChallengeTabsComponent,
    CurrentChallengeComponent,
    TodayComponent
  ],
  imports: [
    NativeScriptCommonModule,
    ChallengesRoutingModule,
    SharedModule,
    ChallengeActionsModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ChallengesModule {}
