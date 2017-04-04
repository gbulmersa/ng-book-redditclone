import { Injectable } from '@angular/core';
import { Article } from './article';
import { Http, URLSearchParams } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { environment } from '../environments/environment';

@Injectable()
export class ArticleService {
  private _articles: BehaviorSubject<Article[]> = 
    new BehaviorSubject<Article[]>([]);
  
  public articles: Observable<Article[]> = this._articles.asObservable();

  constructor(
    private http: Http
  ) { }

  public getArticles(): void {
    //make the http request -> Observable
    // convert response into aricle class
    // update our subject
    this._makeHttpRequest('/v1/articles', 'reddit-r-all')
      .map(json => json.articles)
      .subscribe(articlesJSON => {
        const articles = articlesJSON 
          .map(articlejson => Article.fromJSON(articlejson));
        this._articles.next(articles);
      })
  }

  private _makeHttpRequest(
    path: string,
    sourceKey: string
  ): Observable<any> {
    let params = new URLSearchParams();
    params.set('apiKey', environment.newsApiKey);
    params.set('source', sourceKey);
    //`${baseUrl}/v1/articles?apiKey=${newsApiKey}`
    return this.http
      .get(`${environment.baseUrl}${path}`, {
       search: params
    }).map(resp => resp.json());
  }
}
