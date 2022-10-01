import React from "react";

export const TEN_SECONDS = 10 * 1000;
export type GameStatus = "COMPLETE" | "FAILED";
export type GameDifficulty = 0;

export interface GameProps {
  onCompletedCallback: (didComplete: GameStatus) => void;
  difficulty: GameDifficulty;
}

export const TestAGame = ({ Game }: { Game: React.FunctionComponent<GameProps>}) => {
  const [playing, setPlaying] = React.useState(false);
  const [didComplete, setComplete] = React.useState<undefined | GameStatus>();
  const callback = React.useCallback((didComplete: GameStatus)  => {
    setPlaying(false);
    setComplete(didComplete);
  }, []);

  return <>
    <button disabled={playing} onClick={() => {setPlaying(true)}}>Press To Play</button>
    <label>status is: {didComplete ?? "Uncompleted"}</label>
    <div>
      {playing ? <Game onCompletedCallback={callback} difficulty={0} /> : <></>}
    </div>
  </>
}