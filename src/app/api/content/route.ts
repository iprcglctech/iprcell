import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const allowedFiles = ["site", "team", "events", "journal", "join", "clinic"];

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const file = searchParams.get("file");

    if (!file || !allowedFiles.includes(file)) {
      return NextResponse.json({ error: "Invalid content file" }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), "src", "content", `${file}.json`);
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to read content" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { file, content } = body;

    if (!file || !allowedFiles.includes(file) || !content) {
      return NextResponse.json({ error: "Invalid payload or file key" }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), "src", "content", `${file}.json`);
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2), "utf-8");

    return NextResponse.json({ success: true, message: `Updated ${file}.json successfully` });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update content" }, { status: 500 });
  }
}
