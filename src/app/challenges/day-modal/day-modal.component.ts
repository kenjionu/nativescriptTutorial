import { Component, OnInit} from '@angular/core'
import { ModalDialogParams, RouterExtensions } from '@nativescript/angular';

declare var android: any;

@Component({
  selector: 'ns-day.modal',
  styleUrls: ['./day-modal.component.scss'],
  templateUrl: './day-modal.component.html',
  moduleId: module.id
})
export class DayModalComponent implements OnInit{
  loadedDate: Date;
  constructor(
    private router: RouterExtensions,
    private modalParams: ModalDialogParams) {}
  // @Input() challenges: string[] = [];  

  ngOnInit():void{
    this.loadedDate = (this.modalParams.context as {date: Date}).date
  }
  onHandleInput(action: string):void{
    this.modalParams.closeCallback(action)
  }
}
