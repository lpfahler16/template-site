import IPlayer from "./player";
import * as Player from "./player";
import { Timer } from "react-use-precision-timer";

export default interface Game {
  player1: IPlayer;
  player2: IPlayer;
  prompt: string;
}

export interface GameProps {
  z?: number;
}

export const initGame = (game: Game) => {
  //   Player.deactivate(game.player1);
  Player.deactivate(game.player2);
  return game;
};

export const verifyGameState = (game: Game): boolean => {
  return (
    (!Player.active(game.player1) && !Player.active(game.player2)) ||
    verifyRunningGameState(game)
  );
};

export const verifyRunningGameState = (game: Game): boolean => {
  return Player.active(game.player1) !== Player.active(game.player2);
};

export const getPlayerByNumber = (
  game: Game,
  playerNumber: number
): IPlayer => {
  if (playerNumber == 1) return game.player1;
  if (playerNumber == 2) return game.player2;
  throw "invalid player number";
};

export const switchTurns = (game: Game) => {
  if (!verifyRunningGameState(game)) throw "invalid game state";
  if (Player.active(game.player1)) {
    Player.deactivate(game.player1);
    Player.activate(game.player2);
  } else {
    Player.activate(game.player1);
    Player.deactivate(game.player2);
  }
};

export const pause = (game: Game): void => {
  Player.deactivate(game.player1);
  Player.deactivate(game.player1);
};

export const recordGameState = (game: Game): void => {
  console.log("player 1 active:", Player.active(game.player1));
  console.log("player 2 active:", Player.active(game.player2));
};
