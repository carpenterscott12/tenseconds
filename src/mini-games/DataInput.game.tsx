import React from "react";
import { GameProps, TEN_SECONDS } from "./gamebase";

export const DataInput = ({onCompletedCallback}: GameProps) => {
  const goal = React.useMemo(() => "You should type this", []);

  React.useEffect(() => {
    setTimeout(() => {
      onCompletedCallback(true);
    }, TEN_SECONDS);
  }, [onCompletedCallback]);
  
  return <>
    {goal}
    <input onChange={(event) => {
      if (event.target.value === goal)
        onCompletedCallback(true);
    }}></input>  
  </>;
}
