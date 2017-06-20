import { Component } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';
import { Inject } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'ak-spinner',
  templateUrl: 'spinner.component.html',
  styleUrls: ['spinner.component.scss']
})
export class SpinnerComponent implements AfterViewInit {
  public active:boolean = true;
  public message:string = null;
  blades:Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  public constructor(@Inject(SpinnerService) private _spinnerService:SpinnerService) {
  }

  ngAfterViewInit() {
    window.setTimeout(() =>
        this._spinnerService.status.subscribe((status:boolean) => {
          this.active = status;
        })
    );
  }
}
