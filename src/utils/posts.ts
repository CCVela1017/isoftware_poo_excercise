import PostTitle from "./posts-title";
import PostDescription from "./posts-description";
import PostAuthor from "./posts-author"; 




export default class Post {
  public id ?: number; 
  public title: PostTitle;
  public description: PostDescription;
  public author: PostAuthor;

  constructor(
    id: number | undefined,
    title: PostTitle,
    description: PostDescription,
    author: PostAuthor
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.author = author;
  }

  public static create(
    title: string,
    description: string,
    author: string,
    id?: number
  ) {
    const post = new Post(
      id, 
      new PostTitle(title),
      new PostDescription(description),
      new PostAuthor(author)
    )
    return post;
  }
}
