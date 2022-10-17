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
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
    return this.http.get<[]>(this.baseUrl, { 'headers': headers });
  }
}