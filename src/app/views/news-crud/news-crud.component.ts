import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { INews } from '../../utils/news.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-news-crud',
  templateUrl: './news-crud.component.html',
  styleUrls: ['./news-crud.component.css']
})
export class NewsCrudComponent implements OnInit {
  news:INews ={
    title:'',
    image:'',
    body:''
  }

  constructor( private newsService: NewsService, private router:Router) { }


  ngOnInit(): void {
  }
  
  createNewsletter():void{
    this.newsService.createNews(this.news).subscribe(()=>{ 
        this.router.navigate(['/'])
      }
    )
  }
}
