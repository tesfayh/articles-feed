import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "index",
    component: HomeComponent,
    data: { title: "Home", breadcrumb: "Articles" },
  },
  {
    path: "bookmarks",
    component: BookmarksComponent,
    data: { title: "Bookmarks", breadcrumb: "Bookmarked Articles" },
  },
  {
    path: "**",
    redirectTo: "index",
    pathMatch: "full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
