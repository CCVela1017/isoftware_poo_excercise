import { NextRequest, NextResponse } from "next/server";
import PostRegister from "@/utils/posts-register";
import PostgresPostsRepository from "@/utils/postgres-posts-repository";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    const repository = new PostgresPostsRepository();
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


