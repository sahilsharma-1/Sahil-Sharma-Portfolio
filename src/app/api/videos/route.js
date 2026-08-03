import { NextResponse } from "next/server";
import { getVideos } from "@/lib/vimeo";

export async function GET() {
  try {
    const videos = await getVideos();
    return NextResponse.json(videos);
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}