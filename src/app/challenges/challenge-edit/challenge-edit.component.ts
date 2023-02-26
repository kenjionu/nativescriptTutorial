import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { PageRoute } from '@nativescript/angular';

@Component({
  selector: 'ns-challenge-edit',
  styleUrls: ['./challenge-edit.component.scss'],
  templateUrl: './challenge-edit.component.html',
  moduleId: module.id
})
export class ChallengeEditComponent implements OnInit {
  isCreating = true;
  constructor(private activatedRoute: ActivatedRoute,
    private pageRoute: PageRoute) {}
//     @Output() input = new EventEmitter<string>();
//     challengeDescription:string;
//   constructor() {}

  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe(paramMap => {
    //   console.log(paramMap.get('mode'))
    // })
    this.pageRoute.activatedRoute.subscribe(activatedRoute => {
      activatedRoute.paramMap.subscribe(paramMap => {
              if(!paramMap.has('mode')) {
                this.isCreating = true;
              } else {
                this.isCreating = paramMap.get('mode') !== 'edit';
              }
      })
    })
  }

//   onSetChallenge(){
//     this.input.emit(this.challengeDescription)

//   }


}
