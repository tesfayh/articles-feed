import { Component, OnInit } from '@angular/core';
import { Article } from '../_models/article';
import { BookmarkService } from '../_services/bookmark.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {
p: number = 1;
articles: Article[] =[];
  constructor(private bookmarkService: BookmarkService) { }

  ngOnInit(): void {
    this.articles = this.bookmarkService.getBookmarks();
  }
remove(article: Article){
  if(confirm("Are you sure you want to remove it from bookmarks?")){
    this.bookmarkService.remove(article);
    window.location.reload();
  }
}
}
