import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewslatterComponent} from './views/newslatter/newslatter.component';
import { NewsCrudComponent} from './views/news-crud/news-crud.component';
import {DetailsComponent} from './views/details/details.component';
const routes: Routes = [{
  path:"",
  component:NewslatterComponent
},{
  path:"newscreate",
  component:NewsCrudComponent
},{
  path:"details/:id",
  component:DetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
