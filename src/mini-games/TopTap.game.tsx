import React from "react";
import { GameProps, GameWrapper } from "./gamebase";

const TopTap = ({onCompletedCallback}: GameProps) => {
  const goal = React.useMemo(() => 15, []);
  const [number, setNumber] = React.useState(0);

  React.useEffect(() => {
    if (number === goal) onCompletedCallback("COMPLETE");
  }, [number, goal, onCompletedCallback]);

  return <>
    <label>'{number}' out of {goal}</label>
    <button onClick={() => setNumber((num) => num+1)}>Click Me</button>
  </>
}

export const TopTapGame = (props: GameProps) => <GameWrapper Game={TopTap} {...props} />
