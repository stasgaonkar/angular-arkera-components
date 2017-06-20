import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { milliSecondToTime } from '../../utils/utils';

@Component({
  selector: 'article-read-time',
  templateUrl: 'article-read-time.component.html',
  styleUrls: ['article-read-time.component.scss']
})

export class ArticleReadTimeComponent implements OnInit {
  min_read: any;
  @Input() read_time: any;

  ngOnInit() {
    this.min_read = milliSecondToTime(this.read_time);
  }

}
