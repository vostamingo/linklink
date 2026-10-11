import { links } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

// 링크별 클릭 수 조회: { "instagram": 3, "github": 0, ... }
export async function GET() {
  const clicks = await getClicksCollection();
  if (!clicks) {
    return Response.json({ error: "MONGODB_URI not set" }, { status: 503 });
  }

  const docs = await clicks.find().toArray();
  const counts = Object.fromEntries(docs.map((doc) => [doc._id, doc.clicks]));

  return Response.json(
    Object.fromEntries(links.map((link) => [link.id, counts[link.id] ?? 0])),
  );
}
