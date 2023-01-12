import { useTimer, Timer } from "react-use-precision-timer";

export default interface Player {
  timer: Timer;
  id: string;
}

/**
 * Create a player
 *
 * @param timer the timer to keep track of the player's time
 */
export const createPlayer = (timer: Timer, id: string): Player => {
  return {
    timer: timer,
    id: id,
  };
};

/**
 * Check if it is currently this players turn
 *
 * @param player the player to check the turn for
 */
export const active = (player: Player): boolean => {
  return player.timer.isRunning();
};

/**
 * Make it this players turn
 *
 * @param player the player to set the turn for
 */
export const activate = (player: Player): void => {
  player.timer.resume();
};

/**
 * Make it not this players turn
 *
 * @param player the player to set not the turn for
 */
export const deactivate = (player: Player): void => {
  player.timer.pause();
};
