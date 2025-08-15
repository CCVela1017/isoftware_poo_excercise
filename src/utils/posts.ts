export default class Post {
  constructor(
    public title: string,
    public description: string,
    public author: string
  ) {
    this.validate(title, description, author);
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
      title,
      description,
      author
    )
    return post;
  }

  private validate(
    title: string,
    description: string,
    author: string
  ) {
    this.isValidTitle(title);
    this.isValidDescription(description);
    this.isValidAuthor(author);
  }

  private isValidTitle(title: string): void {
    if (typeof title !== "string") {
      throw new Error("Invalid title format");
    }

    if (!(title.length > 0 && title.length <= 100)) {
      throw new Error("Invalid title length");
    }
  }

  private isValidDescription(description: string): void {
    if (typeof description !== "string") {
      throw new Error("Invalid description format");
    }

    if (!(description.length > 0 && description.length <= 500)) {
      throw new Error("Invalid description length");
    }
  }

  private isValidAuthor(author: string): void {
    if (typeof author !== "string") {
      throw new Error("Invalid author format");
    }

    if (!(author.length > 0 && author.length <= 100)) {
      throw new Error("Invalid author length");
    }
  }
    
  
}