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
  await connectToDatabase();

  if (event.body && collections.leaderboard) {
    const result = await collections.leaderboard
      .find({})
      .sort("time")
      .toArray();
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } else {
    return {
      statusCode: 400,
    };
  }
};

export { handler };
