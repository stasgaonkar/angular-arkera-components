import { Injectable } from '@angular/core';
import 'rxjs/add/operator/share';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SpinnerService {
  public status = new BehaviorSubject<boolean>(false);
  public _active:boolean = false;

  public get active():boolean {
    return this._active;
  }

  public set active(v:boolean) {
    this._active = v;
    this.status.next(v);
  }

  public start():void {
    this.active = true;
  }

  public stop():void {
    this.active = false;
  }
}