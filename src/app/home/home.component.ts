import { Component, OnInit } from '@angular/core';
import { Article } from '../_models/article';
import { ArticleService } from '../_services/article.service';
import { BookmarkService } from '../_services/bookmark.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private articleService: ArticleService, private bookmarkService: BookmarkService) {
  }
  p: number = 1;
  title = 'article-feed';
  articles: Article[] = [];
  bookmarkedArticles: Article[] = [];
  totalPages: number = 0;
  itemsPerPage: number = 10;
  ngOnInit() {
    this.articleService.getArticles().subscribe((res) => {
      this.articles = res.articles;
      this.totalPages = this.articles.length / this.itemsPerPage;
      this.bookmarkedArticles = this.bookmarkService.getBookmarks();
      this.articles.forEach((article) => {
        if(this.bookmarkedArticles.find((art) => art.url == article.url))
          article.bookmarked = true;
      })
    });
  }
  bookmark(article: Article) {
    var result = this.bookmarkService.bookmark(article);
    if(result){
      alert("article bookmarked");
    }
    else{
      alert("Article already in bookmark");
    }
  }
  remove(article: Article){
    if(confirm("Are you sure you want to remove it from bookmarks?")){
      this.bookmarkService.remove(article);
      window.location.reload();
    }
  }
}
