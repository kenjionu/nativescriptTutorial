import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { Page } from '@nativescript/core/ui/page';

@Component({
  selector: 'ns-challenge-tabs',
  styleUrls: ['./challenge-tabs.component.scss'],
  templateUrl: './challenge-tabs.component.html',
  moduleId: module.id
})
export class ChallengeTabsComponent implements OnInit {
    constructor(private router: RouterExtensions, private activated: ActivatedRoute,
        private page: Page){

    }

  ngOnInit(): void {
    this.router.navigate([{
        outlets: {
        currentChallenge: ['current-challenge'], 
        today:  ['today'] }}],
        
        {relativeTo: this.activated}
        );
        this.page.actionBarHidden = true;
  }



}
