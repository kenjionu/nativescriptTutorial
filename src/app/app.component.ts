import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular';
import { Subscription } from 'rxjs';
import { UIService } from './shared/ui/ui.service';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy{
  @ViewChild(RadSideDrawerComponent) drawerComponent;
  activesChallenges: string[] = [];
  private drawerSub: Subscription;
  private drawer: RadSideDrawer;
  private vcRef: ViewContainerRef;

  constructor(private uiService: UIService, private changeDetectionRef: ChangeDetectorRef){

  }
  ngOnInit(): void {
    this.drawerSub = this.uiService.drawerState.subscribe(() =>{ 
      if(this.drawer){
        this.drawer.toggleDrawerState();
      }
    });
    this.uiService.setRootVCRef(this.vcRef);
    console.log("'toggle sidedrawer")
    
  }

  ngAfterViewInit(): void {

    this.drawer = this.drawerComponent.sideDrawer;

    this.changeDetectionRef.detectChanges();
  }



  onLogout(){
    this.uiService.toggleDrawer();
  }

  onChallengeInput(challengeDescription: string){
  this.activesChallenges.push(challengeDescription)
  console.log(challengeDescription)
  }
  ngOnDestroy(): void {
    if (this.drawerSub) {
      this.drawerSub.unsubscribe();
    }
    
  }
}
