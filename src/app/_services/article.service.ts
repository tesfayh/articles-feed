import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
  })
export class ArticleService {
    baseUrl = "https://newsapi.org/v2/everything?q=keyword";

    constructor(private http: HttpClient) { }

  getArticles(): Observable<any>{
    const headers = new HttpHeaders()
    .set('X-Api-Key', 'a6f0643366f7462cbae55c7ba5dc7d01');
    return this.http.get<[]>(this.baseUrl, { 'headers': headers });
  }
}