import PostRepository from "./posts-repository";




export default class PostGetAll {
  private readonly repository: PostRepository;
  constructor(repository: PostRepository) {
    this.repository = repository;
  }
  
  public async run(): Promise<void> {
    await this.repository.getAll();
  }
}
