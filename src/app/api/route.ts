import { NextRequest, NextResponse } from "next/server";
import PostRegister from "@/utils/posts-register";
import PostgresPostsRepository from "@/utils/postgres-posts-repository";

const repository = new PostgresPostsRepository();

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const register = new PostRegister(repository);
    await register.run(data.title, data.description, data.author);

    return NextResponse.json(
      { message: "Data is valid" }
    );

  } catch (error) {
    return NextResponse.json(
      { error: "Failed to save post" },
      { status: 400 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const posts = await repository.getAll();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
