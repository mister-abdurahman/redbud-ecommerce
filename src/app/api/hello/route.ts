import { NextResponse } from "next/server";

// Handler for GET requests to /api/hello
export async function GET() {
  return NextResponse.json({ message: "Hello, world!" });
}
