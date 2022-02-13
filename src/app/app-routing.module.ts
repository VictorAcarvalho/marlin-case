import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewslatterComponent} from './views/newslatter/newslatter.component';
import { NewsCrudComponent} from './views/news-crud/news-crud.component';
const routes: Routes = [{
  path:"",
  component:NewslatterComponent
},{
  path:"newscreate",
  component:NewsCrudComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
