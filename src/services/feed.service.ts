import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { addNoCacheParameter } from '../utils/utils';
import { addUpdateUrlParameter } from '../utils/utils';
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class FeedService {

  ARTICLE_API:string = 'https://carbon-api-staging.arkera.co/articles';

  constructor(@Inject(Http) private http:Http,
              @Inject(AuthenticationService) public authenticationService:AuthenticationService) {
  }

  getArticle(offset:number):Observable<any> {
    var endpoint:string = addUpdateUrlParameter(this.ARTICLE_API, 'limit', 5);
    endpoint = addUpdateUrlParameter(endpoint, 'offset', offset);
    endpoint = addUpdateUrlParameter(endpoint, 'readSession', '241497599329169');
    // endpoint = addUpdateUrlParameter(endpoint, 'generateReadSession', true);
    let headers = new Headers({'Authorization': 'Bearer ' + this.authenticationService.token});
    return this.http.get(endpoint, {headers: headers}).map((response:Response) => response.json());
  }
}