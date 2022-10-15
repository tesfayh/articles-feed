import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../_models/article';
const BOOKMARKS_KEY = 'bookmarks-key';

@Injectable()
export class BookmarkService {
    storage: Storage = window.localStorage;
    bookmarks: Article[] = [];
    constructor(private http: HttpClient) {
        let bookmarkData: (string | null) = this.storage.getItem(BOOKMARKS_KEY);
        if (bookmarkData != null && bookmarkData.length > 0) {
            try {
                this.bookmarks = JSON.parse(bookmarkData) as Article[];
            } catch (error) {
                console.error('Error parsing bookmarks', error);
            }
        }
    }
    bookmark(article: Article): boolean {
        if(!this.bookmarks.find((bookmark) => bookmark.url == article.url)){
            this.bookmarks.push(article);
            const bookmarkData: string = JSON.stringify(this.bookmarks);
            this.storage.setItem(BOOKMARKS_KEY, bookmarkData);
            return true;
        }
        return false;
    }
    getBookmarks(): Article[] {
        return this.bookmarks;
    }
    remove(article: Article) {
        let bookmarkData: (string | null) = this.storage.getItem(BOOKMARKS_KEY);
        if (bookmarkData != null && bookmarkData.length > 0) {
            try {
                this.bookmarks = JSON.parse(bookmarkData) as Article[];
                const tobeRemoved = this.bookmarks.find(bk => bk.url === article.url);
                console.log(tobeRemoved)
                if (tobeRemoved) {
                    let index = this.bookmarks.indexOf(tobeRemoved);
                    this.bookmarks.splice(index, 1);
                    const bookmarkData: string = JSON.stringify(this.bookmarks);
                    this.storage.setItem(BOOKMARKS_KEY, bookmarkData);
                }
            } catch (error) {
                console.error('Error parsing bookmarks', error);
            }
        }
        return this.bookmarks;
    }
}