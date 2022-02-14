import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';
import { INews } from '../../utils/news.model';
import { Router } from '@angular/router'
@Component({
  selector: 'app-newslatter',
  templateUrl: './newslatter.component.html',
  styleUrls: ['./newslatter.component.css']
})
export class NewslatterComponent implements OnInit {
     
  
  newsLatters: INews[] = [];
  
  constructor(private newsService:NewsService,private router:Router) {

   }

  ngOnInit(): void {
   this.newsService.getNews().subscribe( newsLatters=> {
     this.newsLatters = newsLatters;
   });
  }
  navigateToDetails():void{
    this.router.navigate(['/details']);
  }
}
