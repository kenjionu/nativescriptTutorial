import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
// import { NativeScriptRouterModule } from 'nativescript-ui-sidedrawer'
import { ChallengeTabsComponent } from './challenge-tabs/challenge-tabs.component'
import { CurrentChallengesComponent } from "./current-challenges-component/current-challenges-component";
import { TodayComponent } from "./today/today.component";
import { ChallengeEditComponent } from "./challenge-edit/challenge-edit.component";
import { ChallengeRoutingModule  } from "./challenges.routing.module";
import { SharedModule } from '../shared/ui/shared.module';



@NgModule({
    declarations: [
        ChallengeEditComponent,
        ChallengeTabsComponent,
        CurrentChallengesComponent,
        TodayComponent,
    ],
    imports: [
        NativeScriptCommonModule, 
        ChallengeRoutingModule,
        SharedModule
    ],
    schemas: [NO_ERRORS_SCHEMA]
    
})



export class ChallengesModule {

}