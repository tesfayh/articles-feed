import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
  })
export class ArticleService {
    baseUrl = "https://newsapi.org/v2/everything?q=keyword";

    constructor(private http: HttpClient) { }

  getArticles(): Observable<any>{
    return this.http.get<[]>(this.baseUrl);
  }
}