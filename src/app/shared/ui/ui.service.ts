import { Injectable, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'
})
export class UIService {
    private _drawerState = new BehaviorSubject<boolean>(false);
    private _rootVCRef: ViewContainerRef;

    getRootVCRef(){
        return this._rootVCRef
    }

    get drawerState(){
        return this._drawerState.asObservable();
    }

    toggleDrawer(){
        this._drawerState.next(null)
    }

    setRootVCRef(vcRef: ViewContainerRef){
        this._rootVCRef = vcRef;
    }
}