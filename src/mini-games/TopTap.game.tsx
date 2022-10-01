import React from "react";
import { GameProps, TEN_SECONDS } from "./gamebase";

// export const TopTapGame = <GameWrapper Game={TopTap}>

export const TopTap = ({onCompletedCallback}: GameProps) => {
  const goal = React.useMemo(() => 15, []);
  const [number, setNumber] = React.useState(0);

  React.useEffect(() => {
    if (number === goal) onCompletedCallback("COMPLETE");
  }, [number, goal, onCompletedCallback]);

  React.useEffect(() => {
    let blockTimeout = false;
    onCompletedCallback = (status) => {
      if (blockTimeout) return;
      onCompletedCallback(status);
      blockTimeout = true
    };
    setTimeout(() => {
      onCompletedCallback("FAILED");
    }, TEN_SECONDS);
  }, [onCompletedCallback]);
  
  return <>
    <label>'{number}' out of {goal}</label>
    <button onClick={() => setNumber((num) => num+1)}>Click Me</button>
  </>
}
