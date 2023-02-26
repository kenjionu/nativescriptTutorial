import { NgModule } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptRouterModule } from "@nativescript/angular";
import { ActionBarUIComponent } from "./action-bar/action-bar.component";
@NgModule({
    imports: [NativeScriptCommonModule, NativeScriptRouterModule],
    declarations: [ActionBarUIComponent],
    exports: [ActionBarUIComponent]
})

export class SharedModule{

}