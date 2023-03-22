import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, last, take } from 'rxjs';
import { Challenge } from './challenges.model';
import { DayStatus } from './day.model';

@Injectable({ providedIn: 'root' })
export class ChallengeService { 

    constructor(private http: HttpClient) {

    }


    private _currentChallenge = new BehaviorSubject<Challenge>(null);

    get currentChallenge(){
        return this._currentChallenge.asObservable();
    }
    createNewChallenge(title: string, description: string){
        const newChallenge = new Challenge(title, description, new Date().getFullYear(), new Date().getMonth());
        // Save it to server
        this.http.put('https://ns-ng-course-e4961-default-rtdb.firebaseio.com/challenge.json', newChallenge)
        .subscribe(res => {
            console.log(res)
        });
        this._currentChallenge.next(newChallenge)
    }

    updateChallenge(title: string, description: string){
        this._currentChallenge.pipe(take(1)).subscribe(challenge => {
            const updatedChallenge = new Challenge(
                title, description, challenge.year, challenge.month, challenge.days
        );

        this._currentChallenge.next(updatedChallenge);
    });
}

    updateDayStatus(dayInMonth: number, status: DayStatus){
        this._currentChallenge.pipe(take(1)).subscribe(challenge =>{
            if(!challenge || challenge.days.length < dayInMonth) {
                return;
            }
            const dayIndex = challenge.days.findIndex(
                d => d.dayInMonth === dayInMonth
                );
                challenge.days[dayIndex].status = status;
                this._currentChallenge.next(challenge)
                console.log(challenge.days[dayIndex])
        });
    }
}