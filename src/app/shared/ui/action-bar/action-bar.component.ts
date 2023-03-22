import { Component, Input, OnInit } from '@angular/core'
import { Page } from '@nativescript/core/ui/page';
import { isAndroid } from '@nativescript/core';
import { UIService } from '../ui.service';
import { RouterExtensions } from '@nativescript/angular';
declare var android: any;

@Component({
  selector: 'ns-action-bar',
  styleUrls: ['./action-bar.component.scss'],
  templateUrl: './action-bar.component.html',
  moduleId: module.id
})
export class ActionBarUIComponent implements OnInit {
  constructor(private router: RouterExtensions, private page: Page,
    private uiService: UIService) {}
  @Input() title: string[] = [];
  @Input() showBackButton = true;
  @Input() hasMenu = true;

  ngOnInit(){}
/** añadiendo la funcionalidad para regresar al button */
  get canGoBack(){
    return this.router.canGoBack() && this.showBackButton;
  }

  onGoBack(){
    this.router.backToPreviousPage();
  } 
  /** endbackbutton */

/** Mientras que se añade la carga de este se pone dependiendo el dispositivo
 * que icono debe manejar hay una propiedad den nativescript (loaded) que sirve
 * dar a funcionalidad que se cargue dicho componente
 */
onLoadedActionBar(){
    if (isAndroid){
      const androidToolbar = this.page.actionBar.nativeView;
      const backButton = androidToolbar.getNavigationIcon();
      let color = '#171717';
    if(this.hasMenu) {
      color = '#FFFFFF';
    }
      if(backButton){
        backButton.setColorFilter(
          android.graphics.Color.parseColor(color), 
          (<any>android.graphics).PorterDuff.Mode.SRC_ATOP);
      }
    }
  }

  get android(){
    return isAndroid;
  }

  OnToggleMenu(){
    this.uiService.toggleDrawer();
  }
}
/** endonLoadedActionBar */

