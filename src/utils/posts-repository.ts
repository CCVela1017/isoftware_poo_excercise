import Post from "./posts";




export default interface PostRepository {
  save(post: Post): Promise<void>;
  getAll(): Promise<Post[]>;
  update(post: Post): Promise<void>;
}
