import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiKeyInterceptor } from './_inteceptors/api-key.interceptor';
import { ArticleService } from './_services/article.service';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { BookmarkService } from './_services/bookmark.service';
import { HomeComponent } from './home/home.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    BookmarksComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    ArticleService,
    BookmarkService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiKeyInterceptor,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
