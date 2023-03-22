import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { ChallengeEditComponent } from './challenge-edit.component'
import { SharedModule } from './../../shared/ui/shared.module'
import { NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptRouterModule } from '@nativescript/angular'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
    declarations: [ChallengeEditComponent],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        ReactiveFormsModule,
        // NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
          { path: '', component: ChallengeEditComponent }
        ]),
        SharedModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })

export class ChallengeEditModule {}