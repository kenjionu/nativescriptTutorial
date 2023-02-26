import { Component, ViewContainerRef } from '@angular/core'
import { ModalDialogService } from '@nativescript/angular';
import { ItemEventData } from '@nativescript/core/ui/list-view';
import { UIService } from '~/app/shared/ui/ui.service';
import { DayModalComponent } from '../day-modal/day-modal.component'
declare var android: any;

@Component({
  selector: 'ns-current-challenges',
  styleUrls: ['./current-challenges-component.scss'],
  templateUrl: './current-challenges-component.html',
  moduleId: module.id
})
export class CurrentChallengesComponent {
  constructor(
    private modalDialog: ModalDialogService,
    private vcRef: ViewContainerRef,
    private uiService: UIService) {}
  // constructor(private router: RouterExtensions) {}
  // @Input() challenges: string[] = [];  


  // onEdit(){
  //   this.router.navigate(['/challenges/edit'], {
  //     transition: {name: 'slideLeft'}
  //   })
  // }

  onChangeStatus(){
    this.modalDialog.showModal(DayModalComponent, {
      fullscreen: true, 
      viewContainerRef: this.uiService.getRootVCRef() 
        ? this.uiService.getRootVCRef() 
        : this.vcRef,
        context: { date: new Date()}
    }).then((
        action: string)=> {
          console.log(action)
      }
    );
  }


  onItemTap(args: ItemEventData){
    console.log(args)
  }
}
