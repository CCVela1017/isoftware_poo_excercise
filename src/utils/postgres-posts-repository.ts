import Post from "./posts";
import postgres, { Sql } from "postgres";
import PostRepository from "./posts-repository";




export default class PostgresPostsRepository implements PostRepository {
  private sql: Sql;

  constructor() {
    const connectionString = "postgresql://postgres.qppbjdmbdxzzwsidgdnr:ultr4k4n0nD00von" +
      "@aws-0-us-east-1.pooler.supabase.com:6543/postgres";
    this.sql = postgres(connectionString);
  }

  public async save(post: Post): Promise<void> {
    try {
      const title = post.title.value;
      const description = post.description.value; 
      const author = post.author.value;

      await this.sql`INSERT INTO public.posts (title, description, author) VALUES (${title}, ${description}, ${author})`;
    } catch (error) {
      throw new Error("Failed to save post");
    }
  }

  public async getAll(): Promise<Post[]> {
    try {
      const result = await this.sql`SELECT * FROM public.posts`;
      return result.map((row: any) => new Post(row.id, row.title, row.description, row.author));
    } catch (error) {
      throw new Error("Failed to fetch posts");
    }
  }
}
