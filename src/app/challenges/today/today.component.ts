import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'ns-today',
  styleUrls: ['./today.component.scss'],
  templateUrl: './today.component.html',
  moduleId: module.id
})
export class TodayComponent implements OnInit {
    constructor(private router: RouterExtensions){

    }
//     @Output() input = new EventEmitter<string>();
//     challengeDescription:string;
//   constructor() {}

  ngOnInit(): void {
  }

  onSignin(){
    this.router.navigate(['/items'], { clearHistory: true })
  }
//   onSetChallenge(){
//     this.input.emit(this.challengeDescription)

//   }


}
