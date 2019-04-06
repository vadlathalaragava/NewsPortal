import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.page.html',
  styleUrls: ['./news-single.page.scss'],
})
export class NewsSinglePage implements OnInit {

  constructor(private newsService: NewsService,private router:Router) { }
  article:any;
  ngOnInit() {
    this.article = this.newsService.currentArticle;
    console.log(this.newsService.currentArticle);
  }
  goback(){
    this.router.navigate(['/tabs/news']);
  }
}
