import { NextRequest, NextResponse } from "next/server";
import PostRegister from "@/utils/posts-register";
import PostGetAll from "@/utils/posts-getall";
import PostUpdate from "@/utils/posts-update";
import PostDelete from "@/utils/posts-delete";
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
    const get = new PostGetAll(repository);
    const posts = await get.run();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    const update = new PostUpdate(repository);
    await update.run(data.id, data.title, data.description, data.author);

    return NextResponse.json(
      { message: "Post updated successfully" }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update post" },
      { status: 400 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const data = await request.json();
    const id = data.id;
    const deletePost = new PostDelete(repository);
    await deletePost.run(id);

    return NextResponse.json(
      { message: "Post deleted successfully" }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete post" },
      { status: 400 }
    );
  }
}
