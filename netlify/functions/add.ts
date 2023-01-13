import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { LeaderboardPlace } from "../../components/stack/leaderboard";
import {
  collections,
  connectToDatabase,
} from "../../services/database.services";

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  try {
    await connectToDatabase();
  } catch {
    console.log("Failed to connect");
    return {
      statusCode: 200,
      body: JSON.stringify([]),
    };
  }

  if (event.body && collections.leaderboard) {
    const newPlace = JSON.parse(event.body) as LeaderboardPlace;
    const result = await collections.leaderboard.insertOne(newPlace);
    return {
      statusCode: 200,
      body: JSON.stringify(event.body),
    };
  } else {
    return {
      statusCode: 400,
    };
  }
};

export { handler };
