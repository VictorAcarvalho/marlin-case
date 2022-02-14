import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { NewsService } from '../../services/news.service';
import { INews } from '../../utils/news.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  newsDetail:INews;

  constructor(private newsService:NewsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
      const id  = this.route.snapshot.paramMap.get('id') as string;
      this.newsService.getById(id).subscribe(news=>{
        this.newsDetail = news
      });
     
  }

}
