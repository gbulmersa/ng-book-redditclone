import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    @Input() article: Article;

  constructor() { }

  upVote() {
    this.article.voteUp();
  }

  downVote() {
    this.article.voteDown();
  }
  ngOnInit() {
  }

}
