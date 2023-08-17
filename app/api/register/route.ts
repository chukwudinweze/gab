import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return new NextResponse("Missing information", { status: 400 });
    }

    const userExists = await prisma.user.findUnique({
      where: { email },
    });

    if (userExists) {
      return new NextResponse("User already exists", { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: { email, hashedPassword, name },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error("Error in POST request:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
