import { type NextRequest } from "next/server";
import { getBlog } from "../../../../lib/getBlog";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query: string | null = searchParams.get("slug");
  if (query === null)
    return Response.json({ status: false, msg: "slug not found" });
  const blogData = await getBlog(query);
  // console.log(blogData);
  return Response.json(blogData);
}
