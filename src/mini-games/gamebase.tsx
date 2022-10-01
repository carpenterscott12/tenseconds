import React, { useCallback } from "react";

export const TEN_SECONDS = 10 * 1000;
export type GameStatus = "COMPLETE" | "FAILED";
export type GameDifficulty = 0;

export interface GameProps {
  onCompletedCallback: (didComplete: GameStatus) => void;
  difficulty: GameDifficulty;
}

/** Wraps the game to handle common cases, like timeout and ui. */
export const GameWrapper = ({onCompletedCallback, difficulty, Game}: GameProps & {Game: React.FunctionComponent<GameProps>} ) => {
  const [handler, setHandler] = React.useState<NodeJS.Timeout>();
  
  // wraps the callback to block the timeout if the game completes before the timeout is called.
  const callbackCondom = useCallback((status: GameStatus) => {
    onCompletedCallback(status);
    clearTimeout(handler);
  }, [onCompletedCallback, handler]);

  // Handles ten second timeout
  React.useEffect(() => {
    const timeoutHandle = setTimeout(() => callbackCondom("FAILED"), TEN_SECONDS);
    setHandler(timeoutHandle);
  }, [callbackCondom]);
  

  return <Game onCompletedCallback={callbackCondom} difficulty={difficulty} />
}

/** Provides a ui to test a game. */
export const TestAGame = ({ Game, meta }: {
  Game: React.FunctionComponent<GameProps>,
  meta: string,
}) => {
  const [playing, setPlaying] = React.useState(false);
  const [didComplete, setComplete] = React.useState<undefined | GameStatus>();
  const callback = React.useCallback((didComplete: GameStatus)  => {
    setPlaying(false);
    setComplete(didComplete);
  }, []);

  return <>
    <div style={{ display: "flex", flexDirection: "column", width: 180 }}>
      {meta}
      <button disabled={playing} onClick={() => {setPlaying(true)}}>Press To Play</button>
      <label>status is: {didComplete ?? "Uncompleted"}</label>
      <div>
        {playing ? <Game onCompletedCallback={callback} difficulty={0} /> : <></>}
      </div>
    </div>
  </>
}