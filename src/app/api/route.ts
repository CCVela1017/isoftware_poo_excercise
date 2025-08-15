import { NextRequest, NextResponse } from "next/server";
import PostRegister from "@/utils/posts-register";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { title, description, author } = data;
    const register = new PostRegister(title, description, author);

    await register.run(register.newPost);

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


