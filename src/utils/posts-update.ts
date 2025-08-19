import PostRepository from "./posts-repository";
import Post from "./posts";


export default class PostUpdate {
  private readonly repository: PostRepository;
  constructor(repository: PostRepository) {
    this.repository = repository;
  }
  
  public async run(id: number, title: string, description: string, author: string): Promise<void> {
    const post = Post.create(title, description, author, id);
    await this.repository.update(post);
  }
}
