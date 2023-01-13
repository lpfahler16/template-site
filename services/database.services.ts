import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { leaderboard?: mongoDB.Collection } = {};

export async function connectToDatabase() {
  console.log("Connecting to db...", process.env.DB_CONN_STRING);
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.DB_CONN_STRING as string
  );

  await client.connect();

  console.log("Connected to client");

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const leaderboardCollection: mongoDB.Collection = db.collection(
    process.env.COLLECTION_NAME as string
  );

  collections.leaderboard = leaderboardCollection;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${leaderboardCollection.collectionName}`
  );
}
