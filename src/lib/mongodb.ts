import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB ?? "linklink";

// 개발 모드의 핫 리로드마다 새 연결이 생기지 않도록 전역에 캐시한다.
const globalForMongo = globalThis as unknown as {
  mongoClientPromise?: Promise<MongoClient>;
};

/** MONGODB_URI가 없으면 null을 돌려준다(클릭 수 집계만 비활성화). */
export async function getClicksCollection() {
  if (!uri) return null;

  globalForMongo.mongoClientPromise ??= new MongoClient(uri).connect();
  const client = await globalForMongo.mongoClientPromise;

  return client
    .db(dbName)
    .collection<{ _id: string; clicks: number }>("clicks");
}
