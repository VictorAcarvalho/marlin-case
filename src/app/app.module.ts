import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewslatterComponent } from './views/newslatter/newslatter.component';
import { NavSideBarComponent } from './componnents/templates/nav-side-bar/nav-side-bar.component';
import { NewsCrudComponent } from './views/news-crud/news-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    NewslatterComponent,
    NavSideBarComponent,
    NewsCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
