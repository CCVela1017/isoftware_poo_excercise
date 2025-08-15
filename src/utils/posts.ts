import PostTitle from "./posts-title";
import PostDescription from "./posts-description";
import PostAuthor from "./posts-author"; 


export default class Post {
  public title: PostTitle;
  public description: PostDescription;
  public author: PostAuthor;

  constructor(
    title: PostTitle,
    description: PostDescription,
    author: PostAuthor
  ) {
    this.title = title;
    this.description = description;
    this.author = author;
  }

  public static create(
    title: string,
    description: string,
    author: string 
  ) {
    const post = new Post(
      new PostTitle(title),
      new PostDescription(description),
      new PostAuthor(author)
    )
    return post;
  }
}
