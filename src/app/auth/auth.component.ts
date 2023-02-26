import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'ns-auth',
  styleUrls: ['./auth.component.scss'],
  templateUrl: './auth.component.html',
  moduleId: module.id
})
export class AuthComponent implements OnInit {
    constructor(private router: RouterExtensions){

    }
//     @Output() input = new EventEmitter<string>();
//     challengeDescription:string;
//   constructor() {}

  ngOnInit(): void {
  }

  
  onSignin() {
    this.router.navigate(['/today'], { clearHistory: true });
  }
  // onSignin(){
  //   this.router.navigate(['/today'], { clearHistory: true })
  // }
//   onSetChallenge(){
//     this.input.emit(this.challengeDescription)

//   }


}
