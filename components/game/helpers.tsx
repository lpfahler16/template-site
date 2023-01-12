export function getYoutubeLikeToDisplay(millisec: number): string {
  var seconds: number = parseInt((millisec / 1000).toFixed(0));
  var minutes: number = Math.floor(seconds / 60);

  seconds = Math.floor(seconds % 60);
  var displaySeconds: string = seconds >= 10 ? seconds + "" : "0" + seconds;
  if (minutes == 0 && seconds < 10) {
    return minutes + ":" + displaySeconds + "." + (millisec + "").slice(-2);
  } else {
    return minutes + ":" + displaySeconds;
  }
}
