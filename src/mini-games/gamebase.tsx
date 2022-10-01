import React from "react";

/** Const defining ten seconds. */
export const TEN_SECONDS = 10 * 1000;
/** The possible results of a game */
export type GameStatus = "COMPLETE" | "FAILED";
/** The possible difficulties of a game. */
export type GameDifficulty = 0;

export interface GameProps {
  onCompletedCallback: (didComplete: GameStatus) => void;
  difficulty: GameDifficulty;
}

/** Wraps the game to handle common cases, like timeout and ui. */
export const GameWrapper = ({onCompletedCallback, difficulty, Game}: GameProps & {Game: React.FunctionComponent<GameProps>} ) => {
  // There maybe a better way to do this, but I'm not sure what it is.
  // this needs to be a ref to keep things from triggering effects and render.
  const block = React.useRef<boolean>(false);
  // The only place we care about the current state is in the setState.
  const [_timeoutHandle, setHandle] = React.useState<NodeJS.Timer>();
  
  /** wraps the callback to block the timeout if the game completes before the timeout is called.
   * @note It's a condom because this is a "wrapper" callback that "protects" the callback from timing-out.
   */ 
  const callbackCondom = React.useCallback((status: GameStatus) => {
    if (block.current) return;
    onCompletedCallback(status);
    block.current = true;
  }, [onCompletedCallback]);

  /** Handles ten second timeout */
  React.useEffect(() => {
    const handle = setTimeout(() => callbackCondom("FAILED"), TEN_SECONDS);
    setHandle((oldHandle) => {
      clearTimeout(oldHandle);
      return handle;
    });
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