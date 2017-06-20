import { Component,EventEmitter } from '@angular/core';
import { Output,HostListener } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { FeedService } from '../../services/feed.service';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'ak-feed',
  templateUrl: 'feed.component.html',
  providers: [ AuthenticationService, FeedService, SpinnerService ]
})
export class FeedComponent implements OnInit {
  articles:any = null;
  offset:number = 0;

  constructor(@Inject(AuthenticationService) public _authenticationService:AuthenticationService,
              @Inject(FeedService) public _feedService:FeedService,
              @Inject(SpinnerService) private _spinnerService:SpinnerService) {

  }

  ngOnInit() {
    this._spinnerService.start();
    this._authenticationService.login().subscribe((res:any) => {
      this.getArticle(false);
    });
  }

  getArticle(isAppend:boolean) {
    this._feedService.getArticle(this.offset).subscribe((items:any) => {
      if (isAppend) {
        this.articles = this.articles.concat(items.articles);
      } else {
        this.articles = items.articles;
      }
      setTimeout(() => {
        this._spinnerService.stop()
      }, 600);
    });
  }

  @HostListener("window:scroll", ["$event"])
  @HostListener('window:scroll')
  onScroll():void {
    if (!this._spinnerService.active) {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        this._spinnerService.start();
        this.offset = this.offset + 1;
        setTimeout(() => {
        window.scrollTo(0,document.body.scrollHeight);
        }, 100);
        this.getArticle(true);
      }
    }
  }
}
