import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleService } from '../article.service';
import { Article } from '../article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
    private articles: Observable<Article[]>;

  constructor(private articleService: ArticleService) {
    this.articles = articleService.articles;
  }

  ngOnInit() {
    this.articleService.getArticles()
  }

}
