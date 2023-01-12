export interface LeaderboardPlace {
  name: string;
  time: number;
}

export const addLeaderboard = (place: LeaderboardPlace) => {
  fetch(`.netlify/functions/add`, {
    method: "PUT",
    body: JSON.stringify(place),
    headers: { "Content-Type": "application/json" },
  });
};

export const showLeaderboard = (len: number): Promise<LeaderboardPlace[]> => {
  return fetch(`.netlify/functions/show`, {
    method: "PUT",
    body: JSON.stringify({ limit: len }),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};
