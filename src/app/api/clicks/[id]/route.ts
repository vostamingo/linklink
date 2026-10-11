import { links } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

// 링크 클릭 1회 기록
export async function POST(_req: Request, ctx: RouteContext<"/api/clicks/[id]">) {
  const { id } = await ctx.params;

  if (!links.some((link) => link.id === id)) {
    return Response.json({ error: "unknown link" }, { status: 404 });
  }

  const clicks = await getClicksCollection();
  if (!clicks) {
    return Response.json({ error: "MONGODB_URI not set" }, { status: 503 });
  }

  await clicks.updateOne({ _id: id }, { $inc: { clicks: 1 } }, { upsert: true });
  return new Response(null, { status: 204 });
}
