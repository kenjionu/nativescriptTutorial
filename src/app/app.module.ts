import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptFormsModule, NativeScriptModule } from '@nativescript/angular'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular'
import { AuthComponent } from './auth/auth.component'
import { DayModalComponent } from './challenges/day-modal/day-modal.component'
import { SharedModule } from './shared/ui/shared.module';
import { ChallengeActionsModule } from './challenges/challenge-actions/challenge-actions.module'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule, 
    NativeScriptUISideDrawerModule, 
    ReactiveFormsModule,
    AppRoutingModule, 
    SharedModule,
    ChallengeActionsModule
  ],
  declarations: [
    AppComponent, 
    AuthComponent,
    DayModalComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [DayModalComponent],
})
export class AppModule {}
