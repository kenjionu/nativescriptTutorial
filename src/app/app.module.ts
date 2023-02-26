import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptFormsModule, NativeScriptModule } from '@nativescript/angular'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'
// import { CurrentChallengesComponent } from './challenges/current-challenges-component/current-challenges-component'
// import { ChallengeEditComponent } from './challenges/challenge-edit/challenge-edit.component'
// import { ChallengeTabsComponent } from './challenges/challenge-tabs/challenge-tabs.component'
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular'
// import { StackComponent } from './layouts/stack/stack.component'
// import { FlexboxComponent } from './layouts/flexbox/flexbox.component'
// import { GridComponent } from './layouts/grid/grid.component'
// import { AbsoluteComponent } from './layouts/absolute/absolute.component'
import { AuthComponent } from './auth/auth.component'
import { DayModalComponent } from './challenges/day-modal/day-modal.component'
import { SharedModule } from './shared/ui/shared.module';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule, 
    NativeScriptUISideDrawerModule, 
    AppRoutingModule, 
    SharedModule],
  declarations: [
    AppComponent, 
    AuthComponent,
    DayModalComponent,
    ItemsComponent,
    ItemDetailComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [DayModalComponent],
})
export class AppModule {}
