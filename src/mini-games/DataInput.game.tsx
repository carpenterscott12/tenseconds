import React from "react";
import { GameProps, GameWrapper, TEN_SECONDS } from "./gamebase";

const DataInput = ({onCompletedCallback}: GameProps) => {
  const goal = React.useMemo(() => "this", []);

  return <>
    <label>You should type {goal}</label>
    <input onChange={(event) => {
      if (event.target.value === goal)
        onCompletedCallback("COMPLETE");
    }}></input>  
  </>;
}

export const DataInputGame = (props: GameProps) => <GameWrapper Game={DataInput} {...props} />
