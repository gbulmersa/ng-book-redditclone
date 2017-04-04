interface ArticleJSON {
  title: string;
  url: string;
  urlToImage: string;
  votes: number;
  publishedAt: string;
  description: string;
  author: string;
}

export class Article {
  public publishedAt: Date;

  // Article.fromJSON
  static fromJSON(json: ArticleJSON): Article {
    let article = Object.create(Article.prototype);
    return Object.assign(article, json, {
        votes: json.votes ? json.votes : 0,
        publishedAt: json.publishedAt ? new Date(json.publishedAt) : new Date(),
        imageUrl: json.urlToImage ? json.urlToImage : ""
      }
    );
  }

  //Using public inside const will declare and initiate for us.
  constructor(
    public title: string,
    public description: string,
    public imageUrl?: string,
    public votes?: number
  ) {
    this.votes = votes || 0;
    this.publishedAt = new Date();
  }

 

  public voteUp(): void {
    this.votes += 1;
  }

  public voteDown(): void {
    this.votes -= 1;
  }
}
