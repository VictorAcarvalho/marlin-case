import { HttpClient } from '@angular/common/http';
import{ Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INews } from '../utils/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  SERVER_URL = 'https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/post';
  constructor(private http:HttpClient) { }
  
  public getNews():Observable<INews[]>{
    return this.http.get<INews[]>(this.SERVER_URL);
  }

  public getById(id:string):Observable<INews>{
    const urlID= `${this.SERVER_URL}/${id}`
    return this.http.get<INews>(urlID)
  }

  public createNews(news:INews):Observable<INews>{
    return this.http.post<INews>(this.SERVER_URL,news);
  }
}
