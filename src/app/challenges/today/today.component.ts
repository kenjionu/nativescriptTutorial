import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs';
import { ChallengeService } from '../challenges.service'
import { Day, DayStatus } from '../day.model';

@Component({
  selector: 'ns-today',
  styleUrls: ['./today.component.scss'],
  templateUrl: './today.component.html',
  moduleId: module.id
})
export class TodayComponent implements OnInit {
  currentDay: Day;
  private curChallengeSub: Subscription;
  
    constructor(private challengeService: ChallengeService){

    }

  ngOnInit() {
    this.curChallengeSub = this.challengeService.currentChallenge.subscribe(
      challenge => {
        if (challenge) {
          this.currentDay = challenge.currentDay;
        }
      }
    );
  }
  

  onActionSelected(action: DayStatus):void {
    this.challengeService.updateDayStatus(this.currentDay.dayInMonth, action)
  }

  getActionName(){
    if (this.currentDay.status === DayStatus.Completed) {
      return 'complete';
    }
    if (this.currentDay.status === DayStatus.Failed) {
      return 'fail';
    }
    return null;
  }
  ngOnDestroy(){
    if(this.curChallengeSub){
      this.curChallengeSub.unsubscribe();

    }
  }



}
